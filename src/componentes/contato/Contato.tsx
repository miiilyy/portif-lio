import './Contato.css'
import React, { useState } from 'react'
function contato(){
        const [nome, setNome] = useState("")  
        const [email, setEmail] = useState("")
        const [mensagem, setMensagem] = useState("")
        function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
          console.log(e.target.value)
          setNome(e.target.value)
        }
        function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
          console.log(e.target.value)
          setEmail(e.target.value)
        }
        function mudaMensagem(e:React.ChangeEvent<HTMLTextAreaElement>){
          console.log(e.target.value)
          setMensagem(e.target.value)
        }


    return(
        <>
<form action="contato">
    <div className= "contato-form ">
        <a>Formulário Cadastro</a>
    <div className="contato-container">
        <label htmlFor="nome">Nome {nome}</label>
        <input type="texto" id="nome" name="nome_usuario" onChange={mudaNome}></input>
    <div className= "contato-container">
        <label htmlFor="email">E_mail{email}</label>
        <input type="email" id="email" name="email_usuario" onChange={mudaEmail}></input>
    </div>
    <div className="contato-container">
        <label htmlFor="texto">Texto:{mensagem}</label>
        <textarea id="texto" name="texto_usuario" onChange={mudaMensagem}></textarea>
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