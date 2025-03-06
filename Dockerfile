# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the Next.js application with the webhook URL
# This can be overridden during the build process
ARG WEBHOOK_URL=https://hook.eu1.make.com/your-webhook-path
RUN NEWSLETTER_API_KEY=${NEWSLETTER_API_KEY} npm run build

# Production stage with Nginx
FROM nginx:alpine

# Install some useful tools
RUN apk add --no-cache vim curl

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built app from the builder stage
# For Next.js static export
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 3000 as in your skit project
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
