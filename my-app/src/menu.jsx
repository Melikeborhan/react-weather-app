import React from 'react';
// Doğru ikonu içe aktarın

const Menu = () => {
  return (
    <div className="  text-xl font-extrabold ...">

      <nav className="shadow-2xl ... relative flex flex-wrap items-center justify-between px-2 py-8 bg-gradient-to-r from-cyan-300 to-blue-400">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">


          {/* <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button> */}

          <div className="group relative overflow-hidden: lg:flex flex-grow items-center" id="example-navbar-warning" >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">HOME</a>
              </li>

            </ul>
          </div>
        </div>

      </nav>

    </div>
  );
}

export default Menu;
