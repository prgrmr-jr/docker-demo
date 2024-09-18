## Docker CLI Commands

### Images
- **`docker images`** or **`docker image ls`**
  - List all images on the local machine.
- **`docker pull <image>`**
  - Pull an image from a repository.
- **`docker rmi <image>`** or **`docker image rm <image>`**
  - Remove an image from the local machine.
- **`docker tag <source> <target>`**
  - Tag an image with a new name.

### Containers
- **`docker ps`** or **`docker container ls`**
  - List all running containers.
- **`docker ps -a`** or **`docker container ls -a`**
  - List all containers, including stopped ones.
- **`docker run <options> <image>`** or **`docker container run <options> <image>`**
  - Run a new container from an image.
- **`docker stop <container>`** or **`docker container stop <container>`**
  - Stop a running container.
- **`docker start <container>`** or **`docker container start <container>`**
  - Start a stopped container.
- **`docker restart <container>`** or **`docker container restart <container>`**
  - Restart a running or stopped container.
- **`docker rm <container>`** or **`docker container rm <container>`**
  - Remove a container.
- **`docker exec -it <container> <command>`**
  - Execute a command inside a running container.

### Dockerfile
- **`docker build -t <tag> .`**
  - Build an image from a Dockerfile in the current directory.
- **`docker build -t <tag> <context>`**
  - Build an image from a Dockerfile in a specified directory.
- **`docker build -t <tag> --file <Dockerfile> <context>`**
  - Build an image using a specific Dockerfile.

### Volumes
- **`docker volume ls`**
  - List all Docker volumes.
- **`docker volume create <volume>`**
  - Create a new volume.
- **`docker volume rm <volume>`**
  - Remove a volume.
- **`docker volume inspect <volume>`**
  - Inspect a volume for detailed information.

### Networks
- **`docker network ls`**
  - List all Docker networks.
- **`docker network create <network>`**
  - Create a new Docker network.
- **`docker network rm <network>`**
  - Remove a Docker network.
- **`docker network inspect <network>`**
  - Inspect a network for detailed information.

### Docker Compose
- **`docker-compose up`** or **`docker-compose up -d`**
  - Start all services defined in `docker-compose.yml`. The `-d` flag runs containers in detached mode.
- **`docker-compose down`**
  - Stop and remove all containers defined in `docker-compose.yml`.
- **`docker-compose build`**
  - Build or rebuild services defined in `docker-compose.yml`.
- **`docker-compose logs`**
  - View logs for all services.
- **`docker-compose exec <service> <command>`**
  - Execute a command inside a running service container.
- **`docker-compose run <service> <command>`**
  - Run a one-off command against a service.

### System
- **`docker system df`**
  - Show disk usage by Docker components.
- **`docker system prune`**
  - Remove unused data (containers, networks, images, and optionally volumes).
- **`docker info`**
  - Display system-wide information about Docker.

### Tagging and Pushing
- **`docker tag <source> <target>`**
  - Tag an image with a new name.
- **`docker push <image>`**
  - Push an image to a Docker repository.

### Logging and Troubleshooting
- **`docker logs <container>`**
  - View logs for a container.
- **`docker stats`**
  - Show a live stream of container resource usage statistics.
- **`docker inspect <container>`**
  - View detailed information about a container or image.

## Shortcuts
- **`docker img`** -> `docker image`
- **`docker cont`** -> `docker container`
- **`docker vol`** -> `docker volume`
- **`docker net`** -> `docker network`
