FROM node:19-alpine

WORKDIR /code

ADD app /code

EXPOSE 3000
