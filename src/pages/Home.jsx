import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <main className='bg-cover bg-[url("https://i.pinimg.com/564x/a7/98/77/a79877fdb26b3a8af2a1a42605c6ce38.jpg")] min-h-screen'>
      <header className='w-full p-4 bg-red-600 flex justify-center'>
        <Link to={'/'}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png'
            alt=''
            className='hover:scale-150'
          />
        </Link>
      </header>
      <nav className='bg-blue-700  flex justify-around text-white text-xl text-center font-bold items-center'>
        <Link className='hover:bg-blue-400 w-full h-full p-3' to={'/'}>Home</Link>
        <Link className='hover:bg-blue-400 w-full h-full p-3' to={'/pokemon'}>Pokedex
        </Link>
        <a className='hover:bg-blue-400 w-full h-full p-3' href='https://community.pokemon.com/es-es/'>Comunidad Pokemon</a>
        <a className='hover:bg-blue-400 w-full h-full p-3' href='https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Wiki'>
          Pokemon Wiki
        </a>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  )
}
