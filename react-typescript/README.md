# React Typescript

*Requires:* React 102

## Learning Objectives
A Typescript crashcourse with:
* Variables
* Functions
* Objects
* Arrays
* Tuples

Implementing Typescript with React basics:
* Typescript and Props
* Typescript with State
* Typescript in Functional Components

## Online Course Content
[Typescript: The Complete Developer's Guide](https://redventures.udemy.com/course/typescript-the-complete-developers-guide/learn)

### Section 17 – React and Redux with Typescript
Parts *254. React and Redux Overview* through *261. Functional Components* should be watched before attempting the project.

## Supplemental Material
* Typescript documentation – https://www.typescriptlang.org/docs/home.html
* Typescript 101 - https://thecurve.redventures.com/share/asset/view/799
* Typescript Deep Dive - https://basarat.gitbooks.io/typescript/docs/jsx/react.html
* React with TypeScript cheat sheet – https://github.com/TypeScript-cheatsheets/react-TypeScript-cheatsheet

## Project
For this project, you will need to implement Typescript in your `App` file in the Giphy Explorer project from the React 102 course.

If you have not completed the React 102 section of the Accelerator, the base files for this project can be found in the `react-typescript/project-files` folder. If you have completed the React 102 project, it's *highly recommended* that you modify your own project for this.

The first thing you'll need to do is make sure your type definitions are up to date by running `npm install @types/react @types/react-dom`.

Secondly, for Typescript to work correctly, you will need to rename your `.js` file to a `.ts` file or, if you have JSX, rename your `.jsx` file to a `.tsx` file.

The main thing you'll need to focus on is taking your `App` component, make sure you're using the constructor method, and creating an interface for your `App State` and `App Props` (if applicable). Try to have as few `any` type variables as possible and no errors.

## Optional Typescript Crash Course

### What is Typescript?
The definition from the official website says: “a typed superset of Javascript” but it assumes you know what a “superset” is and what “typed” means. Instead to keep things simple, you can think of Typescript as of “a layer on top” of Javascript.

Typescript is a layer because you can write Typescript code in your editor. After a compilation, all that Typescript stuff is gone and you’re left with plain, simple Javascript.

If the idea of a compilation step confuses you, keep in mind that Javascript is already compiled and then interpreted – there is a Javascript engine that reads and executes your code.

But Javascript engines are not able to read Typescript code so any Typescript file should go under a “pre-translation” process called **compilation**. Only after the first compilation step is when you’re left with pure Javascript code, ready to run in a browser.

### Installation
To install Typescript, run the following commands in the terminal:
`npm install -g typescript`
`npm install -g ts-node`

To compile your Javascript into Typescript, type `tsc` and then your file name into the terminal. 
ex. `tsc index.ts`

This will create a file named `index.js`, which you can run by typing `node index.js` into the terminal.

In order to turn these two steps into one, we've installed the `ts-node` package. You can compile *and* run your code by typing `ts-node index.ts` into the terminal.

### Types
[A list of Data Types](https://www.w3schools.com/js/js_datatypes.asp)

#### Javascript's Data Types
- String
- Number
- Boolean
- Undefined and Null
- Function
- Object (arrays in JS are considered objects)

#### Additional Typescript types

- [Array](https://www.typescriptlang.org/docs/handbook/basic-types.html#array)
- [Tuple](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)
- [Enum](https://www.typescriptlang.org/docs/handbook/basic-types.html#enum)
- [Any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) 
- [Void](https://www.typescriptlang.org/docs/handbook/basic-types.html#void) 
- [Null](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined)
- [Never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never) 
- [Object](https://www.typescriptlang.org/docs/handbook/basic-types.html#object) (
- Union 
- Type assertions