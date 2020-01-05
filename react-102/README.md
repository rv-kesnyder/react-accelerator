# React 102

**Requires:** React 101

## Learning Objectives
* Component Hierarchy
* Lifecycle of a Component
* Loading data from an API
* Debugging

## Online Course Content

### Section 6 – Debugging React Apps
Debugging

### Section 7 – Diving Deeper into Components & React Internals 
**Note:** You only need to watch up to *90. Component Update Lifecycle (for state Changes)*

* Component Hierarchy
* Lifecycle of a Component

### Section 9 – Reaching out to the Web (Http / Ajax)
* Loading data from an API

## Supplemental Material
* Read Using Fetch – https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

* Read Lifting State Up – https://reactjs.org/docs/lifting-state-up.html

* Read React.Component – https://reactjs.org/docs/react-component.html

## Project
For this project, you'll be making a **Giphy Explorer**.

To start, you'll need to sign up and get an API key [here](https://developers.giphy.com/). Once that's completed, create a React application however you want. For an easy setup, [Create React App](https://github.com/facebook/create-react-app) might be a good way to go.

You'll need to write a function that will allow users to enter text in the input in the Header component, as well as a function that takes the user input `onSubmit` and sends the query to the Giphy API.

After that, you'll need to parse the response to pull out the image id property. If you look at the JSON response and follow the URLs they give you, you will see that the links get transformed into pages. This means that you can't use those links as the src property in an image tag and will instead need to follow this pattern: https://i.giphy.com/media/*${image.id}*/100.gif

When you get results, tell the user how many results they got and what the query string they searched for was and reset the text input.

If you want to go the extra mile, add the functionality necessary to notify users of any errors in the API request, as well as allow users to modify the number of responses, the language, and the rating. (Hint: you'll have to dig into the API documentation for this one!)