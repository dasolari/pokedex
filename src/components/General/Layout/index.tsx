import { ReactNode } from 'react';
import type { NextPage } from 'next';
import LoginButton from './LoginButton';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = (props: Props) => {
  const { children } = props;

  return (
    <div className="absolute w-full min-h-screen bg-main-background bg-repeat -z-20">
      <LoginButton />
      <div className="w-[70%] mx-auto my-8">
        {children}
      </div>
    </div>
  );
}

export default Layout;
