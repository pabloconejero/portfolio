FROM node:20-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# ── Build ──────────────────────────────────────────────────────────────────────
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
# Throwaway DB used only during build — replaced by the mounted volume at runtime
ENV DATABASE_URL=file:/tmp/build.db
ENV PAYLOAD_SECRET=build-placeholder

RUN npm run build

# ── Runtime ───────────────────────────────────────────────────────────────────
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public            ./public
COPY --from=builder /app/.next             ./.next
COPY --from=builder /app/node_modules      ./node_modules
COPY --from=builder /app/package.json      ./package.json

# Persistent directories — both declared as volumes in docker-compose
RUN mkdir -p /app/data /app/media \
 && chown -R nextjs:nodejs /app/data /app/media

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["npm", "start"]
