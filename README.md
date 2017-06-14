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
A volume is linked to the `client/` directory for local development.

See the [client readme](client/README.md) for running angular cli commands.

#### Adding npm modules

In order to properly add modules into the interactive environment, you need to run npm through the container like the following:

```
docker exec -it client npm install --save newModule
```

#### Adding type definitions

With TypeScript 2, there's no need to use a Type manager such as typings.  Instead find your type definition on https://microsoft.github.io/TypeSearch/ and install it:

```
docker exec -it client npm install --save-dev @types/newModule
```

### Express

This runs using `nodemon` to provide livereload. A volume is link to the `server` directory for local development.

Try `http://localhost:3000/api/` to see hello world response.

#### Adding npm modules

In order to properly add modules into the interactive environment, you need to run npm through the container like the following:

```
docker exec -it server npm install --save newModule
```

### Postgres

Postgres is available on port 5432 for local queries. See the `docker-compose.yml` for credentials.
