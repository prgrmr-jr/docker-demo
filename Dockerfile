FROM node:20.17.0

WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application, including .env
COPY . .

# Expose the port your app will run on
EXPOSE 8080

# Start the application
CMD [ "npm", "run", "dev" ]
