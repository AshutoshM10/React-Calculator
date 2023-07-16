# Step 1: Use a Node.js base image to build the React app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use a lightweight web server to serve the built app
FROM node:14-slim

# Set the working directory
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/build ./build

# Install a simple http server to serve the app
RUN npm install 

# Expose port 80 for the web server
EXPOSE 3000

# Set the command to serve the app on port 80
CMD ["npm", "start"]
