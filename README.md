# GitHubTravisAwsEcsDockerExample
![](https://travis-ci.org/brunabxs/ContinuousDeliveryExample.svg?branch=master "Travis CI build status")

This project shows an example of continuous deployment with GitHub, Travis CI, Amazon EC2 Container Service (ECS) and Docker.

## Ideia
The idea is to deploy a simple NodeJS application in Amazon ECS. When we push updates to GitHub, Travis CI will run the tests. Then, it will create and push a Docker instance to Amazon EC2 Container Register (ECR). After that, the Amazon service is updated and we will have a new version of our NodeJS application up and running.

## What are we using?
  * [GitHub](https://github.com)
  * [Docker](https://www.docker.com/)
  * [Amazon EC2 Container Service](https://aws.amazon.com/pt/ecs/), also known as ECS
  * [Amazon EC2 Container Register](https://aws.amazon.com/pt/ecr/), also known as ECR
  * [Travis CI](https://travis-ci.com/)
  * [NodeJS](https://nodejs.org/)
