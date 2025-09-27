#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SpeedApiStack } from './speed-api-stack.js';

// Create AWS app
const app = new cdk.App();

// Deploy our API to AWS
new SpeedApiStack(app, 'SpeedCalculator');