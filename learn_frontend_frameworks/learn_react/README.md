# We gonna be learning React
- React is a JS library not a framework and I will be using this README to document my progress.
- I am using the codewithmosh react course to kick start my learning of react.

## Important notes and points below
- You can start the react app using either `Create Virtual App` or `Vite`
- In the directory you want your file you can use vite in the cmd as follows `npm create vite@"version"` or 
  you can use `npm create vite@latest`.
- Using vite you can create a lot of javascript apps, but in this case select React.
- To run the web app we use `npm run dev`.

### Creating components
- You can use a javascript class or a function. Functions are preferred to classes.
- It is advisable to put all components in a folder named `components` in the `src` directory.
- When you have variables that are in a function component and they want to be updated; you can use the react 
  `useState`. This function is called a Hook which is used to tap into built in features of react.
- `useState` takes an initial argument as the variable that is changings and returns an array `arr` where
   `arr[0]` is the variable that is changing and `arr[1]` is the updator function.
- For icons you can use a react library. You can instal it using `npm i react-icons@"version"`

## Managing Component State
### State Hook
- React updates state asynchronously (meaning not immediately).
- State is stored outside of a component. React keeps the state as long as the componet shows
  on the screen.
- You can only use at the top level of a component.
- We cannot use inside the `for` loops and `if` statements because it the constructs impact the order in which the
  state hook is called.

### Keeping components Pure.
- A pure function is a function such that given the same input it produces the same result.
- To keep components pure, keep changes out of the render phase.
