## Basics of getting started with a node.js server and react frontend

Run the following commands to build each docker container. The `-t` flag gives the container a custom name.

```
docker build . -t <container-name>
```

To spin up a container use the following. The `-p` flag specifies the `host:container` ports relationship:

```
docker run -p <port>:<port> <client-name>
docker run -p <port>:<port> <server-name>
```

### Other useful commands

Show current Docker processes running:

`docker ps`

Show all Docker images:

`docker images`
