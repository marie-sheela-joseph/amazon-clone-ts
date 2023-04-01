import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { createContext, useReducer } from "react";
import { initialState, reducer,InitialState,REDUCER_ACTION_TYPE} from "./reducer";
import { useEffect } from "react";
import { auth } from "./firebase";

export const AppContext = createContext<{state:InitialState,dispatch:React.Dispatch<any>}>({state:initialState,dispatch:()=>null})
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser)
        dispatch({ type: REDUCER_ACTION_TYPE.SET_USER, user: authUser })
      }
      else {
        dispatch({ type: REDUCER_ACTION_TYPE.SET_USER, user: null })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return <div>    
    <AppContext.Provider value={{state,dispatch}}>      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
          </Routes>
        </BrowserRouter>           
        </AppContext.Provider>   
  </div>
}
export default App;




