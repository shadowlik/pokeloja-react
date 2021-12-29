import '../../assets/scss/Home.scss';
import { useEffect, useState } from "react";


import { PokemonApi } from "../../services/api";

const Pokemon = (props) => {
    const name = props.name;
    const id = props.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    const preco = Math.floor(Math.random() * 100);

    return (
        <div className='poke-list-pokemon'>
            <img src={imageUrl} />
            <h2>{name}</h2>
            <p>{preco}</p>
        </div>
    )
}

export const Home = (props) => {


    const [state, setState] = useState({
        loading: true,
        pokemons: [],
    })
    
    useEffect(() => {
        PokemonApi.listPokemons().then(({data}) => {
            setState({
                loading: false,
                pokemons: data.results.map((pokemon, key) => <Pokemon key={key} name={pokemon.name} url={pokemon.url} />),
            })
        })
    }, [])

    return (
        <div className="container home">
            <div className="poke-list">
                {state.pokemons}
            </div>
        </div>
    );
}