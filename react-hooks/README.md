# React Hooks

**Requires:** React 102

## Learning Objectives
* useState Hook
* useEffect Hook
* Writing your own Hooks

## Online Course Content

### Section 26 – React Hooks 
All portions of this section should be watched other than the legacy content that's marked as such. 

## Supplemental Material
* Hooks overview – https://reactjs.org/docs/hooks-overview.html
* Examples of Hooks in action – https://www.robinwieruch.de/react-function-component

## Project
For this project, you will need to rewrite the `Aside` component in the Giphy Explorer project from the React 102 course to still manage state with Hooks.

If you have not completed the React 102 section of the Accelerator, the base files for this project can be found in the `react-hooks/project-files` folder. If you have completed the React 102 project, it's *highly recommended* that you modify your own project for this.

The first step is to convert the `Aside` component from a class component to a functional component. After this, you will need to implement the `useState` Hook to manage state for the `Aside` component. Lastly, you'll need use the `useEffect` Hook in place of `componentDidUpdate` to fetch information from the Giphy API. 

Once you're done, you'll have a stateless component managing state! Pretty neat, huh?