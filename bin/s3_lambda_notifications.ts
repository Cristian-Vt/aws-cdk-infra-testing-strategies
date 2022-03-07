#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {S3LambdaNotificationsStack} from '../lib/s3_lambda_notifications-stack';

const app = new cdk.App();
new S3LambdaNotificationsStack(app, 'S3LambdaNotificationsStack');
