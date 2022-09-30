FROM node:14

WORKDIR /app

COPY *.json ./

RUN yarn --network-timeout 100000

COPY . /app

WORKDIR /app/dev

RUN yarn --network-timeout 100000

CMD ["yarn", "dev"]
