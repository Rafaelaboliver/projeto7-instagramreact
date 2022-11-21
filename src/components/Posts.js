import React, { useState } from "react"

export default function Posts() {

    const infoPosts = [
        { imagem: "./img/meowed.svg", usuario: "meowed", conteudo: "./img/gato-telefone.svg", curtida: "./img/respondeai.svg", texto1: "Curtido por ", texto2: "respondeai", texto3: "e ", texto4: "outras ", valor: 101.523, texto5: "pessoas" },
        { imagem: "./img/barked.svg", usuario: "barked", conteudo: "./img/dog.svg", curtida: "./img/adorable_animals.svg", texto1: "Curtido por ", texto2: "adorable_animals", texto3: " e ", texto4: "outras ", valor: 99.158, texto5: "pessoas" }
    ]
    return (
        <div class="posts">
            {infoPosts.map((posts) => <Post key={posts.imagem} imagem={posts.imagem} usuario={posts.usuario} conteudo={posts.conteudo} curtida={posts.curtida}
                texto1={posts.texto1} texto2={posts.texto2} texto3={posts.texto3} texto4={posts.texto4} valor={posts.valor} texto5={posts.texto5} />)}
        </div>
    )
}

function Post(props) {

    const [salvar, setSalvar] = React.useState(false)
    const [coracao, setCoracao] = React.useState(false)
    const [curtida, setCurtida] = React.useState(false)
    const [valor, setValor] = React.useState(props.valor)


    function salvarPost() {
        setSalvar(!salvar)
    }

    function adicionarCurtida() {
        setCoracao(!coracao)
        setCurtida(!curtida)
        !curtida ? setValor(valor + 0.001) : setValor(valor - 0.001)
    }

    //ternário estrutura:
    //condição ? (valor se for verdadeiro) : (valor se for falso)
    //!curtida ? (setCurtida(curtida + 0.001) : (setCurtida(curtida - 0.001))
    //!condição = assumir que ela tenha valor nulo, undefined ou vazio

    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onDoubleClick={!curtida ? adicionarCurtida : () => { }} src={props.conteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={adicionarCurtida} name={coracao ? "heart" : "heart-outline"} style={coracao ? {color: "#E30002"} : {backgroundcolor: "#FAFAFA"}}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={salvarPost} name={salvar ? "bookmark" : "bookmark-outline"}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtida} />
                    <div data-test="likes-number" class="texto">
                        {props.texto1} <strong>{props.texto2}</strong> {props.texto3} <strong>{props.texto4} {valor} {props.texto5} </strong>
                    </div>
                </div>
            </div>
        </div>

    )
}
