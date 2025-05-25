import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, NotFound} from "../pages"
import {Navigation} from "../components";
import {RegistrationPage} from "../pages/LoginPage/RegistrationPage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/register"} element={<RegistrationPage/>}></Route>
                <Route path={"/login"} element={""}></Route>
                <Route path={"*"} element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
