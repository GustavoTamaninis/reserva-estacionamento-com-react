import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Vagas from "../pages/vagas";
import Cadastro from "../pages/cadastro";

function NavBar(){
    
    return(
        <nav>
            <ul>
                <li><Link to='cadastro' className={({isActive}) => (isActive ? 'ativo' : undefined)}>Cadastrar</Link></li>
                <li><Link to='vagas' className={({isActive}) => (isActive ? 'ativo' : undefined)}>Ver Vagas</Link></li>
            </ul>

            <Routes>
                <Route path='/' element={<Vagas/>}></Route>
                <Route path='/vagas' element={<Vagas/>}></Route>
                <Route path='/cadastro' element={<Cadastro/>}></Route>
            </Routes>
        </nav>
    )
}

export default NavBar;