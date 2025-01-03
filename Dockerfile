FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @vue/cli

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
