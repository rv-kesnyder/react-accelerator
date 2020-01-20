// To make sure it's being stored in state correctly, go ahead and add to your render method:
render() {
  console.log(this.props.todos);
  return <div>Hi there!</div>;
}
// Flip over to your browser console and you should also see the todos listed there as well!
// Now that we've verified everything is working, go ahead and delete your componenDidMount function as well as your console.log
// Our objective here is to show a button that will fetch our requests, so let's add to the render method a div with a button and event handler inside.
render() {
  return (
    <div>
      <button onClick={this.onButtonClick}>Fetch</button>>
    </div>
  );
}
// As you may know, because this is an event handler, we do need to set this up as a bound function inside our App component:
class _App extends React.Component<AppProps> {
  onButtonClick = () => { // Typescript will infer this function will output 'void', but go ahead an annotate it yourself anyways, just for clarity
    this.props.fetchTodos();
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
      </div>
    );
  }
}
// Next step in the process is rendering the list we'll recieve from the fetch. We want this method to iterate over
// the list of todos and return a JSX element for each one. To do so, let's make a renderList() function in our App component:
renderList() {

}
// and we know it's going to return an array of JSX elements, so let's annotate it as such. If you remember in the Typescript React course,
// Typescript has a built-in type definition for JSX elements called, surprisingly, 'JSX.Element':
renderList(): JSX.Element[] {

}
// Next up is adding a map function:
renderList(): JSX.Element[] {
  return this.props.todos.map()
}
// We're iterating over a list so we'll add an arrow function in our map function:
renderList(): JSX.Element[] {
  return this.props.todos.map((todo) => {})
}
// For good measure let's make sure we're adding a key to our divs:
renderList(): JSX.Element[] {
  return this.props.todos.map((todo: Todo) => {
    return <div key={todo.id}>{todo.title}</div>
  })
}

// Now to make sure our renderList actually fires, let's add it to our render method as well
render() {
  return (
    <div>
      <button onClick={this.onButtonClick}>Fetch</button>
      {this.renderList()}
    </div>
  );
}
// If everything is correct, you should see a Fetch button in your browser, and when pressed. a list will populate!

// In the next section we'll make a new action for Deleting Todos