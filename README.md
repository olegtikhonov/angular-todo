# TodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## MongoDB
Downloading the Latest MongoDB Docker Image
```
docker pull mongo
```
Validate
```
docker images | grep mongo
```
Deploying an Instance of MongoDB as a Container
```
docker run -d -p 27017:27017 --name mongodb mongo:latest 
```

Interact with mongo in the container
```
docker exec -it `docker ps | grep mongo | awk '{print $1}'` bash
```
Use cli ```mongo```
Show databases
```
show dbs;
```

## Create mongodb project
```
npm init
```
Next, install dependencies
```
npm install express body-parser mongoose --save
```

Server will listen to ```4201``` port
Run the server
```
node server.js
```

Test it
```
curl http://localhost:4201/
```

curl -X POST -d '{["id":1,"name":"oleg_test","complete":"false"]}' localhost:4201/todos 

Delete all documents
```
db.todolists.deleteMany({});
```
