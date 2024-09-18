# Docker Demo

This repository contains a simple Docker demo project.

## Prerequisites

- Docker installed on your machine
- Docker Compose (optional, if using docker-compose.yml)

    ### Documentation
    [Docker Documentation](https://docs.docker.com/)

    ### Installation
    [Windows](https://docs.docker.com/desktop/install/windows-install/)

    [Mac OS](https://docs.docker.com/desktop/install/mac-install/)

    [Linux](https://docs.docker.com/desktop/install/linux/)

## Getting Started

### Building the Docker Image

To build the Docker image, run the following command in the project directory:

```sh
docker build -t docker-demo .
```

### Running the Docker Container

To run the Docker container, use the following command:

```sh
docker run docker-demo
```

This will start the container and map port 8080 on your host to port 80 in the container.

### Using Docker Compose

If you prefer to use Docker Compose, you can start the services defined in `docker-compose.yml` by running:

```sh
docker-compose up -d
```

### View Running Docker

```sh
docker ps
```

## Docker Commands

For a comprehensive list of Docker commands, refer to the [Docker Commands](Docker%20Commands.md) file.