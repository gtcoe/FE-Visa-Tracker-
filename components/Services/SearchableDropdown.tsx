"use client";

import React, { useState, useRef, useEffect } from 'react';

interface Option {
  value: string | number;
  label: string;
}

interface SearchableDropdownProps {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  name: string;
  searchPlaceholder?: string;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select',
  className = '',
  name,
  searchPlaceholder = 'Search...'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownListRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionValue: string | number) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  const selectedOption = options.find(option => option.value === value);

  // Filter options based on search term
  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate dropdown position when toggling
  const calculatePosition = () => {
    if (!dropdownRef.current) return;
    
    const rect = dropdownRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    
    // Calculate available space below and above
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    
    // Determine if dropdown should open upward or downward
    const shouldOpenUpward = spaceBelow < 260 && spaceAbove > spaceBelow;
    
    setPosition({
      top: shouldOpenUpward 
        ? rect.top + scrollTop - 260 // Open upward
        : rect.bottom + scrollTop, // Open downward
      left: rect.left + scrollLeft,
      width: rect.width
    });
  };

  // Toggle dropdown and calculate position
  const toggleDropdown = () => {
    if (!isOpen) {
      calculatePosition();
    }
    setIsOpen(!isOpen);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownListRef.current &&
        !dropdownListRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Handle window resize to recalculate position
    const handleResize = () => {
      if (isOpen) {
        calculatePosition();
      }
    };

    // Handle scroll to reposition dropdown
    const handleScroll = () => {
      if (isOpen) {
        calculatePosition();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className="w-full px-3 py-2 border border-[#E6EAF2] rounded-md bg-white flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className={`${!selectedOption ? 'text-gray-400' : 'text-gray-900'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      {isOpen && (
        <div 
          ref={dropdownListRef}
          className="fixed z-50 bg-white border border-[#E6EAF2] rounded-md shadow-lg max-h-60 overflow-auto"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: `${position.width}px`,
          }}
        >
          {/* Search input */}
          <div className="sticky top-0 bg-white p-2 border-b border-[#E6EAF2]">
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full px-3 py-2 border border-[#E6EAF2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] placeholder-gray-400 text-gray-900"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Options */}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={String(option.value)}
                className={`px-3 py-2 cursor-pointer hover:bg-[#F9FAFB] ${
                  value === option.value ? 'bg-[#F9FAFB] text-[#0B498B]' : 'text-gray-900'
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
      
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={String(value)} />
    </div>
  );
};

export default SearchableDropdown; 