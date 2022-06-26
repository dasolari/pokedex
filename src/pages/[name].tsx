import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { usePokemon } from '../services/pokemon';
import zeroesAdder from '../utils/general/zeroesAdder';
import capitalize from '../utils/general/capitalize';
import PokemonDetail from '../components/Home/Pokemon';

const Pokemon: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const { data, isLoading } = usePokemon({ name: name as string });

  if (!data || isLoading) {
    return <h1>loading</h1>
  }

  return (
    <>
      <div className="px-4 flex justify-center w-full mx-auto bg-white">
        <div className="absolute w-3/6 h-24 top-0 left-[-2px] bg-zinc-400 -z-10" />
        <div className="absolute w-3/6 h-24 top-0 right-[-2px] bg-zinc-400 -z-10" />
        <h1 className="text-4xl font-light py-4 mr-4">
          {capitalize(data.name)}
        </h1>
        <h1 className="text-4xl text-slate-400 font-light py-4">
          N.º{zeroesAdder(data.id)}
        </h1>
      </div>
      <div className="px-4 flex justify-center w-full mx-auto pt-16 bg-white">
        <PokemonDetail pokemon={data} />
      </div>
    </>
  );
}

export default Pokemon;