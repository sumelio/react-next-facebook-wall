FROM node:12.16.0
WORKDIR /app
EXPOSE 8100

ADD package.json package-lock.json /app/
COPY . /app/
RUN npm install && npm run build
CMD [ "npm", "run", "start"]