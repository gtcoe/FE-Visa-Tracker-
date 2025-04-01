import React, { ChangeEvent, FormEvent } from 'react';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
  onSearch
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-center">
        <input
          type="text"
          className="w-full border border-[#E6EAF2] rounded-[4px] pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B498B] focus:border-[#0B498B]"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" 
              stroke="#696969" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M14 14L11.1 11.1" 
              stroke="#696969" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button
          type="submit"
          className="absolute right-3 px-4 py-1 bg-[#0B498B] text-white rounded-[4px] text-sm"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar; 