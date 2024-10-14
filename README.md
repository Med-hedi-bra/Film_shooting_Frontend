# Film Shooting Frontend
This project serves as the frontend for a system that assists administrators in managing a high volume of actor applications for film production.


## Related Repositories

- [Backend Repository](https://github.com/Med-hedi-bra/Film_shooting_Backend.git) - The backend part of the project can be found here.

# Frontend Repository
This documentation demonstrates how to run a React application using Docker and Docker Compose. The provided `docker-compose.yml` file helps you build and run the React app container.

## Prerequisites

Before starting, ensure you have the following installed:

- **Docker**: Install Docker from the official website [here](https://www.docker.com/get-started).
- **Docker Compose**: Comes pre-installed with Docker Desktop, but you can check the installation guide [here](https://docs.docker.com/compose/install/) if needed.

## How to Use

# 1. Clone the repository
You can clone the repository using this command
```bash
git clone https://github.com/Med-hedi-bra/Film_shooting_Frontend.git
cd Film_shooting_Frontend
```

# 2. Setup environement
You need to create a `.env` file based on the `.env.dist` file using the following command:

```bash
cp .env.dist .env
```
After that, you can customize your environment by modifying the values in the .env file to suit your specific situation.

```
REACT_APP_BACKEND_URL = "http://localhost:8080"
REACT_APP_CHAT_PROJECT_KEY=changeit
REACT_APP_CHAT_PROJECT_ID=changeit
REACT_APP_ADMIN_USERNAME=admin@admin.com
REACT_APP_ADMIN_SECRET=admin
```
###### Note: If you want to change the application's port, make sure to also update it in the docker-compose.yml file; otherwise, you may encounter issues related to port misconfiguration. 

# 2. Build and Run the React App
To run the project, you first need to build the Docker image and then start it. If you make any changes or improvements to the code, you will need to rebuild the image

```bash
docker compose -f docker-compose.yml up -d --build
```
This command will:
 - Build the Docker image based on the Dockerfile
 - Run the app container in detached mode (-d)

# 3. Running the React App (Without Rebuilding)
If the image is already built and you want to run the React app container, use:
```bash
docker compose -f docker-compose.yml up -d
```
# 4. Stopping the Application
To stop and remove the running containers, execute:
```bash
docker compose -f docker-compose.yml down
```
# 5. Accessing the Application
 Once the container is up and running, access the React app at: http://localhost:3000

# Additional Notes:
 - Ensure Docker is running before executing the Docker Compose commands.
 - You may need to modify the docker-compose.yml or Dockerfile to fit your project.

# Development purpose 
If you intend to add new features or make significant changes to the code, using Docker may not be the best approach in this situation. You might need to install Node.js and npm directly on your machine.
##### Node version : 14.x.x
##### NPM version: 10.5.2
