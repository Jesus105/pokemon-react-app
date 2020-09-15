import React, {useEffect, useState} from 'react';
import './styles/index.scss'
import Pokedex from './lib/Pokedex'
import PokemonBadge from './Components/PokemonBadge.jsx'
import Nav from './Components/nav.jsx'

function App() {
 
 const [ pokemons, setPokemons ] = useState([])
 
 useEffect(() => {
   Pokedex.getPokemonsList({ limit: 150 })
    .then((pokedexResponse) =>{
      setPokemons(pokedexResponse.results) 
    })
 }, [])
 
 return(
  <>
      <main>
          <Nav />

          <section className='results'>

            {
            pokemons.map((pokemon) => {
              
              return (<PokemonBadge
                name = {pokemon.name}
                url = {pokemon.url}
                key = {pokemon.name}
                 />)
            })
            }

          </section>
      </main>
    </>
  )
}


export default App;
