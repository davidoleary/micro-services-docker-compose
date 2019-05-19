FROM node:12-alpine

WORKDIR /api-gateway/app

COPY node_modules/ ./node_modules
COPY package.json .
COPY deploy.json .
COPY src/ ./src
# COPY .env .
# COPY automate/ ./automate
ENV NODE_PATH ./

EXPOSE 9000

CMD ["npm", "start"]
