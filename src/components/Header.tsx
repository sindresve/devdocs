import React from 'react';
import SearchBar from './SearchBar';
import { AiOutlineSearch } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <header className="w-screen border-b-[1px] h-20 flex justify-center items-center">
      <div className='container-2xl mx-auto flex h-16 items-center px-4 w-full'>
        <a className='w-[200xp] flex flex-row items-center justify-center' href='/'>
          <img src="/coffee-cup.png" className='w-20'/>
          <h2 className='wikipedia-font text-2xl'>Glemmen DevDocs</h2>
        </a>
        <div className='hidden flex-1 md:flex md:justify-center md:items-center md:gap-3'>
          <SearchBar />
          <AiOutlineSearch className='size-7 text-stone-400'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
