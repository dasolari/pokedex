import { ReactNode } from 'react';
import type { NextPage } from 'next';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = (props: Props) => {
  const { children } = props;

  return (
    <div className="absolute w-full min-h-screen bg-main-background bg-repeat -z-20">
      <div className="sticky w-[3.5rem] h-40 bg-black left-0 top-1/4 clip-external">
        <div className="w-full h-full bg-green-to-gray clip-internal">
          <div className="h-full flex flex-col justify-evenly">
            <div className="w-full text-center">
              <FaUserCircle size={25} className="w-full text-center text-white" />
              <p className="text-white leading-4 text-sm">Iniciar Sesión</p>
            </div>
            <div className="w-full text-center">
              <FaSearch size={25} className="w-full text-center text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto my-8">
        {children}
      </div>
    </div>
  );
}

export default Layout;
