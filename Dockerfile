# Install NodeCG
FROM node:18-alpine AS nodecg
WORKDIR /app
RUN apk --no-cache add git &&\
    npm install --global nodecg-cli@latest &&\
    mkdir nodecg &&\
    cd nodecg &&\
    nodecg setup

# Set up base of NodeCG
FROM node:18-alpine AS base
RUN apk --no-cache add git
WORKDIR /app
COPY --from=nodecg /app/nodecg ./nodecg
WORKDIR /app/nodecg
EXPOSE 9090
CMD ["node", "index.js"]

# build bundle
FROM node:18-alpine AS build
WORKDIR /app
RUN apk --no-cache add git &&\
    git clone https://github.com/potdig/rttr-gen2.git &&\
    cd rttr-gen2 &&\
    npm install &&\
    npm run build &&\
    npm run build:extension

FROM base AS bundle
WORKDIR /app/nodecg
COPY cfg ./cfg
COPY --from=build /app/rttr-gen2/dist/dashboard ./bundles/rttr-gen2/dashboard
COPY --from=build /app/rttr-gen2/dist/graphics ./bundles/rttr-gen2/graphics
COPY --from=build /app/rttr-gen2/dist/extension ./bundles/rttr-gen2/extension
COPY --from=build /app/rttr-gen2/dist/web-assets ./bundles/rttr-gen2/web-assets
COPY --from=build /app/rttr-gen2/node_modules ./bundles/rttr-gen2/node_modules
COPY --from=build /app/rttr-gen2/package-nodecg.json ./bundles/rttr-gen2/package.json