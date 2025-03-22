"use client";

import React, { useState, useRef, useEffect } from 'react';

interface Option {
  value: string | number;
  label: string;
  category?: string | number;
  categoryLabel?: string;
}

interface GroupedOption {
  category: string | number;
  categoryLabel: string;
  options: Option[];
}

interface GroupedDropdownProps {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  name: string;
  grouped?: boolean;
}

const GroupedDropdown: React.FC<GroupedDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select',
  className = '',
  name,
  grouped = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionValue: string | number) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  // Group options by category if needed
  const groupedOptions: GroupedOption[] = grouped
    ? Object.entries(
        options.reduce<Record<string | number, { categoryLabel: string; options: Option[] }>>((acc, option) => {
          if (option.category !== undefined && option.categoryLabel) {
            const category = String(option.category);
            if (!acc[category]) {
              acc[category] = {
                categoryLabel: option.categoryLabel,
                options: []
              };
            }
            acc[category].options.push(option);
          }
          return acc;
        }, {})
      ).map(([category, { categoryLabel, options }]) => ({
        category,
        categoryLabel,
        options
      }))
    : [];

  // If no categories are defined, or grouped is false, use all options
  const allOptions = grouped
    ? options.filter(option => option.category === undefined || option.categoryLabel === undefined)
    : options;

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
          className="fixed z-50 bg-white border border-[#E6EAF2] rounded-md shadow-lg max-h-60 overflow-auto"
          style={{
            width: dropdownRef.current ? dropdownRef.current.offsetWidth : 'auto',
            top: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().bottom + window.scrollY : 0,
            left: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().left + window.scrollX : 0
          }}
        >
          {/* Ungrouped options first */}
          {allOptions.map((option) => (
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

          {/* Grouped options with category headers */}
          {grouped && groupedOptions.map((group) => (
            <div key={String(group.category)}>
              {/* Category header */}
              <div className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
                {group.categoryLabel}
              </div>
              {/* Category options */}
              {group.options.map((option) => (
                <div
                  key={String(option.value)}
                  className={`px-3 py-2 pl-5 cursor-pointer hover:bg-[#F9FAFB] ${
                    value === option.value ? 'bg-[#F9FAFB] text-[#0B498B]' : 'text-gray-900'
                  }`}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={String(value)} />
    </div>
  );
};

export default GroupedDropdown; 