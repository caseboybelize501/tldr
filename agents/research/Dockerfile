FROM node:18-alpine

WORKDIR /app

RUN npm install playwright

COPY . .

CMD ["node", "index.js"]