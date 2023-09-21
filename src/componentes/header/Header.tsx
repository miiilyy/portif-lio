import './Header.css'
function Header(){
    return(
        <header>
            <div className='apresentacao_header'>
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