import './Header.css'
import Logo from '/IMG_20230506_225218.jpg'
function Header(){
    return(
        <header>
            <div className='apresentacao_header'>
                <div className="imagem-container">
                    <img src = {Logo} alt= "#" ></img>
                </div>
                <div>
                    Emili Silva Protifólio 
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="Home">Pagina inicial</a></li>
                    <li><a href="Sobre">Sobre</a></li>
                    <li><a href="Noticia">Noticia</a></li>
                    <li><a href="Contato">Contato</a></li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Header