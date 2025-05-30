import '../css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, LoginPage, NotFound, UsersOverview} from "../pages"
import {Navigation} from "../components";
import {RegistrationPage} from "../pages/LoginPage/RegistrationPage.tsx";
import {Dashboard} from "../pages/Dashboard.tsx";
import {Footer} from "../components/footer.tsx";

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
                <Route path={"/dashboard/:id"} element={<Dashboard/>}></Route>
                <Route path={"*"} element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
