# End-to-End Sentiment Analysis

This repository contains the Sentiment Analysis Deployment Project for Udacity Machine Learning Engineer Nanodegree. The [Sagemaker_Project](./Sagemaker_Project) directory contains the jupyter notebook and python files of the model, training and prediction scripts.

### Project Details

* The sentiment analysis is built using Pytorch and deployed in AWS Sagemaker as an Endpoint
* The deployed model Endpoint communicates to AWS Lambda which in turn communicates to AWS API Gateway which listens to REST POST request from the web app
* The web app sends a post request to API Gateway which triggers the Lambda function and invokes the model Endpoint which then returns the prediction as a response

![project diagram](https://github.com/theneuralbeing/sagemaker-sentiment-analysis/blob/master/Sagemaker_Project/Web%20App%20Diagram.svg)
