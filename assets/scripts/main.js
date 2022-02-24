const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let dados = [];

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value;
    const filteredCharacters = dados.filter(characters => {
        return (
            characters.name.includes(searchString) || 
            characters.house.includes(searchString)
        );
    });
    charactersPrint(filteredCharacters);
})

const loadCharacters = async () => {
    try {
        const url = await fetch('https://hp-api.herokuapp.com/api/characters');
        dados = await url.json();
        charactersPrint(dados);
        console.log(dados);
    } catch {
        console.log(err);
    }
}

const charactersPrint = (characters) => {
    const htmlString = characters
        .map((characters) => {
            return `
            <li class="character">
                <div class="text">
                    <h2>${characters.name}</h2>
                    <p>Casa: ${characters.house}</p>
                </div>
                <img src="${characters.image}" onerror="this.src = 'assets/img/hogwarts.jpg'">
            </li>
        `;
        })
        .join('');
        charactersList.innerHTML = htmlString;
}

    loadCharacters();
