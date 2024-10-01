const appURL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=50";
let container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";

fetch(appURL)
    .then((res) => res.json())
    .then((data) => {

        const pokemonList = data.results;
        pokemonList.forEach(pokemon => {

            fetch(pokemon.url)
                .then(res => res.json())
                .then(pokemonDetails => {

                    let box = document.createElement("div");
                    box.setAttribute("id", "box");
                    box.style.border = "solid black 1px";
                    box.style.margin = "20px";
                    box.style.padding = "20px";
                    box.style.width = "350px";
                    container.appendChild(box);


                    let pokemonName = document.createElement("h2");
                    pokemonName.innerHTML = pokemonDetails.name;
                    box.appendChild(pokemonName);


                    let pokemonImage = document.createElement("img");
                    pokemonImage.src = pokemonDetails.sprites.front_default;
                    pokemonImage.style.width = "150px";
                    box.appendChild(pokemonImage);


                    let pokemonAbilities = document.createElement("p");
                    pokemonAbilities.innerHTML = "Abilities: " + pokemonDetails.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ");
                    box.appendChild(pokemonAbilities);
                });
        });
    })
    .catch(error => console.error('Error fetching data:', error));
