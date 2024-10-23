# Use a lightweight Node.js image
FROM node:19-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching layers
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY index.html ./
COPY styles.css ./
COPY server.js ./

# Expose the port your app runs on (change if needed)
EXPOSE 3000

# Command to run your app
CMD ["node", "server.js"]
