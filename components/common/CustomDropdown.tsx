"use client";

import React, { useState, useRef, useEffect } from 'react';

interface Option {
  value: string | number;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  name: string;
}

/**
 * A fully customizable dropdown component that matches the Figma design
 * @param {Object} props - Component properties
 * @returns {React.ReactElement} Rendered dropdown component
 */
const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select',
  className = '',
  name
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionValue: string | number) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className="w-full px-3 py-2 border border-[#E6EAF2] rounded-md bg-white flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${!selectedOption ? 'text-[#8A8A8A]' : 'text-gray-900'}`}>
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
          className="fixed z-50 bg-white border border-[#E6EAF2] rounded-md shadow-lg max-h-60 overflow-auto"
          style={{
            width: dropdownRef.current ? dropdownRef.current.offsetWidth : 'auto',
            top: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().bottom + window.scrollY : 0,
            left: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().left + window.scrollX : 0
          }}
        >
          {options.map((option) => (
            <div
              key={String(option.value)}
              className={`px-3 py-2 cursor-pointer hover:bg-[#F9FAFB] ${
                value === option.value ? 'bg-[#F9FAFB] text-[#0B498B]' : 'text-gray-900'
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={String(value)} />
    </div>
  );
};

export default CustomDropdown; 