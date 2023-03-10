const { listarPokemons, detalharPokemon } = require("utils-playground")

async function listagemPokemons(req, res) {
    const lista = await listarPokemons();

    res.status(200).json(lista.results)
}

async function obterPokemon(req, res) {
    const { idOuNome } = req.params
    console.log(id);
    const pokemon = await detalharPokemon(idOuNome);


    const objetoPokemon = {
        id: idOuNome,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species
    }

    res.status(200).json(objetoPokemon);
}

module.exports = {
    listagemPokemons,
    obterPokemon,
}