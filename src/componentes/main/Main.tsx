import { useState } from "react";
import Portifolio from "../portifolio/Portifolio";
import './Main.css'
type portifolioType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const portifolio:portifolioType[] = [
        {
            id:1,
            titulo:"Libra",
            sinopse:"Meu meio de lazer, onde me sinto bem",
            imagem:"/libra_intermediario.png"
        },
        {
            id:2,
            titulo:"Trabalho de Bairro Inteligente",
            sinopse:"Nesse trabalho houve a comparação do bairro inteligente e do habitual",
            imagem:"/portifolio_Bairro.png"
        },
        {
            id:3,
            titulo:"Robotia",
            sinopse:"Escrevi um conto da Rapunzel com um novo conceito.",
            imagem:"/robotia_curso.png"
        },
        {
            id:4,
            titulo:"Geogebra Topicos Fundamentais",
            sinopse:"O rascunho de uma Conta.",
            imagem:"/Geogebra_cursos.png"
        },
        {
            id:5,
            titulo:"Livraria",
            sinopse:"Interface de uma livraria.",
            imagem:"/portifolio_livraria.png"
        },
        {
            id:6,
            titulo:"Comunicação",
            sinopse:"Trabalho de português sobre realismo.",
            imagem:"/portifolio_comunicação.png"
        },
        {
            id:7,
            titulo:"Français",
            sinopse:"Criamos a interface de uma conta na loja.",
            imagem:"/Portifolio_Français.png"
        },
        {
            id:8,
            titulo:"Lingua e Cultura",
            sinopse:"Página inicial do aplicativo de reciclagem.",
            imagem:"/idioma_cursos.png"
        },
        {
            id:9,
            titulo:"Trabalho De Conclusão De Curso",
            sinopse:"Artigo onde falamos sobre reciclagem, quando teve inicio e seu avanço.",
            imagem:"/portifolio_TCC.png"
        },
        {
            id:10,
            titulo:"Instagram",
            sinopse:"Interface do Instagram.",
            imagem:"/portifolio.imagem-perfil.png"
        }



    ]
    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                
                <p>Buscar Portfólio</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>Pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">
                {portifolio.filter((portifolio)=>portifolio.titulo.toLowerCase().includes(texto.toLowerCase())).map((portifolio:portifolioType)=>
                    <Portifolio key={portifolio.id} 
                           titulo={portifolio.titulo} 
                           sinopse={portifolio.sinopse} 
                           imagem={portifolio.imagem}
                    />
                    )
                }
            </main>
        </>
    )
}