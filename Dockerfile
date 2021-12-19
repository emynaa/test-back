FROM node
WORKDIR /home/node/app
COPY . ./
RUN npm install

ENV PORT=27017
ENV MONGO_URL= mongodb
ENV MONGO_USER=mongoadmin
ENV MONGO_PASS=


EXPOSE $8085
CMD ["node", "index.js"]
