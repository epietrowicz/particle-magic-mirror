FROM node:22.14-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
        libgtk-3-0 libnss3 libxss1 libxtst6 \
        libgbm1 libxkbcommon0 libasound2 \
        libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 \
    && rm -rf /var/lib/apt/lists/*

ENV ELECTRON_DISABLE_SANDBOX=true

WORKDIR /app

COPY . .

RUN npm run install-mm

EXPOSE 8080

CMD ["npm", "run", "start"]
