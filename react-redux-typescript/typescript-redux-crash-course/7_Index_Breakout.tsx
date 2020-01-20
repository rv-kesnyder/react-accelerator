// This is a good spot to stop and talk about our actions/index.ts file. In a normal redux app, this file would be a lot smaller,
// but because we are working with typescript, as you can see this could grow quite large over time. The standard working practice
// for this is to break each action creator out based on which resource it's associated with. Since our action creators are all
// working with our todos resource, lets make another file called todos.ts in our actions directory. Go ahead and cut everything
// from the index.ts file and paste it in your todos.ts file. Now in our index.ts file we can save some space and type out:
export * from './todos';
export * from './types';
// To see one of the major benefits of this, flip over to your todos.ts file in the reducers directory. at the top you should have
// two lines of import statements. Since everything is now referenced in the index.ts file of our actions directory, we can call
// everything directly from the actions directory. So go ahead and change your imports from this:
import { Todo, FetchTodosAction } from "../actions";
import { ActionTypes } from "../actions/types";
// To this:
import { Todo, FetchTodosAction, ActionTypes } from "../actions";
// This little change is majorly beneficial when you start adding lots of action creators and interfaces

// Next up on our list is to go back to our reducer and make sure it watches for that action.
// Navigate to your todos.ts file under the reducers directory and import the appropriate action at the top.
import { Todo, FetchTodosAction, DeleteTodoAction, ActionTypes } from "../actions";
// Because we've annotated our action (in our reducer) to be 'FetchTodosAction', we need to also add our 'DeleteTodoAction'
// As you learned in the Typescript with React course, you can do this by using a union:
export const todosReducer = (
  state: Todo[] = [],
  action: FetchTodosAction | DeleteTodoAction
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};

// Now this would work for having only a few actions, but as you can guess, the more actions you add, the more bloated
// that line of code becomes. Best practice to handle this is to create a type in our types.ts folder in our actions directory
// At the top, import the actions we're adding:
import { DeleteTodoAction, FetchTodosAction } from './todos';
// And at the very bottom create your type with your actions included:
export type Action = FetchTodosAction | DeleteTodoAction;
// Now we can use this Action alias in all of our reducers. Flip over to todos.ts in the reducers directory,
// delete your two Actions from the import statement and replace them with 'Action':
import { Todo, Action, ActionTypes } from "../actions";
// In addition, go ahead and replace your two actions with your Action alias:
export const todosReducer = (state: Todo[] = [], action: Action) => {
// This will save you a lot of time in the future when adding brand new actions!

// In the next section we'll wrap up our app creation!