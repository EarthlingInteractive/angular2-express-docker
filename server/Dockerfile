FROM node:6.9.4

RUN useradd --user-group --create-home --shell /bin/false app && npm install --global nodemon pm2

ENV HOME=/home/app
WORKDIR $HOME

ENV APP_NAME=server

COPY . $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*

USER app

EXPOSE 3000

WORKDIR $HOME/$APP_NAME

CMD ["npm", "start"]
