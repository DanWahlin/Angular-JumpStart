FROM node:14.17.0-alpine

LABEL author="Dan Wahlin"

ENV CONTAINER=true

WORKDIR /var/www/node-service

COPY package.json package-lock.json ./
RUN npm install --only=prod --no-optional

COPY ./server.js .
COPY ./api .
COPY ./data .

EXPOSE 8080

ENTRYPOINT ["node", "server.js"]