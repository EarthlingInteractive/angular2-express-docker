# angular2-express-docker-postgres

Angular 2, Express, Postgres and Docker Compose project starter

## Getting Started

```
$ git clone https://github.com/EarthlingInteractive/angular2-express-docker.git my-project
```

## Development

```
$ docker-compose up
```

Note on Windows should use Windows Powershell to run Docker commands.

The following services will be available:

* Angular 2 webapp - http://localhost:4200
* Express webapp - http://localhost:3000
* postgres - localhost:5432

### Angular 2

This is built with `@angular/cli` v1.1.1. It runs `ng serve` command to start in development mode with livereload. 
A volume is linked to the `client/src` directory for local development.

### Express

This runs using `nodemon` to provide livereload. A volume is link to the `express/routes` directory for local development.

### Postgres

Redis is available on port 5432 for local queries.
