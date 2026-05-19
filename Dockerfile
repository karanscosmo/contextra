# Production-ready Dockerfile for Contextra OS
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Run build script
# Generates front-end SPA under dist/ and builds backend server into dist/server.cjs
RUN npm run build

# Runner stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/firebase-applet-config.json ./firebase-applet-config.json

# Only install production dependencies (excluding devDeps to minimize image size)
RUN npm ci --only=production

EXPOSE 3000

CMD ["node", "dist/server.cjs"]
