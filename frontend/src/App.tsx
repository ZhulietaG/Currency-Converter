import '../css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About, Home, LoginPage, NotFound, UsersOverview} from "../pages"
import {Footer, Navigation} from "../components";
import {RegistrationPage} from "../pages/LoginPage/RegistrationPage.tsx";
import {Dashboard} from "../pages/Dashboard.tsx";
import {Contact} from "../pages/Contact.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/register"} element={<RegistrationPage/>}></Route>
                <Route path={"/about"} element={<About/>}></Route>
                <Route path={"/login"} element={<LoginPage/>}></Route>
                <Route path={"/users"} element={<UsersOverview/>}></Route>
                <Route path={"/dashboard/:id"} element={<Dashboard/>}></Route>
                <Route path={"/contact"} element={<Contact/>}></Route>
                <Route path={"*"} element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
