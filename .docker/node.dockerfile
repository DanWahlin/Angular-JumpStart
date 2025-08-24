FROM node:22-alpine

LABEL author="Dan Wahlin"

ENV CONTAINER=true

WORKDIR /var/www/node-service

COPY package.json package-lock.json ./
RUN npm config set strict-ssl false && npm install express --no-audit --no-fund

COPY ./server.js .
COPY ./public ./public

EXPOSE 8080

ENTRYPOINT ["node", "server.js"]