// The next thing on our list was to create an enum for all of our dispatch types.
// Flip over to your types.ts file in your actions directory and go ahead and create an enum:
export enum ActionTypes {
  fetchTodos
}
// By default typescript will assign incremented numbers to our enum values, and also in Redux, our dispatch types do not
// have to be a string. This makes our lives easier and we can just leave our 'fetchTodos' in the enum as is.
// Now in our index.ts file in the actions folder let's import our enum:
import { ActionTypes } from "./types";

// And annotate our dispatch type to reflect our enum interface we just created:
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
 
    dispatch({
      type: ActionTypes.fetchTodos, // Pretty straight-forward
      payload: response.data
    });
  };
}; 

// This next part we'll be using a lot later on, but for now, we want our code to be as fool-proof as possible.
// In that case let's create a type definition for our dispatch, to make sure we're always passing the correct
// action type and action payload to our dispatch. We've defined the type and the payload, let's make sure the
// Dispatch is always getting the correct ones. In your index.ts in your actions folder, place the following:

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos; // Our action is always going to be to fetchTodos (to make sure we're not passing the wrong action)
  payload: Todo[] // Our response for fetching todos should always be an array of Todos
}

// A big reason for creating this interface is that often times action creators will become bloated with many requests,
// among other things. This way despite all the code in your action creator, you are requiring the correct Action to be passed in
// Now that we've created our interface definition, lets pass this to our dispatch
// You can probably guess how we do this, but to make sure, command click on the word 'dispatch', above your type and payload.
// You should see:
(parameter) dispatch: Dispatch
<{
    type: ActionTypes;
    payload: Todo[];
}>(action: {
    type: ActionTypes;
    payload: Todo[];
}) => {
    type: ActionTypes;
    payload: Todo[];
}
// You might recognize from before that we often times pass type definitions as some sort of < >,
// and if you'll notice, our type and payload are wrapped in < >. This is perfect, lets add our type definition here:
dispatch<FetchTodosAction>({
  type: ActionTypes.fetchTodos,
  payload: response.data
});

// Alright, next step in the process is to create a reducer!
// Inside of your reducer directory, create a file alled todos.ts and add the following:
export const todosReducer = () => {}
// Remember, the first argument is going to be our default state object. We want this reducer to return an array of todo objects.
// In order to express an array of Todo objects, we need to first import the Todo interface we just created in our actions
// So go ahead and type the following :
import { Todo, FetchTodosAction } from "../actions";
// Notice we're importing both our interfaces: Todos and FetchTodosAction
// To annotate our state object, we simply add:
export const todosReducer = (state: Todo[]) => {}
// If nothing is returned, the state should default to an empty array, let's add:
export const todosReducer = (state: Todo[] = []) => {}
// Then our action will be what we've defined as 'FetchTodosAction'. Add that as well:
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {}
// Now we must add what our actual reducer will do, with different actions. Let's use a switch-case format.
// We do also need to import Actiontypes like so:
import { ActionTypes } from "./types";
// Then add a switch case for different action types:
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
  //case ActionTypes.deleteTodos:
  //  return ...etc etc
    default:
      return state;
  }
};
// Fantastic! We've finished our reducer, in the next section, we'll hook it up to our combine reducers call