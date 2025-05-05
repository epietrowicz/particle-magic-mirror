FROM node:22.14-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
        libgtk-3-0 libnss3 libxss1 libxtst6 \
        libgbm1 libxkbcommon0 libasound2 \
        libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 \
    && rm -rf /var/lib/apt/lists/*

ENV ELECTRON_DISABLE_SANDBOX=true
ENV DISPLAY=:0

WORKDIR /app

# Copy dependencies and directories needed for install scripts
COPY package*.json ./
COPY vendor ./vendor
COPY fonts ./fonts

# Install production dependencies (this will also run postinstall)
RUN npm run install-mm

# Copy the rest of the application, including config and css last for caching
COPY . .
COPY config ./config
COPY css ./css

EXPOSE 8080

CMD ["npm", "run", "start"]
