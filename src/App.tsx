import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return <div>    
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
  </div>
}
export default App;
