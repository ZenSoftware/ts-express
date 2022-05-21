FROM node:16-alpine

WORKDIR /app

COPY dist/ .
COPY package*.json ./
COPY .env .

RUN npm ci --production

ENV PORT=3000
EXPOSE ${PORT}

CMD ["node", "main.js"]