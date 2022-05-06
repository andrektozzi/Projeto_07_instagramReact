import Post from "./Post"

export default function Posts () {
    return (
        <div class="posts">

            <Post 
            imagemUsuario="assets/img/meowed.svg"
            usuario="meowed"
            conteudo="assets/img/gato-telefone.svg"
            imagemCurtidas="assets/img/respondeai.svg"
            curtidor="respondeai"
            qtdCurtidas="101.523"
            />

            <Post 
            imagemUsuario="assets/img/barked.svg"
            usuario="barked"
            conteudo="assets/img/dog.svg"
            imagemCurtidas="assets/img/adorable_animals.svg"
            curtidor="adorable_animals"
            qtdCurtidas="99.159"
            />

        </div>
    )
}