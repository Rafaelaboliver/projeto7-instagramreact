export default function Posts() {
    return (
        <div class="posts">

            <Post usuarioimg="./img/meowed.svg" usuarionome="meowed" conteudoimg="./img/gato-telefone.svg" curtidaimg="./img/respondeai.svg" texto1="Curtido por " texto2="respondeai" texto3="e " texto4="outras 101.523 pessoas" />
            <Post usuarioimg="./img/barked.svg" usuarionome="barked" conteudoimg="./img/dog.svg" curtidaimg="./img/adorable_animals.svg" texto1="Curtido por " texto2="adorable_animals" texto3=" e " texto4="outras 99.159 pessoas" />

        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.usuarioimg} />
                    {props.usuarionome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudoimg} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidaimg} />
                    <div class="texto">
                        {props.texto1} <strong>{props.texto2}</strong> {props.texto3} <strong>{props.texto4}</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}
