#!/usr/bin/env bash


# Step 1:
# Build image and add a descriptive tag
docker build --tag=weather_app_blue .

# Step 2: 
# List docker images
docker image ls

# Step 3: 
# Run nodejs app
docker run -p 8000:3000 weather_app_blue

