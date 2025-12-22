# =========================================================
# Base image – alles gebeurt als non-root, geen chown nodig
# =========================================================
FROM ubuntu:24.04 AS base

ENV NODE_VERSION=24
ENV ROOT_DIR=/usr/portfolio
ENV NEXT_TELEMETRY_DISABLED=1
ENV DEBIAN_FRONTEND=noninteractive

WORKDIR $ROOT_DIR

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    openssl \
    build-essential \
    libpq-dev \
    bash \
 && curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - \
 && apt-get install -y --no-install-recommends nodejs \
 && corepack enable \
 && corepack prepare pnpm@latest --activate \
 && npm install -g npm@latest \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN useradd -m node
RUN chown node:node $ROOT_DIR
USER node

COPY --chown=node:node package.json pnpm-lock.yaml* ./
RUN pnpm i

COPY --chown=node:node . .

# =========================================================
# Shared frontend stage
# =========================================================
FROM base AS frontend
WORKDIR $ROOT_DIR
RUN mkdir -p $ROOT_DIR/.next

# =========================================================
# Development image
# =========================================================
FROM frontend AS frontend-dev
CMD ["npm", "run", "dev"]

# =========================================================
# Production image
# =========================================================
FROM frontend AS frontend-prod
RUN pnpm run build
CMD ["npm", "run", "start"]
