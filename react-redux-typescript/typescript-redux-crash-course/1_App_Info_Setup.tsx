// ----- Project Scope -----
// In order to take a dive into Typescript with Redux, let's create a simple app to fetch a bunch of todos
// from an API and display them on-screen. We'll add a delete functionality and make sure to implement lots
// of type definitions and interfaces!

// ----- Project Setup -----
// Firstly, go ahead and navigate to a directory you'd like to create the project in and type:
npx create-react-app yourfancyappname --template typescript
// then we need to install some dependencies:
npm install redux react-redux axios redux-thunk
// redux-thunk is going to allow us to handle some async API requests from inside an action-creator
// Now that we have our app set up, go ahead and delete everything that comes in the src folder by default.
// Create a new index.tsx file and let's add some of our dependencies:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Now we need to add our store and pass in thunk as middleware:
const store = createStore(reducers, applyMiddleware(thunk));
// Finally let's add our render method:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
// if everything worked correctly you should see a few errors! Now the first should be around your import for
// 'react-redux' (which may be fixed in the future) but this is because react-redux's typescript definition
// file doesn't download automatically. As you may recall, some packages will create custom definition files
// for how typescript should define certain things in the package. So let's make sure we have those installed.
npm install @types/react-redux
// You should at this point see the error dissapear, but this may be included by default in the 'react-redux'
// package in the future

// Next up, our App has an error because we don't have an App component yet. Let's fix that.
// Make a 'components' directory and within it, an app.tsx file.
// Within that file, go ahead and create a standard App component:
import React from "react";

class App extends React.Component {
  render() {
    return <div>Hi there!</div>;
  }
}

// Great! Save your file, flip back over to your index.tsx file and import your App component:
import { App } from "./components/App";

// Next up, let's add our dummy reducer!
// Make a reducers directory and within it, an index.ts file
// We do also need to imnport our combineReducers function from redux
import { combineReducers } from "redux";

export const reducers = combineReducers({
  counter: () => 1
});

// Perfect, we're all done here so lets flip back to index.tsx and import our reducers:
import { reducers } from "./reducers";

// Let's give it a test now. Go ahead and type
npm start
// and double check if you're seeing "Hi there!" in your browser at localhost:3000
// In the next section we'll add an action creator to make API requests with redux thunk