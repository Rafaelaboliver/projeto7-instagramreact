import React from "react"

export default function Usuario(props) {

    const [nome, setNome] = React.useState(props.nomeusuario)
    const [foto,setFoto] = React.useState(props.imagem)
    
    function alterarUsuario() {
        const resposta = prompt('Insira nome de usuário!')
        setNome(resposta)
    }

    function alterarImagem() {
        const resposta = prompt('Insira o link da sua foto de perfil!')
        setFoto(resposta)
    }

    return (
        <div data-test="user" class="usuario">
            <img data-test="profile-image" onClick={alterarImagem} src={foto} />
            <div class="texto">
                <strong>{props.nomeusuario}</strong>
                <span data-test="name">
                    {nome}
                    <ion-icon data-test="edit-name" onClick={alterarUsuario} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}