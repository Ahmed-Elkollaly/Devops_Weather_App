pipeline {
    environment {
    blueRegistry = "2121994/weather_app_blue"
    greenRegistry = "2121994/weather_app_green"
    registryCredential = 'dockerhub'
    }
    agent any
    stages {
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t 2121994/weather_app_blue -f Devops_Weather_App/blue/Dockerfile Devops_Weather_App/blue/'
                sh 'docker build -t 2121994/weather_app_green -f Devops_Weather_App/green/Dockerfile Devops_Weather_App/green/'
                
            }
        }
	    stage('Lint HTML') {
            steps {
                sh 'tidy -q -e *.html'
            }
        }
    }
}