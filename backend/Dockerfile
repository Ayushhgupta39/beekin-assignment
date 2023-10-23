# Use an official Node.js runtime as the base image
FROM node:16

# We use nodemon to restart the server every time there's a change
RUN npm install -g nodemon

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app will run on
EXPOSE 8080

# Define the command to run your application
CMD ["node", "server.js"]
