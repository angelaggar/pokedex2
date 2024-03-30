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
    <Link to={`/pokemon/${pokemon.name}`}>
      <article className='bg-gradient-to-tl from-black to-red-600 box-border border-black border-4 p-3 rounded-md grid gap-2 hover:ring-black hover:ring-4 hover:ring-offset-1'>
        <div className='bg-[url("https://img.freepik.com/vector-premium/elegante-fondo-blanco-lineas-brillantes_545823-499.jpg?w=740")] rounded-xl flex justify-center p-4'>
          <img
            src={pokemon.sprites?.other['official-artwork'].front_default}
            alt=''
            className='backdrop-filter-none hover:scale-110 hover:-rotate-12 hover:rotate-10 '
          />
        </div>
        <h1 className='capitalize text-center text-white font-bold bg-black px-2 rounded-2xl'>
          {pokemon?.order?.toString()?.padStart(4, '0')}. {pokemon.name}
        </h1>
      </article>
    </Link>
  )
}
