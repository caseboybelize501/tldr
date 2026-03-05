FROM node:18-alpine

WORKDIR /app

RUN npm install langchain openai mdx

COPY . .

CMD ["node", "index.js"]