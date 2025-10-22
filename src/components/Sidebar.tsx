import React, { useEffect, useState } from 'react';

type MenuItem = {
    route: string;
    icon: React.ReactNode;
    text: string;
};

interface SidebarProps {
    menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [activeRoute, setActiveRoute] = useState<string>('oversikt');

  useEffect(() => {
    const updateRoute = () => {
      const hash = window.location.hash.slice(1);
      setActiveRoute(hash ? hash : 'oversikt');
    };

    window.addEventListener('hashchange', updateRoute);
    updateRoute();

    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  return (
    <nav className='h-full w-1/4 p-6  text-black border-r-[1px] border-stone-400'>
      <ul className="flex flex-col items-center justify-center gap-5 h-full">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 py-2 cursor-pointer rounded px-2 w-full 
              ${activeRoute === item.route ? 'bg-stone-300' : 'hover:bg-stone-300'}`}
          >
            <a href={`#${item.route}`} className="flex items-center space-x-2 w-full">
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
