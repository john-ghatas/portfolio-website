FROM ubuntu:24.04 AS base

ENV NODE_VERSION 24
ENV ROOT_DIR /usr/portfolio
ENV NEXT_TELEMETRY_DISABLED 1

RUN mkdir $ROOT_DIR
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

WORKDIR $ROOT_DIR

# Install dependencies
RUN apt-get update && apt-get upgrade -y
RUN apt-get install curl openssl -y
RUN curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash -
RUN apt-get install nodejs build-essential libpq-dev -y

# Run NPM tasks
RUN npm i -g npm@latest
RUN npm i -g nodemon@latest pnpm@latest

# Create rootless user and give permissions on the folders required
COPY . $ROOT_DIR
RUN useradd -m node
RUN chown node:node -R $ROOT_DIR
USER node

WORKDIR $ROOT_DIR
FROM base AS frontend
RUN pnpm i --silent

FROM frontend AS frontend-dev
CMD ["npm", "run", "dev"]

FROM frontend AS frontend-prod
RUN pnpm run build
CMD ["npm", "run", "start"]
