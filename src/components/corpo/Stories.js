import Story from "./Story"

export default function Stories () {
    let imagens = ["assets/img/9gag.svg", "assets/img/meowed.svg", "assets/img/barked.svg", "assets/img/nathanwpylestrangeplanet.svg", "assets/img/wawawicomics.svg", "assets/img/respondeai.svg", "assets/img/filomoderna.svg", "assets/img/memeriagourmet.svg"];
    let usuarios = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
    
    return (
        <div class="stories">
            {usuarios.map(nome => <Story nome={nome} />)}
            {imagens.map(nome => <Story nome={nome} />)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}