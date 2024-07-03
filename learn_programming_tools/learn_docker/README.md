# This is a few notes from code with mosh lecture on docker

- Docker is an application for building, running, and shipping applications.
- A container is an isolated environment for running an application.
- Docker used a client server architecture, which means it has a client component
  that communicates with a server component using REST API. The server is also
  called the docker engine
- To dockerize an application you add a docker file to the app which is a plain text
  file that docker docker uses to package the information into an image.
- To create a docker just add a file named Docker in the directory of your application
- When writing a docker file use you can start from building on existing images.
- To tell docker to package the application after creating a `Dockerfile`, use the command `docker build -t 'tag-name' 'app-dir'`
- To see all the images created locally on a computer we use the cmd `docker images` or `docker image ls`
