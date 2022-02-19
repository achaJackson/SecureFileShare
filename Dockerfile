#node:alpine (alpine version) gets the most basic installation of node. alpine is
#a very small image

#install from a base image
#image must be lowecase
FROM node:12.18.4-alpine

#create a working folder to avoid conflict with your project files and container sys files
#the folder will be auto created if not existing.
WORKDIR /usr/app

#Copy to avoid unnecessary rebuilds
COPY ./package.json ./
#copy local work dir to container dir
COPY ./ ./
#install dependencies
RUN npm install

#expose the port 3000 on both container and local machine
#EXPOSE 3000

#tell the container what to do when it starts
CMD ["npm" , "start"] 