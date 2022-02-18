const preencherFormulario = (endereco) => {
    document.getEle
}

const pesquisarPersonagem = async() => {
    const nome = document.getElementById('pesquisar').value

    const url = 'http://hp-api.herokuapp.com/api/characters'
    const dados = await fetch(url)
    const endereco = await dados.json()
    preencherFormulario(endereco)
}

function start() {
    pesquisarPersonagem()
}