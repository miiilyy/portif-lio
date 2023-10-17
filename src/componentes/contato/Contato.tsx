import './contato.css'
import '../header/Header'
function contato(){
    return(
        <>
<form action="contato">
    <div className= "contato-form ">
        <a>Formulário Cadastro</a>
    <div className="contato-container">
        <label htmlFor="nome">Nome</label>
        <input type="texto" id="nome" name="nome_usuario"></input>
    <div className= "contato-container">
        <label htmlFor="email">E_mail</label>
        <input type="email" id="email" name="email_usuario"></input>
    </div>
    <div className="contato-container">
        <label htmlFor="texto">Texto:</label>
        <textarea id="texto" name="texto_usuario"></textarea>
    </div>    
    <div className="button">
 <button type="submit">Enviar</button>
    </div>
    </div>
    </div>
</form>
        </>
    )
}

export default contato