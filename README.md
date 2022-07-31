# Simple Express SNS Server
This is a very basic SNS server and meant to be used for other applications that are run locally to utilize. 
This was made to run in tandem with a chrome extension that was created to send a text alert when something on a webpage changes.

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)

## Installation
To install necessay modules
```
npm install
// or
yarn
```

## Setup
1. Ensure you have an .aws credentials file setup like below. This is used for the aws-sdk to target your sns service.
```
// ~/.aws/credentials
[default]
aws_access_key_id = <YOUR KEY ID HERE>
aws_secret_access_key = <YOUR ACCESS KEY HERE>
```
2. Ensure you have an SNS server running in AWS. See here for more info - [AWS SNS](https://aws.amazon.com/sns/)
3. Create a .env file based on the .env.example file.

### .env variables
- PORT (number) - The port you would like the server to run on.
- AWS_REGION (string) - The region your SNS server is running ie.) `us-east-1`
- AWS_TOPIC_ARN (string) - The arn of the SNS service you are targeting ie.) `arn:aws:sns:us-east-#:#########:Topic`

## Usage
This server is as basic as you can get. It's sole purpose is to create one route that you would post to send utilize an AWS SNS service.
It is a post route available at `/` and requires a body with a message key on it. That is the message that will be sent via SNS.

Build the app:
```
npm run build
// or
yarn build
```

Start the app:
```
npm run start
// or
yarn start
```

Run a dev server:
```
npm run dev
// or
yarn dev
```