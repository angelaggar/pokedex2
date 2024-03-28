import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <header>Pokedex</header>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/pokemon'}>Pokemons</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  )
}
