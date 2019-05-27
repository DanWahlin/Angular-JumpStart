##### Stage 1
FROM node:10.15.3-alpine as node
LABEL author="Dan Wahlin"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./.docker/config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t nginx-angular -f nginx.dockerfile .
# docker run -p 80:80 nginx-angular