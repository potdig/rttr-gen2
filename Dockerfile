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
RUN apk --no-cache add vim
WORKDIR /app
COPY --from=nodecg /app/nodecg ./nodecg
WORKDIR /app/nodecg
EXPOSE 9090
CMD ["node", "index.js"]
