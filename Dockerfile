FROM node:18

RUN yarn global add @nestjs/cli

COPY package.json .

RUN yarn

COPY . /code

WORKDIR /code

CMD yarn start:dev