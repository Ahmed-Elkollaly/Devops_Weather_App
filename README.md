
## Project Overview

A CI/CD pipeline for weather app with blue/green deployment using Jenkins and Kubernetes. 

### Project Features
* Using Jenkins to implement Continuous Integration and Continuous Deployment
* Building pipelines
* Creating Kubernetes clusters using AWS EKS in the pipeline
* Building Docker containers in pipeline

---
## Pipelines
### Create Resources Pipeline
* Create Amazon EKS cluster 
* Setup Config File for cluster

### CI Pipleine
* Lintting : lint Dockerfile
* Build Docker Images : build images for both green & blue images
* Upload Images to DockerHub
* Deploy Images to Amazon EKS cluster

Note: `Jenkinsfile` file contains all the details about the pipelines
---

## Setup the Environment on Jenkins

* Fork the repository
* Switch to `resource-creation` branch  
* Setup Jenkin with Github
* Run pipeline on that branch to create the resources needed.
* Switch to `master` branch 
* Run pipline on `master` to run other stages

### Running Locally using Docker

1. Switch to `blue` branch & Run the blue Docker version :  `./run_docker_blue.py`
2. Switch to `green` branch & Run the green Docker version :  `./run_docker_green.sh`


