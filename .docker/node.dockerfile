FROM node:12.16.1-alpine

LABEL author="Dan Wahlin"

ENV CONTAINER=true

WORKDIR /var/www/node-service

COPY package.json package-lock.json ./
RUN npm install --only=prod

COPY ./server.js .
COPY ./api .
COPY ./data .

EXPOSE 8080

ENTRYPOINT ["node", "server.js"]