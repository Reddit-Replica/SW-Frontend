FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install npm-run-all --save-dev
COPY . .
CMD ["npm", "run", "all"]