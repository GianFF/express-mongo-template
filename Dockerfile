FROM node:18-alpine

WORKDIR /example

COPY . .

COPY .env-example .env

RUN npm ci --production

CMD [ "npm", "run", "start" ]