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
    return null;
  }

  return (
    <>
      <div className="absolute w-3/6 h-24 top-0 left-[-2px] bg-neutral-400 -z-10" />
      <div className="absolute w-3/6 h-24 top-0 right-[-2px] bg-neutral-400 -z-10" />
      <div className="relative px-4 flex justify-center w-[85%] mx-auto rounded-t-4xl bg-white">
        <div className="absolute w-24 h-24 top-[1.9rem] left-[-2.3rem] bg-white rotate-[43deg] z-[-5]" />
        <div className="absolute w-24 h-24 top-[1.9rem] right-[-2.3rem] bg-white rotate-[47deg] z-[-5]" />
        <h1 className="text-4xl font-light py-4 mr-4">
          {capitalize(data.name)}
        </h1>
        <h1 className="text-4xl text-neutral-400 font-light py-4">
          N.º{zeroesAdder(data.id)}
        </h1>
      </div>
      <div className="px-4 flex justify-center w-full mx-auto pt-16 rounded-t-4xl bg-white">
        <PokemonDetail pokemon={data} />
      </div>
    </>
  );
}

export default Pokemon;