export default function Sugestoes() {

    const infoSugestoes = [
        { imagem: "./img/bad.vibes.memes.svg", usuario: "bad.vibes.memes", razao: "Segue você" },
        { imagem: "./img/chibirdart.svg", usuario: "chibirdart", razao: "Segue você" },
        { imagem: "./img/razoesparaacreditar.svg", usuario: "razoesparaacreditar", razao: "Novo no Instagram" },
        { imagem: "./img/adorable_animals.svg", usuario: "adorable_animals", razao: "Segue você" },
        { imagem: "./img/smallcutecats.svg", usuario: "smallcutecats", razao: "Segue você" }
    ]

    return (
        <div class="sugestoes">

            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {infoSugestoes.map((sugestao) => <Sugestao key={sugestao.usuario} imagem={sugestao.imagem} usuario={sugestao.usuario} razao={sugestao.razao} />)}
        </div>
    )
}


function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <div class="nome">{props.usuario}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
