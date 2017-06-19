FROM mhart/alpine-node:6

WORKDIR /var/www

COPY package.json .
COPY package-lock.json .

# Pre-package node modules
RUN npm install

CMD [ "npm", "start" ]
