// Our first step here is to create an action creator to reach out to our API for the list of todos
// The API we'll be using is from: https://jsonplaceholder.typicode.com
// For this we'd like to use their todo API, which returns an array of objects:
[
  {
    userId: 1, // A user ID, which we will not be using
    id: 1, // The ID of the Todo
    title: "delectus aut autem", // The title of the Todo in lorem ipsum
    completed: false // A boolean containing true or false
  }
];

// Firstly, in your src directory, make a new directory called 'actions' and in it, make a file called index.ts
// As you may know, this will contain a 'map' of where actions are located in the directory.
// Let's import axios here and create our action creator:
import axios from "axios";

export const fetchTodos = () => {
  return dispatch => {};
};

// At this point you should see an error message because there's no type annotation for dispatch just yet.
// This is the hardest part in working with Typescript and react/redux; studying the type files that
// are provided to us to see what type definitions come with our package.
// In order to find out, at your imports, type in:
import 'redux' // and command click 'redux' to explore it's type definition file.
// Inside the file, the easiest way to search for the type definition is to search for 'Dispatch'
// around line 120, we should find an interface for 'Dispatch'
// Perfect! all we have to do now is annotate dispatch as such:
export const fetchTodos = () => {
  return (dispatch: Dispatch) => {

  }
}
// As you may notice, there's still an error under dispatch, so alter your "import 'redux'" to say:
import { Dispatch } from 'redux';

// Because we're making a request, let's add async and await as well as our URL:
const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);
  };
};

// Once we get a response back, we can add a dispatch with a response object, so go ahead and add in:

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data
    });
  };
};

// Besides our annotated dispatch, we don't really have any type definitions in our file yet.
// Let's go over a couple places where type definitions would be helpful to add.
// Firstly if you mouse over response.data, it has a type of "any", we have no idea of what kind of structure is returned.
// Next, take a look at our type: 'FETCH_TODOS' . It's generally good practice in TS to avoid strings
// as much as possible, as it's easy to make a typo (which would defeat the purpose of using TS in the first place).
// Maybe we should try creating an ENUM to store all our action types

// Like we mentioned, the frist thing we should do is define the structure of our data we're going to pass in
// If you take a look at our URL, you'll see our JSON has the structure:
{
  userId: 1,
  id: 1,
  title: "random todo string",
  completed: false
}
// Great, now lets build our interface / type definition:
interface Todo {
  userId?: number,
  id: number,
  title: string,
  completed: boolean
}
// Okay perfect, now where do we put this thing? Our response is going to come from our '.get' call. If you Command & click on '.get',
// we can take a peek into it's type definition. Your cursor should be placed now next to the 'get' type definition:
// get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
// The '<T = any>' will be our type definition, so lets go ahead and pass in our interface:

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url); // Don't forget this will be an array of Todos, so include '[]'
 
    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data
    });
  };
};   

// Great, now our response and response.data has an expected type.

// In the next section, we'll go over how to create an enum for our dispatch types and create a reducer
