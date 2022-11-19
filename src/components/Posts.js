export default function Posts() {

    const infoPosts = [
        { imagem: "./img/meowed.svg", usuario: "meowed", conteudo: "./img/gato-telefone.svg", curtida: "./img/respondeai.svg", texto1: "Curtido por ", texto2: "respondeai", texto3: "e ", texto4: "outras 101.523 pessoas" },
        { imagem: "./img/barked.svg", usuario: "barked", conteudo: "./img/dog.svg", curtida: "./img/adorable_animals.svg", texto1: "Curtido por ", texto2: "adorable_animals", texto3: " e ", texto4: "outras 99.159 pessoas" }
    ]
    return (
        <div class="posts">
            {infoPosts.map((posts) => <Post key={posts.imagem} imagem={posts.imagem} usuario ={posts.usuario} conteudo={posts.conteudo} curtida={posts.curtida} texto1={posts.texto1} texto2={posts.texto2} texto3={posts.texto3} texto4={posts.texto4} />)}
        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
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
                <img src={props.conteudo} />
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
                    <img src={props.curtida} />
                    <div class="texto">
                        {props.texto1} <strong>{props.texto2}</strong> {props.texto3} <strong>{props.texto4}</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}
