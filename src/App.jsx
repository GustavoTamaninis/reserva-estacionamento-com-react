import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Vagas from "./pages/Vagas";
import Cadastro from "./pages/Cadastro";
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
            <Route path='/' element={<Vagas/>}></Route>
            <Route path='/vagas' element={<Vagas/>}></Route>
            <Route path='/cadastro' element={<Cadastro/>}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App
