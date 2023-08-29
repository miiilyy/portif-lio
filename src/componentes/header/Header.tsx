import './Header.css'
import Logo from '../../assets/enxoval-para-gato-Copia.jpg'
function Header(){
    return(
        <header>
            <div>
            <img src = {Logo} alt= "#" ></img>
                Emili Silva Protifólio 
            </div>
            <nav>
                <ul>
                    <li><a href="Home"></a>Pagina inicial</li>
                    <li><a href="Sobre"></a>Sobre</li>
                    <li><a href="Noticia"></a>Noticia</li>
                    <li><a href="Contato"></a>Contato</li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Header