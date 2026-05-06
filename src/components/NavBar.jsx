import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar(){
    
    return(
        <nav>
            <ul>
                <li><Link to='cadastro' className={({isActive}) => (isActive ? 'ativo' : undefined)}>Cadastrar</Link></li>
                <li><Link to='vagas' className={({isActive}) => (isActive ? 'ativo' : undefined)}>Ver Vagas</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;