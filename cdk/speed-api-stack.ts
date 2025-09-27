import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

// AWS setup for Speed Calculator API
export class SpeedApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Create a Lambda function (runs our Express code)
    const speedFunction = new lambda.Function(this, 'SpeedFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,        // Use Node.js 20
      handler: 'lambda/handler.handler',          // Point to our handler file  
      code: lambda.Code.fromAsset('dist'),        // Use our built code
      timeout: cdk.Duration.seconds(30)           // Max 30 seconds to respond
    });

    // Create API Gateway (handles HTTP requests)
    const api = new apigateway.RestApi(this, 'SpeedApi', {
      restApiName: 'Speed Calculator',
      description: 'API for calculating character speed'
    });

    // Connect API Gateway to Lambda function
    const integration = new apigateway.LambdaIntegration(speedFunction);
    
    // Make all requests go to our Lambda function
    api.root.addProxy({
      defaultIntegration: integration,
      anyMethod: true
    });

    // Show the API URL when deployed
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'Speed Calculator API URL'
    });
  }
}