import './Header.css'
import { Link } from 'react-router-dom'
function Header(){
    return(
        <header>
            <div>
                <Link to="/">Emili Silva</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Pagina inicial</Link>
                    </li>
                    <li>
                        <Link to="/Sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/Notícias">Notícias</Link>
                    </li>
                    <li>
                        <Link to="/Contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header