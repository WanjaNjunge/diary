
import React, {useContext, useReducer} from "react"


//INITIAL STATE
const initialState = {
  url: "http://diary-up7p.onrender.com"
}

// REDUCER
const reducer = (state, action) => {
  
  switch(action.type){
    default:
      return state
  }
}


// APPCONTEXT

const AppContext = React.createContext(null)



//AppState component
export const AppState = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{state, dispatch}}>
    {props.children}
  </AppContext.Provider>

}


//useAppState hook
export const useAppState = () => {
  return React.useContext(AppContext)
}