FROM node:6.9.4

RUN useradd --user-group --create-home --shell /bin/false app && npm install -g @angular/cli

ENV HOME=/home/app
WORKDIR $HOME

ENV APP_NAME=client

COPY . $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/$APP_NAME

EXPOSE 4200
EXPOSE 49152
EXPOSE 9876

CMD ["npm", "start"]
