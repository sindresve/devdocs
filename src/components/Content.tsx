import React, { useState, useEffect } from 'react';
import { contentPages as IRCServerContent } from '../content/pages/IRCServerContent';

const Content: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('oversikt');

  useEffect(() => {
    const updateSection = () => {
      const hash = window.location.hash.slice(1);
      setActiveSection(hash ? hash : 'oversikt');
    };

    window.addEventListener('hashchange', updateSection);
    updateSection();

    return () => window.removeEventListener('hashchange', updateSection);
  }, []);

  const getContentMapping = () => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('irc-server')) {
      return IRCServerContent;
    }
    
    return IRCServerContent;
  };

  const contentMapping = getContentMapping();
  const ActiveComponent = contentMapping[activeSection] || contentMapping['oversikt'];

  return (
    <div className="w-1/2 h-full">
      <ActiveComponent />
    </div>
  );
};

export default Content;
