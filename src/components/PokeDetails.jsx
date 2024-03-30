import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PokeDetails() {
  const params = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
        console.log(data)
      })
      .then()
      .catch((err) => console.log('Unable to get information', err))
  }, [params.name])

  return (
    <div className='flex justify-center p-10  text-white font-semibold'>
      <article className='bg-gradient-to-tl from-black to-red-700  border-8 border-black w-xl capitalize p-4 grid gap-3'>
        <h1 className='text-3xl text-center font-bold bg-black p-3 rounded-2xl'>
          {pokemon?.order?.toString()?.padStart(4, '0')}. {pokemon.name}
        </h1>
        <div className='bg-[url("https://img.freepik.com/vector-premium/elegante-fondo-blanco-lineas-brillantes_545823-499.jpg?w=740")] rounded-xl flex justify-center'>
          <img
            src={pokemon.sprites?.other['official-artwork'].front_default}
            alt=''
            className='w-64'
          />
        </div>
        <div className='bg-black p-3 rounded-xl grid gap-2'>
          <p className='text-lg'>Description: </p>
          <div className='grid grid-cols-2 gap-3'>
            <div className='grid gap-2 items-start py-3'>
              <p className='text-red-600'>Altura: </p>
              <span>{pokemon.height / 10} m</span>
              <p className='text-red-600'>Peso: </p>
              <span>{pokemon.weight / 10} kg</span>
            </div>
            <div className='grid gap-2 items-start py-3'>
              <p className='text-red-600'>Tipo:</p>
              <span className='flex'>
                {pokemon.types?.map((i, index) => (
                  <p key={`type-${index}`} className='pr-3'>
                    {' '}
                    {i.type.name}{' '}
                  </p>
                ))}
              </span>
              <p className='text-red-600'>Habilidad:</p>
              <span className='flex'>
                {pokemon.abilities?.map((i, index) => (
                  <p key={`ability-${index}`} className='pr-3'>
                    {i.ability?.name}
                  </p>
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-black p-3 rounded-xl gap-2'>
          <p className='text-lg'>Stats:</p>
          <div>
            <div className='grid grid-cols-2 gap-3'>
              <p className='text-red-600'>Exp. Base:</p>
              <p>{pokemon.base_experience} points</p>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              {pokemon.stats?.map((i, index) => (
                <div key={`stat-${index}`}>
                  <p className='text-red-600'> {i.stat.name}:</p>
                  <span>{i.base_stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
