FROM nginx:alpine
VOLUME /var/cache/nginx
COPY ./dist /usr/share/nginx/html
COPY ./.docker/config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t nginx-angular -f nginx.dockerfile .
# docker run -p 80:80 nginx-angular