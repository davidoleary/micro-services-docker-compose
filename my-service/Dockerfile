FROM node:12-alpine

WORKDIR /my-service/app

COPY node_modules/ ./node_modules
COPY package.json .
COPY src/ ./src
# COPY .env .
# COPY automate/ ./automate
ENV NODE_PATH ./

EXPOSE 9000

CMD ["npm", "start"]
