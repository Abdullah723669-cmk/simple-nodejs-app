# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Start the app
CMD ["node", "src/server.js"]
