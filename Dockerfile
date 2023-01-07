FROM node:18-alpine

WORKDIR /usr/src/api

COPY dist ./

COPY package*.json ./
RUN npm ci --production

ENV PORT=3000
EXPOSE ${PORT}

CMD [ "node", "main.js" ]