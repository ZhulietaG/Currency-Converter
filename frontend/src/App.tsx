import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFound} from "../pages"

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"http://localhost:3001/user"}></Route>
                <Route path={"http://localhost:3001/user"}></Route>
                <Route path={"http://localhost:3001/user"}></Route>
                <Route path={"*"} element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
