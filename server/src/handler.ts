import type {
  APIGatewayProxyHandler
} from 'aws-lambda'
import { DynamoDB } from 'aws-sdk'
import * as card from './card/card'
const dynamoDB = new DynamoDB.DocumentClient()

const defaultHeader = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:8082',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT'
}

export const test: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      ...defaultHeader
    },
    body: JSON.stringify({
      message: 'connection is good!',
      input: event,
      context
    })
  }
}

export const getCard: APIGatewayProxyHandler = async (event, context) => {
  // const deviceId = event.pathParameters ? event.pathParameters.device_id : null
  const params = {
    TableName: 'flash_card'
  }

  try {
    const data = await dynamoDB.scan(params).promise()
    return {
      statusCode: 200,
      headers: {
        ...defaultHeader
      },
      body: JSON.stringify(data.Items)
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      headers: {
        ...defaultHeader
      },
      body: JSON.stringify({ message: 'Internal Server Error' })
    }
  }
}

export const addCard: APIGatewayProxyHandler = async (event, context) => {
  try {
    if (event.body === undefined || !(typeof event.body === 'string')) throw new Error('body undefined!')
    const cardData = JSON.parse(event.body) as card.TCardData
    const res = await card.addCard(cardData)
    return {
      statusCode: 200,
      headers: {
        ...defaultHeader
      },
      body: res
    }
  } catch (error) {
    console.log('error: ' + error.message)
    console.log(JSON.stringify(error))
    return {
      statusCode: 500,
      headers: {
        ...defaultHeader
      },
      body: JSON.stringify({ message: 'Internal Server Error' })
    }
  }
}
