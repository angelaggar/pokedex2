import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PokeDetails() {
  const params = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log('Unable to get information', err))
  }, [params.name])

  return (
    <article className='bg-slate-500/10 sm:min-w-xl sm: max-w-2xl'>
      <h1 className='text-center text-3xl'>
        {pokemon.order}. {pokemon.name}
      </h1>
      <div className='md:flex'>
        <div>
          <img
            src={pokemon.sprites?.other['official-artwork'].front_default}
            alt=''
            className='object-contain object-center'
          />
        </div>
        <div>
          <p>Description: </p>
          <div className='grid grid-cols-2 gap-3'>
            <div className='grid gap-2 items-start'>
              <p>Altura: </p>
              <span>0,{pokemon.height} m</span>
              <p>Peso: </p>
              <span>{pokemon.weight / 10} kg</span>
            </div>
            <div className='grid gap-2 items-start'>
              <p>Tipo:</p>
              <span className='flex'>
                {pokemon.types?.map((i, index) => (
                  <p key={index}> {i.type.name}/ </p>
                ))}
              </span>
              <p>Habilidad:</p>
              <span className='flex'>
                {pokemon.abilities?.map((i, index) => (
                  <p key={index}> {i.ability.name}/ </p>
                ))}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Stats:</p>
            <p>
              Exp. Base:
              <span>{pokemon.base_experience}</span>
            </p>
          </div>
          <div className='grid grid-cols-4'>
            {pokemon.stats?.map((i, index) => (
              <>
                <p key={index}> {i.stat.name}:</p>
                <span>{i.base_stat}</span>
              </>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
