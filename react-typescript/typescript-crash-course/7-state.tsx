// Next up we're going to keep tweaking our index.jsx file to add a bit more functionality

import React from "react";
import ReactDom from "react-dom";
// We have a React.Component below so we're going to keep the interface
interface AppProps {
  color: string;
}
// You can still see the <AddProps> below where we call our interface
class App extends React.Component<AddProps> {
  // For this example we're going to make two buttons that increment and decrement a counter in the state.
  // Let's add a state with a counter of 0
  state = { counter: 0 };
  // Now we'll define our Increment functions below (Remember how to annotate functions that don't return a value? :void)
  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };
  // In our render function we need to add the two buttons calling our functions from earlier
  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDom.render(<App color="red" />, document.querySelector("#root"));

// A little side note: as you may know, there are two ways to initialize state in our React.Component. One is to write:
state = { number: 0 };
// The above is obviously the easiest and as you should remember, typescript will infer a type when you define a variable or object.
// So setting state in this manner will not give you any errors, as you've basically already defined the type of your state object.
// Some of you may choose to set your state by using the constructor method below. If you choose to define state in this way please follow along in your own app.
class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }
}
// You should see a few errors in your code pop up. But why is that? Functionally in Javascript, the two snippets of code work exactly the same.
// If you type 'this.state' below your 'this.state = { counter: 0 }', you should see this.state defined as "Readonly<{}>". Didn't we just define state as { counter: 0 } ?
// The answer comes down to the React.Component's default state object.
// When setting the state in this manner, we are no longer _redefining_ the state object. By default, the state is a read only object. Thus, if we try writing:
this.state = { counter: 0 }; // We are trying to _reassign_ the object (which is read-only), instead of _redefining_ what state is (as shown in the first method)
// In order to make this work, we need to pass in our state definition so react & typescript know what we're looking for.
// We do this in a similar manner to the props and if you remember from '6tsx.tsx' when you hover over React.Component, you'll see:
"class React.Component<P = {}, S = {}, SS = any>";
// We passed in the props interface already for P = {} and as you may have guessed, S = {} is where we pass the definition for our state.
// This will be defined in the exact same way as our props interface.

// Right below your <AppProps> interface, Let's make one for AppState:
interface AppState {
  counter: number;
}
// We can now pass this in the same way as our props:
class App extends React.Component<AppProps, AppState>
// Now if you add another 'this.state' as we did before and hover over it, you should now see your state object defined properly.

// One last note: If you are not passing any props to your main App Component, you can simply leave your props definition as an empty object:
class App extends React.Component<{}, AppState>