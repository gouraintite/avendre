import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main'
import Articles from "./pages/articles";
import Detail from "./pages/details";
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
      </Route>
      <Route path="/articles" element={<Articles />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
