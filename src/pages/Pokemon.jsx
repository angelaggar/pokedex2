import { useEffect, useState } from 'react'
import PokeCard from '../components/PokeCard'

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [displayCards, setDisplayCards] = useState([])
  const [selectedPage, setSelectedPage] = useState(1)

  const itemsPerPage = 50
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results)
        console.log(data.results)
        setTotalPages(Math.ceil(data.results.length / itemsPerPage))
      })
      .catch((err) => {
        console.log('Unable to get poke-list', err)
      })
  }, [])

  useEffect(() => {
    setDisplayCards(pokemons.slice(startIndex, endIndex))
  }, [pokemons, startIndex, endIndex])

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
      setSelectedPage((prevPage) => prevPage + 1)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
      setSelectedPage((prevPage) => prevPage - 1)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const goToPage = (page) => {
    setCurrentPage(page)
    setSelectedPage(page)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='p-6 flex flex-col gap-4'>
      <div className='flex justify-center space-x-4 text-lg'>
        <button
          className='hover:bg-blue-500 px-2 rounded-full hover:text-white bg-gray-300 hover:px-2'
          onClick={prevPage}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={
                selectedPage === page
                  ? 'bg-blue-500 px-1 rounded-full text-white'
                  : 'bg-gray-300 px-1'
              }
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          )
        )}
        <button
          className='hover:bg-blue-500 px-2 rounded-full hover:text-white bg-gray-300 hover:px-2'
          onClick={nextPage}
        >
          Siguiente
        </button>
      </div>
      <div className='grid md:grid-cols-5 gap-6'>
        {displayCards.map((poke, index) => {
          return <PokeCard key={index} name={poke.name} />
        })}
      </div>
      <div className='flex justify-center space-x-4 text-lg'>
        <button
          className='hover:bg-blue-500 px-2 rounded-full hover:text-white bg-gray-300 hover:px-2'
          onClick={prevPage}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={
                selectedPage === page
                  ? 'bg-blue-500 px-1 rounded-full text-white'
                  : 'bg-gray-300 px-1'
              }
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          )
        )}
        <button
          className='hover:bg-blue-500 px-2 rounded-full hover:text-white bg-gray-300 hover:px-2'
          onClick={nextPage}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
