import { useEffect, useState } from 'react'
import PokeCard from '../components/PokeCard'

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch((err) => {
        console.log('Unable to get poke-list', err)
      })
  }, [])

  return (
    <>
      <h1>Pókedex</h1>
      {pokemons.map((poke, index) => {
        return <PokeCard key={index} name={poke.name} />
      })}
    </>
  )
}