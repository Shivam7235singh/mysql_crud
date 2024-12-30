# Use the official Node.js image as the base image
FROM node:latest

# Copy application files to the container
COPY . /home/myapp

# Set the working directory inside the container
WORKDIR /home/myapp

# Install dependencies
RUN npm install

# Expose the port the app listens on
EXPOSE 9000

# Define the command to run the application
CMD ["node", "server"]
