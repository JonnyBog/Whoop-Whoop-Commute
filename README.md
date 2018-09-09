# whoop-whoop-commute

Whoop Whoop Commute

## Dependencies
- Npm install
- Docker (and docker-compose)
- GNU Make (default installation on Mac works here, will come preinstalled on most distributions of Linux)

## Running the application

In order to run the app locally in a dev environment run `npm run watch-app` and then run `npm run watch-server`

- `npm run watch-app` - runs webpack dev config
- `npm run watch-server` - runs the express server with browser refresh
- `npm run start-prod` - runs an express server using pm2 and prod config
- `npm run stop-prod` - stops the express server
- `npm run restart-prod` - restarts the express server
- `npm run build-prod` - runs a single prod build-prod

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
