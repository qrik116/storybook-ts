FROM node:10

WORKDIR /storybook-react-ts

COPY . /storybook-react-ts

RUN npm install && npm run story-build

EXPOSE 9009

CMD npm run app
