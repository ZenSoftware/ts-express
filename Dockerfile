FROM node:12-alpine

WORKDIR /usr/src/api

COPY dist/ .

# Uncomment if Node app does not bundle external dependencies
# -----------------------------------------------------------
# COPY package*.json ./
# RUN npm ci --production

ENV PORT=3000
EXPOSE ${PORT}

CMD [ "node", "main.js" ]