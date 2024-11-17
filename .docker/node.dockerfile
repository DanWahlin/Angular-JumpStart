FROM node:22-alpine

LABEL author="Dan Wahlin"

ENV CONTAINER=true

WORKDIR /var/www/node-service

COPY package.json package-lock.json ./
RUN npm install --only=prod --no-optional

COPY ./server.js .
COPY ./api .
COPY ./public/data .

EXPOSE 8080

ENTRYPOINT ["node", "server.js"]