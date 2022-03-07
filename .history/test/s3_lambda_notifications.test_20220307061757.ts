import { Template } from 'aws-cdk-lib/assertions';
import {App, Stack, aws_lambda, Duration} from "aws-cdk-lib";
import lambda = require('../lib/s3_lambda_notifications-stack');

//used to test the lambda config
import'@aws-cdk/assert/jest'

// enhanced way
test('lambda_resource', () => {

  const app = new App();

  const s3LambdaTriggerStack  = new Stack(app, "S3LambdaTrigger")

  const lambda_resource  = new lambda.S3LambdaNotificationsStack(s3LambdaTriggerStack, 'Lambda');

  const template = Template.fromStack(lambda_resource)

  // using build in cdk library to test
  // template.hasResource('AWS::Lambda::Function', {});

// using external library to test
  // expect(lambda_resource).toHaveResource('AWS::Lambda::Function', {
  //   MemorySize: 1024,
  //   // timeout: Duration.seconds(5),
  //   runtime: aws_lambda.Runtime.NODEJS_14_X,
  // })

// one liner
    Template.fromStack(
    new lambda.S3LambdaNotificationsStack(
      new Stack(
        app), 'Lambda'))
        .hasResource('AWS::Lambda::Function', {
          MemorySize: 1024,
    timeout: Duration.seconds(5),
    runtime: aws_lambda.Runtime.NODEJS_14_X,
        })

});
  
// succint way
// test('lambda_resource', () => {

//   const stack = new Stack();
//   const lambda_resource  = new lambda.S3LambdaNotificationsStack(stack, 'Lambda');

//   expect(lambda_resource).toHaveResource('AWS::Lambda::Function', {
//     MemorySize: 1024
//   })
// });