import { Template } from 'aws-cdk-lib/assertions';
import {App, Stack, aws_lambda, Duration} from "aws-cdk-lib";
import constructs = require('../lib/s3_lambda_notifications-stack');

//used to test the lambda config
import'@aws-cdk/assert/jest'

// succinct way
test('lambda_resource', () => {

  const stack = new Stack();
  const construct_resource  = new constructs.S3LambdaNotificationsStack(stack, 'Constructs');

  expect(construct_resource).toHaveResource('AWS::Lambda::Function', {
    Handler: "index.main",
    MemorySize: 1024,
    Runtime: "nodejs14.x",
    Timeout: 5
  })

  expect(construct_resource).toHaveResource('AWS::S3::Bucket', {
    // UpdateReplacePolicy: "Delete",
    DeletionPolicy: "Delete",
  })
});


// enhanced way
// test('lambda_resource', () => {

//   const app = new App();

  // const s3LambdaTriggerStack  = new Stack(app, "S3LambdaTrigger")

  // const lambda_resource  = new lambda.S3LambdaNotificationsStack(s3LambdaTriggerStack, 'Lambda');

  // const template = Template.fromStack(lambda_resource)

  // using build in cdk library to test
  // template.hasResource('AWS::Lambda::Function', {});

// using external library to test
  // expect(lambda_resource).toHaveResource('AWS::Lambda::Function', {
  //   MemorySize: 1024,
  // })

// one liner
//     Template.fromStack(
//     new lambda.S3LambdaNotificationsStack(
//       new Stack(
//         app), 'Lambda'))
//         .hasResource('AWS::Lambda::Function', {
//         })

// });