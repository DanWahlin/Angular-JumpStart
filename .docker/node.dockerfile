FROM node:10.15.3-alpine

LABEL author="Dan Wahlin"

WORKDIR /var/www/node-service

COPY package.json package.json
RUN npm install --only=prod

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]