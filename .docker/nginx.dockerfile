##### Stage 1
FROM node:12.16.1 as node
LABEL author="Dan Wahlin"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --no-optional
COPY . .
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./.docker/config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t nginx-angular -f nginx.dockerfile .
# docker run -p 80:80 nginx-angular