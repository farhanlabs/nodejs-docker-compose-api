# Use lightweight Node.js image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy only dependency files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining application code
COPY . .

# Expose app port
EXPOSE 8080

# Start the application
# Use lightweight Node.js image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy only dependency files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining application code
COPY . .

# Expose app port
EXPOSE 8080

# Start the application
CMD ["node", "index"]