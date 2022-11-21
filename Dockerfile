FROM node:lts-alpine as builder

#create directory for application
WORKDIR /vue-ui

# Copy the package.json  
COPY package*.json ./

# install dependencies
RUN npm uninstall node-sass
RUN npm i -D sass
RUN npm install

# Copy rest of the files
COPY . .

# Build the project
RUN npm run build


FROM nginx:1.17.10-alpine

RUN apk add nano && apk add curl


RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

COPY --from=builder /vue-ui/dist /usr/share/nginx/html