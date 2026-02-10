# React js

## React js
React js is a javascript library used to make single page applications where the page is re renders instead of loading this is done by the virtual dom. React makes the virtual dom and compares it with the real dom and only makes the changes where it needs instead of reloading the whole dom.

---

## Components
Components are the reusable piece of codes.

---

## Props
Props are basically variables pass to the components to send data through parent to child. We use props to use the components with different data. Same structure but different data. Props drilling is concept where we pass the props from parent to its child to grand child ….. props are unidirectional we can only pass parent to child we can not pass it child to parent.

---

## Key in map function
Key is a unique id we have to provide so the react can differenciate between the components that are maped with different data.

---

## useState hook
useState hook lets you add a state (variable) in functional components which can trigger the re render when changed.

---

## useEffect hook
useEffect hook is a sideeffect function that will run on when re-rendering. We can control it by the dependency array when to run. It has three parts function to run, cleanup function and dependency array. Function is what we want it to do when re-rendering. cleanup function is what we want to do when component is unmounted (removed from ui). Dependency array is to control when to run the function if its empty it runs on first render only if it’s not there it runs the useEffect on every render we can add any variable or state in it so when that changes it runs the useEffect.

---

## Form handling
for handling form data we react-hook-form library it gives us built in functions to handle the form submission, formState and gives the register function so we can define the inputs by name and handle their data. In formState we can handle the errors and use the isSubmitting function for animation and to disable the submit button.

```js
const {
  register,
  handleSubmit,
  formState: { errors,isSubmitting },
} = useForm();
```

---

## Lifting state up
Lifting state up is the method to send data from child to parent by the states. We define the state in the parent and pass the states with their setter functions by props to the children so they can use that and manage it and different children can use it in sync.

---

## Conditional rendering
Conditional rendering is used to hide the components or parts of code on a condition like user is logged in we show him the logout button and if it is not logged in we show him the login button.

---

## Context Api
Context api is used to give the state access globaly so we don’t have to do the props drilling we can define it globaly and we can access that states anywhere in the app in any children.

---

## useReducer Hook
useReducer is used to manage the states like useState hook. But the useReducer is better for managing multiple state in a single object rather than making multiple states and handling their setter functions.

---

## React router
React router is used to make the navigation of the through one page to another page without reloading. We provide the routes to the app so it shows the data depends on the routes. We can make the nested routes (/pages/about) and we can give the parameters as well (/user:id).

---

## Fetch vs Axios
Fetch and axios are used to manipulate data or make communication between database or backend. In fetch we have to make the layout manually and we have to convert the data manually into json. But in axios we get the additional features like error handeling and automatically converted the data into json we don’t have to do it manually. Fetch is more manual work and axios gives features like a library.

---

## CRUD Operations
CRUD operations are get, post, delete, put.

- Get used to get the data from the api
- POST is used to add the data into the database by api
- Delete is used to delete the data from the database by api
- PUT is used to update the data from the database by api

---

## Pagination
Pagination is used to show the controlled data on a single page like we are showing the users card and we want to show 6 cards on a single page we can filter that make the pagination so the other cards show on the other pages.

---

## JWT
Jason web token (JWT) is used for the authentication and authorization without managing a state. It is stateless authentication method. In jwt we send a request to the server and server returns a access token and refresh token. Access token is used to access the data and the refresh token is used to refresh the access token if it expires. We can set the time for expiration of access token but we make it short because of security. JWT is a encrypted token.

It is divided in three parts:

```
header.payload.signature
```

---

## Session
Session is a stateful method for authentication we have to manage the state to check whether the user is logged in or not. We do it by the session id. We have to store the session id in the server as well in the client side.

---

## Redux
Redux is a single centeralized store for storing the states of entire application and gives a way how state can be read or managed. Ui dispatch the action it goes to the reducers. Reducers decide which function to run and how the state in the store gonna be changed.

### Store.js
```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counterSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer
  }
})
```
### Slice.js
```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment : (state) =>{
            state.value += 1;
        },
        decrement : (state) =>{
            state.value -= 1;
        }
    }
})

export const {increment,decrement} = counterSlice.actions

export default counterSlice.reducer
```
### Main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </StrictMode>
)
```

---

## Custom hooks
Custom hooks are the function we make to reuse our code. Like if we have to write a same function in multiple components we can make a custom hook and reuse that hook in multiple components to keep the code clean and reuse the code.

---

## Memoization
UseMemo is a hook used to memorize the function. In between the renders we don’t want it to run every time until the value or parameter in that changes that’s when we use memoization.

---

## Lazy Loading & Code Spilitting
Lazy loading is a react built in method used to load the component that is taking time in the background so the other components can be loaded it also give the option to show a loading message to make the ui better. It is used for better user experience. Code splitting also used to make the code better for maintenance and readable. In code splitting we divide the code into the components to make it optimized and easy to manage.

---

## JEST
Jest is javascript testing framework used to test react, node and javascript applications. Developers used for unit testing. Write the scripts to automate the testing and finding errors and bugs for debugging.

---

## React Testing Library
React Testing Library is a library that helps you test React components the way a real user would interact with them, by querying and interacting with the DOM instead of component internals such as state or props.

---

## useRef
useRef is a hook used to target the elements without dom manipulation or use to persist the value of variable across re renders. Normally the when component re render the normal variable re initialized so the variable got the initial value.

---

## useCallback
useCallback hook is used to stop the recreation of the functions on re rendering. In react when component re renders it created the function again we can stop this by using useCallback hook. It doesn’t stop the function just stop the recreation. We can stop the function using useMemo.

---

## useLayoutEffect
useLayoutEffect hook is use to run a function before the rendering of the component. It has same functionality like the useEffect just the useEffect runs after the rendering and useLayoutEffect runs before the rendering.

---

## useEffectEvent
useEffectEvent is used to get the latest values in useEffect without re running the useEffect.

# Github Notes

## SETUP
Configuring user information used across all local repositories

## Command: git config --global user.name “[firstname lastname]”
set a name that is identifiable for credit when review version history

## Command: git config --global user.email “[valid-email]”
set an email address that will be associated with each history marker

## Command: git config --global color.ui auto
set automatic Command line coloring for Git for easy reviewing

## SETUP & INIT clone repository
Configuring user information, initializing and cloning repositories

## Command: git init
initialize an existing directory as a Git repository

## Command: git clone [url]
retrieve an entire repository from a hosted location via URL

## SETUP and init from local

## command: git init
initialize an existing directory as a Git repository

## Command: git remote add origin "(link of repository)"
link the repository

## STAGE & SNAPSHOT
Working with snapshots and the Git staging area

## Command: git status
show modified files in working directory, staged for your next commit

## Command: git add [file]
add a file as it looks now to your next commit (stage)

## Command: git reset [file]
unstage a file while retaining the changes in working directory

## Command: git diff
diff of what is changed but not staged

## Command: git diff --staged
diff of what is staged but not yet committed

## Command: git commit -m “[descriptive message]”
commit your staged content as a new commit snapshot

#BRANCH & MERGE
Isolating work in branches, changing context, and integrating changes

## Command: git branch
list your branches. a * will appear next to the currently active branch

## Command: git branch [branch-name]
create a new branch at the current commit

## Command: git checkout
switch to another branch and check it out into your working directory

## Command: git merge [branch]
merge the specified branch’s history into the current one

## Command: git log
show all commits in the current branch’s history

# REWRITE HISTORY
Rewriting branches, updating commits and clearing history
## Command: git rebase [branch]
apply any commits of current branch ahead of specified one
## Command: git reset --hard [commit]
clear staging area, rewrite working tree from specified commit