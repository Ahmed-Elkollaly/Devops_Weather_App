#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

# Step 1:
# Create dockerpath
dockerpath="2121994/weather_app_blue"

# Step 2:  
# Authenticate & tag
echo "Docker ID and Image: $dockerpath"
docker login --username=2121994
docker tag 17f43abd5725 2121994/weather_app_blue

# Step 3:
# Push image to a docker repository
docker push 2121994/weather_app_blue
