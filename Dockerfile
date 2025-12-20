FROM ubuntu:24.04 AS base

ENV NODE_VERSION=24
ENV ROOT_DIR=/usr/portfolio
ENV NEXT_TELEMETRY_DISABLED=1
ENV DEBIAN_FRONTEND=noninteractive

WORKDIR $ROOT_DIR

# System + node deps (samengevoegd, gecleaned)
RUN apt-get update \
 && apt-get upgrade -y \
 && apt-get install -y --no-install-recommends \
    curl \
    openssl \
    build-essential \
    libpq-dev \
    ca-certificates \
    bash \
 && curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - \
 && apt-get install -y --no-install-recommends nodejs \
 && npm install -g npm@latest pnpm@latest nodemon@latest \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN useradd -m node

# ---- staggered copy (cache win) ----
COPY package.json pnpm-lock.yaml* ./

# Install deps as root (faster, same result)
RUN pnpm install --silent

# Copy rest of the source
COPY . .

# Fix ownership once
RUN chown -R node:node $ROOT_DIR
USER node

# ---------- frontend ----------
FROM base AS frontend
WORKDIR $ROOT_DIR

# reuse installed deps + source
COPY --from=base --chown=node:node $ROOT_DIR $ROOT_DIR

# ---------- dev ----------
FROM frontend AS frontend-dev
COPY --chown=node:node . $ROOT_DIR
CMD ["npm", "run", "dev"]

# ---------- prod ----------
FROM frontend AS frontend-prod
COPY --chown=node:node . $ROOT_DIR
RUN pnpm run build
CMD ["npm", "run", "start"]
