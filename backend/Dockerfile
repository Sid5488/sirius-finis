FROM node:20.11.1-alpine3.19 AS base

WORKDIR /usr/src/app

# Install dependencies
FROM base AS dependencies

COPY package.json package-lock.json ./
COPY .env ./

RUN npm Install

# Building app
FROM base AS build

WORKDIR /usr/src/app

COPY . .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

RUN npm run build
RUN npm prune --production

# Running app
FROM node:20-alpine3.19 AS deploy

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/prisma ./prisma

RUN npx prisma db pull

EXPOSE 3333

CMD ["npm", "run", "start"]
