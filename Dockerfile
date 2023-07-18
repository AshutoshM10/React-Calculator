# Step 1: Use a Node.js base image to build the React app
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the rest of the app source code to the container
COPY . .

# Install project dependencies
RUN npm install

# Expose port 80 for the web server
EXPOSE 3000

# Set the command to serve the app on port 80
CMD ["npm", "start"]
