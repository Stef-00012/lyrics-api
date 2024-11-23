FROM oven/bun:latest

WORKDIR /api

COPY package.json /api/
RUN bun install

COPY . .

ENTRYPOINT ["bun", "run", "start"]