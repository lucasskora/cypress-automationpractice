# Installing Ubuntu 18.04 Docker
 
  Installation documentation:
  
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-pt
 
# DockerHub
 
  Images and tags published to DockerHub:
 
https://hub.docker.com/r/cypress/base
https://hub.docker.com/r/cypress/browsers
https://hub.docker.com/r/cypress/included
 
Project run Docker:
 
* docker build -t cypress .
* docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.4.0