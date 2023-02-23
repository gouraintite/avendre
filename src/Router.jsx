import { Routes, Route } from "react-router-dom";
import Main from './pages/main'
import Articles from "./pages/articles";
import Detail from "./pages/details";
import './App.css'

const Router = () => {

    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Main />} />
                <Route path="articles" element={<Articles />} />
                <Route path="detail" element={<Detail />} />
            </Route>
        </Routes>
    )
}

export default Router
