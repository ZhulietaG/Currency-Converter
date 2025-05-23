import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, NotFound} from "../pages"
import {Navigation} from "../components";

function App() {

  return (
    <>
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"http://localhost:3001/user"}></Route>
                <Route path={"http://localhost:3001/user"}></Route>
                <Route path={"*"} element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
