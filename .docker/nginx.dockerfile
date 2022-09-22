##### Stage 1
FROM node:16.17.0 as node
LABEL author="Dan Wahlin"

ARG NG_APP_API_URL
ENV NG_APP_API_URL=$NG_APP_API_URL

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --no-optional 
COPY . .
RUN npm run build

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./.docker/config/nginx.conf /etc/nginx/conf.d/default.conf

# Run from project root
# docker build -t nginx-angular -f .docker/nginx.dockerfile .
# docker run -p 80:80 nginx-angular