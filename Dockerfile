FROM cypress/base:12.16.3
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cypress:run"]