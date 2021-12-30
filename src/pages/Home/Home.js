import '../../assets/scss/Home.scss';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { toggleCart } from '../../store';


import { PokemonApi } from "../../services/api";

const Pokemon = (props) => {
    const dispatch = useDispatch();

    const name = props.name;
    const id = props.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    const preco = Math.floor(Math.random() * 100);

    return (
        <div className='poke-list-pokemon'>
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{preco}</p>
            <button onClick={() => dispatch(toggleCart())}>Comprar</button>
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