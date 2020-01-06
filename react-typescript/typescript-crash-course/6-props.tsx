// Let's start using typescript with React/Redux
// In your terminal, type:
// npx create-react-app rrts --template typescript
// We'll call the project rrts for React/Redux TypeScript, then enable Typescript with the '--template typescript' flag
// In your src folder in your project directory, you'll see files with the extension '.tsx'
// A .tsx file is a file with .jsx inside it.
// What's nice is if you hover over anything inside the index.tsx file, you'll see typescript it already inferring types and annotations by default

// Navigate to the folder you just created and open the index.tsx file.
// Delete all the code in that file and paste in the below:
import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  render() {
    return <div>{this.props.color}</div>;
  }
}

ReactDom.render(<App color="red" />, document.querySelector("#root"));

// If you'll notice, once you paste the code in, 'this.props.color' and 'App color="red" both throw an error.
// One of the most basic ways we work with components in Typescript is to create an interface that describes
// the different props that we're going to pass into a component

interface AppProps {
  color: string;
}
// Our interface is going to define our prop as a string. To figure out how to do this, in your index.tsx file,
// hover over 'Component', from the code snippet below. (Make sure you're looking at your index.tsx file)
class App extends React.Component {
  render() {
    return <div>{this.props.color}</div>;
  }
}
// What you should see is "class React.Component<P = {}, S = {}, SS = any>"
// 'P = {}' is where we would pass our props definition for the class
// (and 'S={}' is where we would pass our state definition if needed)
// So to fix our errors, simply add <AppProps> after 'React.Component'
// Your final code in idex.jsx should look like the following (and also have no errors):
class App extends React.Component<AddProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

// This pattern will be repeated for just about every single classed based react component you ever create.
// You'll define the component, define the interface right above it describes the structure of the props
// that you're going to pass into the component, then you're going to reference the interface right next to React.Component
// To make a prop in your interface optional, simply add a ? right after the prop name, like so:
interface AppProps {
  color?: string;
}
