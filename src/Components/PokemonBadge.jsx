import React, {useEffect, useState} from 'react';
import Pokedex from '../lib/Pokedex'
import PokemonModal from './PokemonModal'

function PokemonBadge({ name = '', url = '' }) {
    
    const [pokemon, setPokemon] = useState({})
    const [image, setImage] = useState('https://vgboxart.com/resources/render/13697_pokeball-prev.png')
    const [ isSelected, setIsSelected ] = useState(false)

    useEffect(() =>{
        Pokedex.getPokemonByName(name)
        .then((pokedexRespone) =>{
            setImage(pokedexRespone.sprites.front_default)
            setPokemon(pokedexRespone)
        })
    }, [])

    return(
        <>
            {
                isSelected &&
                <PokemonModal 
                pokemon = {pokemon}
                onClose ={ () => setIsSelected(false) }
                />
            }

            <article 
            className="pokemon-card"
            onClick = {() => setIsSelected(true)}
            >
                <header>
                    <img src={image}
                    alt={name} />
                </header>
                <footer>
                    {name}
                </footer>
            </article>
        </>
    )

}

export default PokemonBadge;