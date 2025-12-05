# backend/Dockerfile

FROM node:22-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 8000
CMD ["node", "index.js"]
