FROM node:4.6
WORKDIR /apps
ADD . /apps
RUN npm install
EXPOSE 3000
CMD npm start
