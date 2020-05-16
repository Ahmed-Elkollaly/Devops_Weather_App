pipeline {
    environment {
        blueRegistry = "2121994/weather_app_blue"
        greenRegistry = "2121994/weather_app_green"
        registryCredential = 'dockerhub'
        blueDockerImage = ''
        greenDockerImage = ''
    }
    agent any
    stages {
        
         
        stage('Create the kubernetes cluster') {
            when {
                branch 'resource-creation'  
            }
            steps {
                withAWS(region:'us-east-2', credentials:'aws-static') {
					sh '''
						eksctl create cluster --name weather-cluster --version 1.13 \
												--nodegroup-name standard-workers \
												--node-type t2.small \
												--nodes 2 \
												--nodes-min 1 \
												--nodes-max 3 \
												--node-ami auto \
												--region us-east-2 \
												--zones us-east-2a \
												--zones us-east-2b \
												--zones us-east-2c
					'''
				}
            }

        }
        stage('Create a configuration file for kubectl cluster') {
            when {
                branch 'resource-creation'  
            }
            steps {
				withAWS(region:'us-east-2', credentials:'aws-static') {
					sh '''
						aws eks --region us-east-2 update-kubeconfig --name weather-cluster
					'''
				}
			}


        }
        stage('Lint') {
            when {
                not {
                    branch 'resource-creation'
                }
            }
            steps {
                sh 'hadolint Dockerfile'
            }
        }
        stage('Build Docker Images') {
            when {
                not {
                    branch 'resource-creation'
                }
            }
            steps{
                script {
                    blueDockerImage = docker.build blueRegistry + ":$BUILD_NUMBER"
                    greenDockerImage = docker.build greenRegistry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Upload images to docker') {
            when {
                not {
                    branch 'resource-creation'
                }
            }
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        blueDockerImage.push()
                        greenDockerImage.push()
                    
                    }
                }
            }
        }
        stage('Remove Unused docker image locally') {
            when {
                not {
                    branch 'resource-creation'
                }
            }
            steps{
                sh "docker rmi $blueRegistry:$BUILD_NUMBER"
                sh "docker rmi $greenRegistry:$BUILD_NUMBER"
            }
        }
        
       
    }
}