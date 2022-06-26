import type { NextPage } from 'next';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

const LoginButton: NextPage = () => {
  return (
    <div className="fixed w-[3.5rem] h-40 bg-black left-0 top-1/4 clip-external">
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
  )
}

export default LoginButton;
