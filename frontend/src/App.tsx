import '../css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, LoginPage, NotFound, UsersOverview, EditAccount, Dashboard} from "../pages"
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
                <Route path={"/login"} element={<LoginPage/>}></Route>
                <Route path={"/users"} element={<UsersOverview/>}></Route>
                <Route path={"/edit-account/:id"} element={<EditAccount/>}></Route>
                <Route path={"/dashboard/:id"} element={<Dashboard/>}></Route>
                <Route path={"*"} element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
