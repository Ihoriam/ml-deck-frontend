# stage one: build
FROM node:16-alpine as builder

WORKDIR /tmp

COPY package*.json /tmp

RUN npm install

COPY . .

RUN npm run build

#stage two: run
FROM node:16-slim

WORKDIR /app

COPY --from=builder /tmp /app

EXPOSE 3000

CMD [ "npm", "run", "dev"]