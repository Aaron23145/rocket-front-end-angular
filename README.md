# Rocket Front-End Angular

SPA built with Angular 7 that consumes the [Rocket Rest API](https://github.com/Aaron23145/RocketRestApi).

## Features

- Allows you to manage the countdown of the Rocket Rest API in a Single Page Application.
- Configuration file to specify the rest api url.
- Unit Tests.

## Running App

To run the app you'll need NPM (or yarn) installed. Before starting the app, make sure that you have the Rocket Rest API running and you've set its url in the application configuration file (it can be found in src/config.ts). By default, it's set to http://localhost:8080 and you may not need to edit it.

Then, run this command:

```sh
npx ng serve --open
```

And the browser will be opened with the app running when it has finished the compilation.

## Running Tests

To run the tests you'll need NPM (or yarn) installed. Then, just run the following command:

```sh
npx ng test
```

The tests result will be displayed in the console and also a browser window will be opened showing it.
