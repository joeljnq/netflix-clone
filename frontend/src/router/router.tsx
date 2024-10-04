import { BrowserRouter,Routes, Route } from "react-router-dom"
import LandingPage from "../components/LandingPage"
const Router = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />}>
            <Route path='/logIn' index element={<h1> Log IN </h1>} />
            </Route>
        </Routes>
        </BrowserRouter>
    )

}
export default Router
