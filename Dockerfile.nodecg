# Install NodeCG
FROM node:lts-alpine AS nodecg
WORKDIR /app
RUN apk --no-cache add git &&\
    git clone https://github.com/nodecg/nodecg.git &&\
    cd nodecg &&\
    npm install --production

# Build apps
FROM node:lts-alpine AS build_app
WORKDIR /build
COPY . ./
RUN apk add --no-cache python3 alpine-sdk &&\
    npm install &&\
    npm run build &&\
    npm run build:extension

# Build for NodeCG bundle
FROM node:lts-alpine AS nodecg_modules
WORKDIR /build
COPY package-nodecg.json ./package.json
RUN apk add --no-cache python3 alpine-sdk &&\
    npm install

# Set up 
FROM node:lts-alpine
ARG LAYOUTS_NAME
WORKDIR /app
COPY --from=nodecg /app/nodecg ./nodecg
COPY --from=build_app /build/dist ./nodecg/bundles/${LAYOUTS_NAME}/
COPY --from=nodecg_modules /build/node_modules ./nodecg/bundles/${LAYOUTS_NAME}/node_modules
COPY package-nodecg.json ./nodecg/bundles/${LAYOUTS_NAME}/package.json
WORKDIR /app/nodecg
CMD ["node", "index.js"]
