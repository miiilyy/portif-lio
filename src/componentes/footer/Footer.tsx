import './Footer.css'
import Logo1 from '../../assets/1077041.png'
import Logo2 from '../../assets/logo_intagram.webp'

export default function Footer(){
    return(
        <footer>
            <div className="esquerda_footer">
                <h1 className='titulo_footer'>Emili Porto</h1>
                
                <div className='imagens'>
                    <img src={Logo1} alt="" />
                    <img src={Logo2} alt="" />
                </div>
            </div>
            <div className="direita_footer">

                <div className='links_footer'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Informações</a></li>
                        <li><a href="#">Entre em contato</a></li>
                    </ul>
                </div>

                <div className='links_footer'>
                    <ul>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos e Condições</a></li>
                        <li><a href="#">Saiba mais</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}