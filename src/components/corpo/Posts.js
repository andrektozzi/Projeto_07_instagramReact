import Post from "./Post"

export default function Posts () {

    const infoPosts = [
        {imagemUsuario: 'assets/img/meowed.svg', usuario: 'meowed', conteudo: 'assets/img/gato-telefone.svg', imagemCurtidas: 'assets/img/respondeai.svg', curtidor: 'respondeai', qtdCurtidas: '101.523'},
        {imagemUsuario: 'assets/img/barked.svg', usuario: 'barked', conteudo: 'assets/img/dog.svg', imagemCurtidas: 'assets/img/adorable_animals.svg', curtidor: 'adorable_animals', qtdCurtidas: '99.159'}
    ]
    return (
        <div class="posts">

            {infoPosts.map(item => {
                return <Post imagemUsuario={item.imagemUsuario}
                usuario={item.usuario}
                conteudo={item.conteudo}
                imagemCurtidas={item.imagemCurtidas}
                curtidor={item.curtidor}
                qtdCurtidas={item.qtdCurtidas} />
            })}
            
        </div>
    )
}