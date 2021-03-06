FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "bin/www" ]