import '../css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, LoginPage, RegistrationPage, About, Contact, EditAccount, NotFound, UsersOverview, Dashboard} from "../pages"
import {Footer, Navigation} from "../components";

function App() {

  return (
    <>
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/register"} element={<RegistrationPage/>}></Route>
                <Route path={"/login"} element={<LoginPage/>}></Route>
                <Route path={"/about"} element={<About/>}></Route>
                <Route path={"/contact"} element={<Contact/>}></Route>
                <Route path={"/users"} element={<UsersOverview/>}></Route>
                <Route path={"/dashboard/:id"} element={<Dashboard/>}></Route>
                <Route path={"/edit-account/:id"} element={<EditAccount/>}></Route>
                <Route path={"*"} element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
