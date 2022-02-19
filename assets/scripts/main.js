const charactersList = document.getElementById("charactersList");

const loadCharacters = async () => {
    try {
        const url = await fetch('http://hp-api.herokuapp.com/api/characters');
        const dados = await url.json();
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
                    <p>Data de aniversário: ${characters.dateOfBirth}</p>
                    <p>Casa: ${characters.house}</p>
                </div>
                <img src="${characters.image}">
            </li>
        `;
        })
        .join('');
        charactersList.innerHTML = htmlString;
    }

    loadCharacters();