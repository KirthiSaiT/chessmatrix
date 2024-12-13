import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export function Command({ children, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const commandRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commandRef.current && !commandRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={commandRef}
      className={`relative w-full max-w-md ${className}`}
    >
      {!isOpen ? (
        <div 
          onClick={() => setIsOpen(true)} 
          className="flex items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:border-blue-500 transition-colors"
        >
          <span className="text-grey-500">Search...</span>
        </div>
      ) : (
        <div className="w-full">
          {React.Children.map(children, child => 
            React.cloneElement(child, { onClose: () => setIsOpen(false) })
          )}
        </div>
      )}
    </div>
  );
}

export function CommandInput({ placeholder, onChange, onClose }) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when it appears
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    if (onChange) onChange('');
  };

  return (
    <div className="relative">
      <input 
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder || "Search..."}
        className="w-full px-4 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
        {value && (
          <button 
            onClick={handleClear} 
            className="mr-2 text-white-800 hover:text-white-800"
          >
            <X size={20} />
          </button>
        )}
        
      </div>
    </div>
  );
}

// Rest of the components remain the same as in the previous implementation
export function CommandList({ children, className }) {
  return (
    <div 
      className={ `dark bg-white shadow-lg rounded-md border border-blue-800 max-h-80 overflow-y-auto ${className}`}
    >
      {children}
    </div>
  );
}

export function CommandItem({ children, onSelect, disabled, className }) {
  return (
    <div 
      onClick={!disabled ? onSelect : undefined}
      className={`
        px-4 py-2 
        hover:bg-gray-800 
        cursor-pointer 
        transition-colors 
        ${disabled ? 'text-gray-800 cursor-not-allowed' : 'text-white-800'} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CommandEmpty({ children }) {
  return (
    <div className="px-4 py-2 text-center text-gray-800">
      {children || "No results found"}
    </div>
  );
}

export function CommandGroup({ heading, children }) {
  return (
    <div className="border-t border-gray-100">
      <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
        {heading}
      </div>
      {children}
    </div>
  );
}

export function CommandSeparator() {
  return <hr className="border-t border-gray-800" />;
}

export function CommandShortcut({ children }) {
  return (
    <span className="ml-auto text-xs text-gray-500 bg-gray-800 rounded px-2 py-1">
      {children}
    </span>
  );
}

// Example Usage
export function CommandSearchExample() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Simulated search logic
    const sampleData = [
      { id: 1, label: 'Profile', shortcut: '⌘P' },
      { id: 2, label: 'Mail', shortcut: '⌘M' },
      { id: 3, label: 'Settings', shortcut: '⌘S' }
    ];

    const results = sampleData.filter(item => 
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Command>
      <CommandInput 
        placeholder="Search commands..." 
        onChange={handleSearch}
      />
      <CommandList>
        {searchResults.length > 0 ? (
          <CommandGroup heading="Commands">
            {searchResults.map(item => (
              <CommandItem 
                key={item.id} 
                onSelect={() => console.log(`Selected ${item.label}`)}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ) : (
          <CommandEmpty>No commands found</CommandEmpty>
        )}
      </CommandList>
    </Command>
  );
}

export default CommandSearchExample;