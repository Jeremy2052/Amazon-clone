// Setup data layer
//We need this to track the cart

import React, {createContext, useContext, useReducer} from 'react'

//create data layout
export const StateContext = createContext();

//Build a provider to wrap entire app inside of prvider to have access to the data layout
//Then wrap it around App in index.js file
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);