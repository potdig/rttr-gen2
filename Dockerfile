FROM node:lts-alpine AS node_modules

WORKDIR /work

COPY package*.json ./

RUN apk add --no-cache python3 alpine-sdk &&\
    npm install

FROM node:lts-alpine

WORKDIR /work

COPY --from=node_modules /work/node_modules ./node_modules
COPY package*.json svelte.config.js ./

CMD [ "npm", "run", "dev" ]
