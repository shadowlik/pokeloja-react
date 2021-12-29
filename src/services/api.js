import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

export const PokemonApi = {
    listPokemons: (options = {}) => {
        return axios.get('/pokemon', options);
    },
    getPokemonById: (id, options = {}) => {
        return axios.get(`/pokemon/${id}`, options);
    }
};
