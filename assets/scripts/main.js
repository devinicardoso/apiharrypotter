// const preencherFormulario = (endereco) => {
//     document.getElementById('nome').value = endereco.name
// }

const pesquisarPersonagem = async () => {
    // const nome = document.getElementById('pesquisar').value

    const url = 'http://hp-api.herokuapp.com/api/characters'
    const dados = await fetch(url)
    const endereco = await dados.json()
    // preencherFormulario(endereco)
    console.log(endereco)
}

function start() {
    pesquisarPersonagem()
}