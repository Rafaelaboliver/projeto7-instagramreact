import React from "react"

export default function Usuario(props) {
    const [nome, setNome] = React.useState(props.nomeusuario)

    function alterarUsuario() {
        const resposta = prompt('Insira nome de usuário!')
        setNome(resposta)
    }

    const [foto,setFoto] = React.useState(props.imagem)

    function alterarImagem() {
        const resposta = prompt('Insira o link da sua foto de perfil!')
        setFoto(resposta)

    }

    return (
        <div class="usuario">
            <img onClick={alterarImagem} src={foto} />
            <div class="texto">
                <strong>{props.nomeusuario}</strong>
                <span>
                    {nome}
                    <ion-icon onClick={alterarUsuario} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}