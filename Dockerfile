FROM node:20
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["npm", "start"]


# # Stage 1: Build the React app
# FROM node:20 AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Build the React app
# RUN npm run build

# # Stage 2: Serve the app with Nginx
# FROM nginx:alpine

# # Copy the build files from the first stage
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
