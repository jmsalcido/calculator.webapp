# Calculator Web App
Implement a Web platform to provide a simple calculator functionality.

## Live Url:
https://jmsalcido-calculator-webapp.herokuapp.com/

Ask for default user credentials.

### TODO Items:
In priority these are the items that should be handled:

- Sign Up view.
- Create Resource UI, there is only edit/view right now
- Pagination is not fully implemented (viewing).
- Services list (New Service) should return from backend
- UX: Loading screens can be better.
- UI: Use correct Material UI styles, justiy/align the components.
- Better error handling.
- Create generic/common Dialog (Edit/View) logic.

## Run the App:
`npm install && npm start`

or with Docker and Docker Compose:

### Docker
```
docker build -t calculator.webapp:latest .
docker run --name calculator.webapp -d -p 3000:3000 calculator.webapp:latest
```

### Docker Compose:
`docker-compose up`

This will start the app over the port `3000`, backend URL can be changed over the Dockerfile, using the `calculator.api` project the default port is `8080`.

Backend repository is over:
https://github.com/jmsalcido/calculator.api

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
