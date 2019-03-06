export default {
  async getPokemonsFromApi() {
    try {
      let response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/',
      );
      let pokemon = await response.json();
      return pokemon.results;
    } catch (error) {
      console.error(error);
    }
  }
}