import '../css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {
    Home,
    LoginPage,
    RegistrationPage,
    Contact,
    EditAccount,
    NotFound,
    UsersOverview,
    Dashboard,
    CreateWallet, EditWallet
} from "../pages"
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
                <Route path={"/contact"} element={<Contact/>}></Route>
                <Route path={"/users"} element={<UsersOverview/>}></Route>
                <Route path={"/dashboard/:id"} element={<Dashboard/>}></Route>
                <Route path={"/edit-account/:id"} element={<EditAccount/>}></Route>
                <Route path={"/edit-wallet/:user_id/:wallet_id"} element={<EditWallet/>}></Route>
                <Route path={"/create-wallet/:id"} element={<CreateWallet/>}></Route>
                <Route path={"/edit-wallet/:id"} element={<EditWallet/>}></Route>
                <Route path={"*"} element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
