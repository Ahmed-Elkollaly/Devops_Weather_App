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
        
        stage('Creating Resources') {
            when {
                branch 'resource-creation'  
            }
            steps {
                sh 'hadolint Dockerfile'
            }

        }
        stage('Lintting') {
            steps {
                sh 'hadolint Dockerfile'
            }
        }
        stage('Build Docker Images') {
            steps{
                script {
                    blueDockerImage = docker.build blueRegistry + ":$BUILD_NUMBER"
                    greenDockerImage = docker.build greenRegistry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Deploy Image') {
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
            steps{
                sh "docker rmi $blueRegistry:$BUILD_NUMBER"
                sh "docker rmi $greenRegistry:$BUILD_NUMBER"
            }
        }
        stage('')
    }
}