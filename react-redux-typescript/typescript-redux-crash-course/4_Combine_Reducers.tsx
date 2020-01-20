// In your index.ts in the reducers directory, import the todos reducer:
import { todosReducer } from "./todos";
//and lets add a key:value pair of todos: todosReducer to our combineReducers:
export const reducers = combineReducers({
  todos: todosReducer
});
// One last little thing we're going to do for validation, is to create an interface to describe the store state, just
// to make sure everything is passed in correctly.
// Similar to everything we've done before, add an import for Todo:
import { Todo } from '../actions';
 // and make a little interface:
export interface StoreState {
  todos: Todo[] // we want to make sure we're passing in an array of Todo objects
}
// and then we're pass this in as:
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});


// The next step is making the list of reducers available to our App component.
// Go to your App.tsx file in your components directory and import your connect, Todo and the fetchTodos action creator.
// Lastly we'll import the StoreState creator:
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

// Eventually we want to provide some props to our App component. Lets go ahead and create an interface for that:
interface AppProps {
  todos: Todo[]; // we're going to pass in our array of Todos
  fetchTodos(): any; // and our fetchTodos as a function. We'll come back to this later
}

// You've learned previously that to pass a prop interface to our React.Component, it would look like the following:
class App extends React.Component<AppProps> {
  render() {
    return <div> Hi there!</div>;
  }
}

// Now we need to wire up our mapStateToProps function!
const mapStateToProps = (state) => { // as usual we'll be passing in our entire redux store. 
  return { todos: state.todos }; // we want to pull of the state property and return it as an object
}

// As usual, there's a couple of things we can annotate and define. Lets start with our state store.
// Fortunately, we've already created an interface for that!
const mapStateToProps = (state: StoreState) => {
  return { todos: state.todos };
}
// We can further annotate this function by defining the output as well:
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
}
// If you'd like to complicate this even further, we can also do some destructuring:
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
}
// Okay perfect, that's complicated enough! Let's go ahead and export our connected version of our App component.
// To reduce confusion in naming conventions, let's rename our App component as '_App':
class _App extends React.Component<AppProps>
// And we can export our connected app:
export const App = connect(mapStateToProps,{ fetchTodos })(_App) //The first () is for our config, the next is for our connected app
// Now that we've got our connect function working, lets define some lifecycle components to do a bit of testing.
// Inside of our _App component, let's add the following:
class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return <div>Hi there!</div>;
  }
}
// Flip over to your browser, open 'localhost:3000' and open up your browser's developer console.
// To make sure your app is making the request correctly, navigate to the network tab and take a look at your 'XHR' requests
// You should see a request for todos with a list of roughly 99 todos, if this is the case, the request is working!
// In the next section we'll do a bit of testing and implementation.
