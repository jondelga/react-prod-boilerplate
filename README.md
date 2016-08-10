# prod-react-boilerplate
(Production Ready) React boilerplate based on the [react-boilerplate project](http://mikechabot.github.io/react-boilerplate/)

## Features

#### Build Process
 * Built with [webpack](https://webpack.github.io/)
 * Supports ES6 via [Babel](https://babeljs.io/) transpiling

#### State Management
* [redux](http://redux.js.org/index.html) for state management
* [react-redux](https://github.com/reactjs/react-redux) for stateful component bindings
* [redux-thunk](https://github.com/gaearon/redux-thunk) for asynchronous actions
* [redux-logger](https://github.com/theaqua/redux-logger) for capturing actions

#### Routing
* [react-router](https://github.com/reactjs/react-router) for client-side routing

#### HTTP
* Implementing [data services](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/data/data-access-service.js#L29) utilize [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### Styling
* Supports [SCSS & SASS](http://sass-lang.com/) syntax
* Browser compatibility via [autoprefixing](https://github.com/postcss/autoprefixer)

#### Develop & Deploy
* Environmental configurations for both webpack and redux
  * **Dev** // [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/) for live refresh. `redux-logger` enabled.
  * **Prod** // [Express](http://expressjs.com/) server with `redux-logger` disabled.

#### Testing
* Tested with [Mocha](https://mochajs.org/)
* Coverage support via [Istanbul](https://gotwarlost.github.io/istanbul/)
* [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html) for component testing
* [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) for Redux state testing
* [Sinon.JS](http://sinonjs.org/) for mocking, stubbing & spying

## Get Started
1. git clone https://github.com/kriuz/prod-react-boilerplate.git
2. `npm install`
3. Launch environment:
  *  **Production**: `npm start`
  *  **Development**: `npm run dev`

#### Test Commands
* `npm test`: Shortcut for `test:coverage`
* `npm run test:unit`: Run unit tests located in `test/unit/**/*.js`
* `npm run test:integration`: Run integration tests location in `test/integration/**/*.js`
* `npm run test:coverage`: Run coverage for unit and integration tests

#### lint
* `npm run lint`: Will lint everything under the **src** folder
