import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log('Unable to find pokemon', err))
  }, [props.name])

  return (
    <Link to={'/pokemon'}>
      <img
        src={pokemon.sprites?.other['official-artwork'].front_default}
        alt=''
      />
      <h1>{pokemon.name}</h1>
    </Link>
  )
}
