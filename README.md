### Weather-app


Coding challenge app to display weather conditions for 5 days.

It uses the following packages:
  - SSR node.js framework - next.js
  - Geocode auto suggest module - react-places-autocomplete
  - Jest

#### Installation and usage

This app requires [Node.js](https://nodejs.org/) v6.2+ to run.

For development, the node_modules have to be installed. Running the custom command starts a custom server, vs using the supplied next.js server. This is useful, because all requests to Dark Sky are proxied, as they allow no CORS requests. A proxy call to Dark Sky is defined as one of the routes.

```sh
$ npm install
$ npm run custom
```

For production environments...

```sh
$ npm install
$ npm run prod
```
Tests

```sh
$ npm install
$ npm run test
```
