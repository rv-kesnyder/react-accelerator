// Fantastic, now that we have our basic functionality, lets go through the usual process of wiring up an action and
// action creator, modifying our reducer and an attaching our action creator back to our app component.
// First step will be adding our new action to our types.ts file in the action directory. In our 'ActionTypes' enum,
// go ahead and add 'deleteTodo':
export enum ActionTypes {
  fetchTodos,
  deleteTodo
}
// Our next step is to flip to our index.ts file in the same directory. Here we will add another interface for our DeleteTodoAction
export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number; // for our payload, let's just use the ID of the Todo we want to delete, not the whole Todo itself.
}

// After creating our interface, we need to make a new action creator at the bottom of our index.ts file:
export const deleteTodo = () => {};
// Our action creater will receive an ID of the Todo we'd like to delete, so go ahead and annotate it as such:
export const deleteTodo = (id: number) => {};
// We're also going to return an object that should conform to the DeleteTodoAction interface, so let's add that as well
export const deleteTodo = (id: number): DeleteTodoAction => {};
// We can then return our DeleteTodoAction:
export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};

// Next, we'll talk about reducing the bloated code in our actions/index.ts file
