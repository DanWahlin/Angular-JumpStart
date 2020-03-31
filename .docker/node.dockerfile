FROM node:12.16.1-alpine

LABEL author="Dan Wahlin"

WORKDIR /var/www/node-service

COPY package.json package-lock.json ./
RUN npm install --only=prod

COPY . .

EXPOSE 8080

ENTRYPOINT ["node", "server.js"]