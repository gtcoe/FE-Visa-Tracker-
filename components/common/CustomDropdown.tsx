import React, { useState, useRef, useEffect } from 'react';
import DropdownArrow from './DropdownArrow';

// Define types for dropdown options
export type DropdownOption = {
  value: string;
  label: string;
  className?: string;
};

// Define props type for CustomDropdown
export type CustomDropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  placeholder?: string;
  placeholderColor?: string;
  optionColor?: string;
  className?: string;
  variant?: 'default' | 'status';
};

/**
 * A fully customizable dropdown component
 * @param {Object} props - Component properties
 * @returns {React.ReactElement} Rendered dropdown component
 */
const CustomDropdown: React.FC<CustomDropdownProps> = ({ 
  options, 
  value, 
  onChange, 
  name,
  placeholder = 'Select',
  placeholderColor = '#6A6A6A',
  optionColor = '#1C1C1C',
  className = '',
  variant = 'default'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value) || { 
    label: placeholder, 
    value: '' 
  };

  return (
    <div 
      ref={dropdownRef}
      className={`relative w-full ${className}`} 
      role="combobox" 
      aria-expanded={isOpen}
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full 
          px-3 
          py-2 
          border 
          border-[#E6EAF2] 
          rounded-[8px] 
          text-sm 
          cursor-pointer 
          flex 
          items-center 
          justify-between
          transition-all 
          duration-200 
          ease-in-out
          ${isOpen 
            ? 'ring-2 ring-[#0B498B]/20 shadow-sm' 
            : 'hover:border-[#0B498B]/30 hover:shadow-xs'
          }
        `}
        aria-haspopup="listbox"
      >
        <span 
          className={`
            flex-grow 
            truncate 
            ${value === '' ? 'text-[#6A6A6A]' : 'text-[#1C1C1C]'}
          `}
          style={{ 
            color: value === '' ? placeholderColor : optionColor 
          }}
        >
          {selectedOption.label}
        </span>
        <div 
          className={`
            ml-2 
            transition-transform 
            duration-200 
            ease-in-out 
            ${isOpen ? 'rotate-180' : ''}
          `}
        >
          <DropdownArrow />
        </div>
      </div>
      {isOpen && (
        <ul 
          className="
            absolute 
            z-50 
            w-full 
            border 
            border-[#E6EAF2] 
            rounded-[8px] 
            mt-1 
            bg-white 
            shadow-lg 
            max-h-60 
            overflow-auto
            py-1
          "
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`
                px-3 
                py-2 
                cursor-pointer 
                transition-colors 
                duration-150 
                ease-in-out
                ${option.value === value 
                  ? 'bg-[#0B498B]/5 text-[#0B498B]' 
                  : 'hover:bg-[#F5F5F5] text-[#1C1C1C]'}
              `}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown; 