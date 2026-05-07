FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY styles.min.css /usr/share/nginx/html/styles.min.css
COPY main.js /usr/share/nginx/html/main.js

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
