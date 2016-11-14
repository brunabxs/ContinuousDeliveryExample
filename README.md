# ContinuousDeliveryExample
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

## Configuring Travis CI to access Amazon services
First, I suggest you to create an user for Travis (named Travis CI, for example) and to include only the policies required to access the services you want.
As we will use Travis to push the docker instance to ECR, I added the "AmazonEC2ContainerRegistryFullAccess" policy to Travis CI user.

After that, go to Travis CI and open the project settings to update the environment variables. Create the AWS_ACCESS_KEY_ID and the AWS_SECURITY_ACCESS_KEY using the values that you received when you created the Travis user.