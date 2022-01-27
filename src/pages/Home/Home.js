import '../../assets/scss/Home.scss';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart, toggleCart } from '../../store';
import { useNavigate } from 'react-router-dom';

import { PokemonApi } from "../../services/api";

const Pokemon = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const name = props.name;
    const id = props.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const price = Math.floor(name.length / 2 * 100);

    const buy = (e) => {
        e.stopPropagation();

        dispatch(addToCart({
            id,
            name,
            imageUrl,
            price: price * 0.8,
        }))
        dispatch(toggleCart());
    }

    return (
        <div onClick={() => navigate(`/pokemon/${name}`)} className='poke-list-pokemon'>
            <img src={imageUrl} alt={name} />
            <h2 className='poke-name'>{name}</h2>
            <p className='poke-price-from'>R$ {price},00</p>
            <p className='poke-price-to'>R$ {price * 0.8},00</p>
            <button className='btn-buy' onClick={buy}>Capturar</button>
        </div>
    )
}

export const Home = (props) => {
    // Pokemons per page
    const limit = 20;
    
    const [state, setState] = useState({
        loading: true,
        pokemons: [],
        total: 0,
        currentPage: 0,
        totalPages: 0,
    })
    
    useEffect(() => {
        PokemonApi.listPokemons(state.currentPage * limit, limit).then(({data}) => {
            setState((prev) => ({
                ...prev,
                loading: false,
                total: data.count,
                totalPages: Math.ceil(data.count / limit),
                pokemons: [...prev.pokemons, ...data.results.map((pokemon, key) => <Pokemon key={key + (prev.pokemons.length+1)} name={pokemon.name} url={pokemon.url} />)],
            }))
        });

    }, [state.currentPage]);

    const loadMore = () => {
        let page = state.currentPage;

        if ((page + 1) >= state.totalPages) return;
        
        page +=1;

        setState((prev) => ({
            ...prev,
            currentPage: page,
        }));
    };

    return (
        <div className="home">
            <div className="poke-list">
                {state.pokemons}
            </div>
            <div className='poke-list-pagination'>
                {state.currentPage < state.totalPages &&<button onClick={loadMore}>Carregar mais</button>}
            </div>
        </div>
    );
}