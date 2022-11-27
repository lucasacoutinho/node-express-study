FROM node:lts

WORKDIR /var/www/app

COPY package.json .

RUN npm install --omit=dev

COPY . .

ENTRYPOINT ["make", "start"]
