// Now that we've added our action types and annotated them, lets add a new case for our deleteTodo.
// The logic will be to filter our state for all todo id's that are NOT equal to our action.payload id
export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
      case ActionTypes.fetchTodos:
        return action.payload;
      case ActionTypes.deleteTodo:
        return state.filter((todo: Todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };
  
  // Okay, lets add the onTodoClick functionality for the deleteToDo action
  // 1. Open up your App.tsx file in the components directory
  // 2. Add the deleteTodo action creator to your import
  import { Todo, fetchTodos, deleteTodo } from "../actions";
  // 3. Add the deleteTodo property to your interface AppProps:
  interface AppProps {
    todos: Todo[];
    fetchTodos: typeof fetchTodos;
    deleteTodo: typeof deleteTodo;
  }
  // Now if you'll notice here, we've done something a little different as well. We've deleted type any() and replaced it with
  // 'typeof' fetchTodos;  typeof in Typescript works a little differently than it does in Javascript. In TS, using typeof is similar
  // to a class, in that the object of the typeof will recieve the structure of what it's calling. Take this example:
  let rectangle1 = { width: 100, height: 200 };
  let rectangle2: typeof rectangle1;
  // Rectangle2 will have a type definition of { width: number, height: number }
  // So by saying fetchTodos: typeof fetchTodos;, we're saying that fetchTodos is going to have the structure of fetchTodos. Kind of
  // circular reasoning, but better than having type 'any()'. This is called Type Queries.
  
  // 4. Create the onTodoClick method directly after the 'onButtonClick' method in your _App component:
  class _App extends React.Component<AppProps> {
    onButtonClick = () => {
      this.props.fetchTodos();
    };
    onTodoClick = (id: number): void => {
      this.props.deleteTodo(id);
    };
    // 5. We now have to include the onClick handler in our renderList() method, so lets change that to this:
    renderList(): JSX.Element[] {
      return this.props.todos.map((todo: Todo) => {
        return (
          <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </div>
        );
      });
    }
    // 6. Lastly, lets add the deleteTodo action creator to the connect function's mapDispatchToProps argument:
    export const App = connect(
      mapStateToProps,
      { fetchTodos, deleteTodo }
    )(_App);
  
    // Great! Now you should see an error underneath _App in your connect function. This is because of a tricky Type definition file conflict.
    // If you mouse over _App, at the very bottom of the error, you'll see this: Type 'Promise<void>' provides no match for the signature '(dispatch: Dispatch<AnyAction>): Promise<void>'
    // In short, because we're using redux thunk to return a promise in our fetchTodos action, Typescript really doesn't understand what
    // fetchTodos is supposed to return. Normally, it would return an action object, but because we're using thunk, it returns a function that's
    // going to eventually dispatch an action. So typescript throws an error.
    // The easiest way to fix this is to change the annotation in our AppProps interface to just 'Function':
    interface AppProps {
      todos: Todo[];
      fetchTodos: Function;
      deleteTodo: typeof deleteTodo;
    }
    // You should now see the error disappear. 
    // Excellent, our app is working!