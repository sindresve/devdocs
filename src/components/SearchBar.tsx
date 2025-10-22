import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchIndex, PageIndex } from '../content/searchIndex';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PageIndex[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const lowerTerm = searchTerm.toLowerCase();
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerTerm) ||
      item.content.toLowerCase().includes(lowerTerm)
    );
    
    setResults(filtered);
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-xl" ref={searchRef}>
      <input
        type="text"
        placeholder="Søk..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 bg-stone-800"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
      />

      {isOpen && results.length > 0 && (
        <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-50">
          {results.map((result) => (
            <div
              key={result.path}
              className="p-4 hover:bg-gray-200 cursor-pointer transition-colors"
              onClick={() => {
                navigate(result.path);
                setIsOpen(false);
                setQuery('');
              }}
            >
              <div className="font-medium text-black">{result.title}</div>
              <div className="text-sm text-gray-900 truncate">
                {result.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;