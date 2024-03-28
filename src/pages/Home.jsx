import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <main className='bg-cover bg-[url("https://i.pinimg.com/564x/a7/98/77/a79877fdb26b3a8af2a1a42605c6ce38.jpg")]'>
      <header className='w-full p-4 bg-red-600 flex justify-center'>
        <Link to={'/'}><img
          src={
            'https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
          }
          alt=''
          className='hover:scale-150'
        /></Link>
        
      </header>
      <nav className='bg-blue-700 p-3'>
        <Link to={'/'}>Home</Link>
        <Link to={'/pokemon'}>Pokemons</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  )
}
