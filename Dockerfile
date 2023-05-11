FROM node:latest
WORKDIR /app
COPY . .
RUN npm install -g yarn
RUN yarn
RUN yarn run build
EXPOSE 3000
CMD ["yarn", "run","start"]
