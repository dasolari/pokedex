import type { NextPage } from 'next';
import Pokemons from '../components/Home/Pokemons';

const Home: NextPage = () => {
  return (
    <div className="w-full px-4 bg-white">
      <h1 className="text-3xl text-slate-400 font-light py-4">
        Pokédex
      </h1>
      <Pokemons />
    </div>
  )
}

export default Home
