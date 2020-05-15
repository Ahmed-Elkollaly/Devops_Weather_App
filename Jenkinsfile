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
                script {
                    docker.build blueRegistry + ":$BUILD_NUMBER"
                    docker.build greenRegistry + ":$BUILD_NUMBER"
                }
            }
        }
	    stage('Lint HTML') {
            steps {
                sh 'tidy -q -e *.html'
            }
        }
    }
}