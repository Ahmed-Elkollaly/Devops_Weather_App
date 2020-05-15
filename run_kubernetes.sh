#!/usr/bin/env bash

# This tags and uploads an image to Docker Hub

# Step 1:
# This is your Docker ID/path
dockerpath="2121994/weather_app_blue"

# Step 2
# Run the Docker Hub container with kubernetes
kubectl run weather_app_blue --image=$dockerpath --port=3000 --labels app=weather_app_blue
kubectl apply -f ./blue-controller.json
#kubernetes green/blue
kubectl apply -f ./blue-green-service.json

# Step 3:
# List kubernetes pods
kubectl get pods

# Step 4:
# Forward the container port to a host
kubectl port-forward deployment/weather_app_blue 8000:3000
