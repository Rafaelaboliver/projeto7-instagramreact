export default function Stories() {

    const infoStories = [
        { imagem: "./img/9gag.svg", usuario: "9gag" },
        { imagem: "./img/barked.svg", usuario: "barked" },
        { imagem: "./img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { imagem: "./img/wawawicomics.svg", usuario: "wawawicomics" },
        { imagem: "./img/respondeai.svg", usuario: "respondeai" },
        { imagem: "./img/filomoderna.svg", usuario: "filomoderna" },
        { imagem: "./img/memeriagourmet.svg", usuario: "memeriagourmet" },
        { imagem: "./img/meowed.svg", usuario: "meowed" }

    ]

    return (
        <div class="stories">
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

            {infoStories.map((story) => <Story key={story.usuario} imagem={story.imagem} usuario={story.usuario} />)}
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}

