FROM node:18-alpine

WORKDIR /example

COPY . .

RUN npm ci --omit=dev

CMD [ "npm", "run", "start" ]