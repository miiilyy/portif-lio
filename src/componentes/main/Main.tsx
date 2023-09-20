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
            titulo:"Academia",
            sinopse:"Meu meio de lazer, onde me sinto bem",
            imagem:"/Portifolio_academia.png"
        },
        {
            id:2,
            titulo:"Trabalho de Bairro Inteligente",
            sinopse:"Nesse trabalho houve a comparação do bairro inteligente e do habitual",
            imagem:"/Portifolio_Bairro.png"
        },
        {
            id:3,
            titulo:"O novo conto da Rapunzel",
            sinopse:"Escrevi um conto da Rapunzel com um novo conceito.",
            imagem:"/Portifolio_conto.png"
        },
        {
            id:4,
            titulo:"Conta",
            sinopse:"O rascunho de uma Conta.",
            imagem:"/portifolio_gmail.png"
        },
        {
            id:5,
            titulo:"Livraria",
            sinopse:"Interface de uma livraria.",
            imagem:"/portifolio_livraria.png"
        },
        {
            id:6,
            titulo:"Realismo",
            sinopse:"Trabalho de português sobre realismo.",
            imagem:"/Portifolio_Realismo.png"
        },
        {
            id:7,
            titulo:"Loja De Roupa",
            sinopse:"Criamos a interface de uma conta na loja.",
            imagem:"/portifolio_loja.png"
        },
        {
            id:8,
            titulo:"Reciclacem",
            sinopse:"Página inicial do aplicativo de reciclagem.",
            imagem:"/portifolio_reciclagem.png"
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
                
                <p>Buscar Portifolio</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
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