# Whoop Whoop Commute

## Running the application

In order to run the app locally in a dev environment run:

- `npm install` - install dependencies
- `npm run watch-app` - runs webpack dev config
- `npm run watch-server` - runs the express server with browser refresh

## Testing
All shared files, actions, reducers, services and epics should be unit tested. This project uses [jest](https://facebook.github.io/jest/) for that purpose.

- `npm run eslint` - run the linter once for a full report of linter errors

- `npm run test` - run the unit tests on watch mode
- `npm run coverage` - run the unit tests on watch mode with coverage (slower)

## Front End Style Guidelines
#### CSS
* [Airbnb](https://github.com/airbnb/css)
#### JS
* [ESLint](https://eslint.org/docs/rules/)
* [Jest](https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest)
* [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
