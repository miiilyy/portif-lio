import './Portifolio.css'

type portifolioProps={
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function portifolio(props:portifolioProps){
    return(
        <div className="portifolio_content">
            <div className="foto_portifolio">
                <img src={props.imagem} alt=""/>
            </div>
            <div className="texto_portifolio">
                <h1>{props.titulo}</h1>
                <p className="sinopse">
                    {props.sinopse}
                </p>
            </div>
        </div>
    )
}