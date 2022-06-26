import type { NextPage } from 'next';
import CardSkeleton from '../../shared/CardSkeleton';

interface Props {
  numberOfLoaders: number;
}

const CardsLoader: NextPage<Props> = (props: Props) => {
  const { numberOfLoaders } = props;

  return (
    <>
      {Array.from(Array(numberOfLoaders).keys()).map((elem) => (
        <div key={elem} className="shadow p-2 w-52 mx-auto my-4 rounded-md">
          <CardSkeleton />
        </div>
      ))}
    </>
  );
}

export default CardsLoader;
