FROM node:10

ARG UID
RUN adduser frontend --uid $UID --disabled-password --gecos ""

ENV APP /anidesu_frontend
WORKDIR $APP

COPY package.json package-lock.json nuxt.config.js jest.config.js $APP/
RUN npm install

COPY . $APP/

EXPOSE 8000
CMD ["npm", "run", "dev"]
