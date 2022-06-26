import { ReactNode } from 'react';
import type { NextPage } from 'next';

interface Props {
  featureName: string;
  featureValue: ReactNode;
}

const Feature: NextPage<Props> = (props: Props) => {
  const { featureName, featureValue } = props;

  return (
    <div className="flex flex-col">
      <p className="w-full mb-2 text-white text-xl font-light">
        {featureName}
      </p>
      <div className="w-full text-black text-xl font-light">
        {featureValue}
      </div>
    </div>
  );
}

export default Feature;