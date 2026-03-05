FROM node:18-alpine

WORKDIR /app

RUN npm install bee-hiiv-api twitter-api-client

COPY . .

CMD ["node", "index.js"]