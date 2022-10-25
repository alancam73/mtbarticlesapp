# Lambda function to accept a new user with their MTB topics preferences
# Stores the topics preferences in a Dynamo DB table
# Also handles the Unsubscribe function ie deletes user from DDB table(s)

import json
import boto3
import os
import botocore
from botocore.exceptions import ClientError
import uuid
import time
from datetime import datetime
import string
import random


ddbResource = boto3.resource('dynamodb')


# randomized UserId until we get Cognito working
def id_generator(size=16, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


# put user & topic details in the DynamoDB table
def recordUserTopics(userId, emailAddr, bitMask):
    
    # Getting today's date and time
    currTime = datetime.now()
    currTimeISO = currTime.isoformat("T", "milliseconds")

    item = {
        'userId': userId,
        'emailAddress': emailAddr,
        'lastTopicSubmitDate': currTimeISO,
        'accountActive': bool(1),
        'topics': bitMask
    }
    
    print('User details: ', 'Item: ', item)
    
    table = ddbResource.Table('mtbTopics-Users-Topics')
    data = table.put_item(Item=item)


# delete user if unsubscribe button pressed
def deleteUser(userId):
    
    userTable = ddbResource.Table('mtbTopics-Users-Topics')
    udata = userTable.delete_item(Key={
        'userId': userId
    })
    
    articlesTable = ddbResource.Table('mtbTopics-Users-ArticlesPushed')
    adata = articlesTable.delete_item(Key={
        'userId': userId
    })



# main lambda function handler
def handler(event, context):
  
  print('received event:', event)
  print('API path:', event['path'])
  print(event['pathParameters'])
  # print(event)
  
  apiPath = event['path']
  
  # perform different actions depending on which API path is traversed
  if apiPath.startswith("/topics"):
      
      if event['requestContext']['authorizer']:
          print('claims: ', event['requestContext']['authorizer']['claims'])
          mtbUserId = event['requestContext']['authorizer']['claims']['cognito:username']
      else:
          # 16 ASCII-char random RideId
          mtbUserId = id_generator()
      print('Username is: ', mtbUserId)
      
      # get the associated email address from Cognito Auth
      emailAddr = ''
      emailAddr = event['requestContext']['authorizer']['claims']['email']
      
      print('Username: ', mtbUserId, 'Email: ', emailAddr)
      
      topicsBitMask = event['pathParameters']['bitmask']
      recordUserTopics(mtbUserId, emailAddr, topicsBitMask)

  elif apiPath.startswith("/unsubscribe"):
      if event['requestContext']['authorizer']:
          mtbUserId = event['requestContext']['authorizer']['claims']['cognito:username']
      print("unsubscribing", mtbUserId)
      deleteUser(mtbUserId)
      
  
  
  response = {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }
  
  return response
