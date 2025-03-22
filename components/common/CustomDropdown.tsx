import React, { useState, useRef, useEffect } from 'react';

export interface DropdownOption {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

/**
 * A fully customizable dropdown component that matches the Figma design
 * @param {Object} props - Component properties
 * @returns {React.ReactElement} Rendered dropdown component
 */
const CustomDropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select",
  className = "",
  disabled = false,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find the selected option label
  const selectedOption = options.find((option) => option.value === value);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  // Handle option selection
  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative w-full ${className}`}
    >
      <div
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full h-10 px-3 text-left text-sm 
          border border-[#E6EAF2] rounded 
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white cursor-pointer hover:border-[#0B498B]/30"}`}
      >
        <span className={value ? "text-[#1C1C1C]" : "text-[#A0A0A0]"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
        >
          <path 
            d="M4 6L8 10L12 6" 
            stroke="#A0A0A0" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <div 
          className="fixed z-50 mt-1 bg-white border border-[#E6EAF2] rounded shadow-sm py-1 max-h-60 overflow-auto"
          style={{
            width: dropdownRef.current ? dropdownRef.current.offsetWidth : 'auto',
            top: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().bottom + window.scrollY : 0,
            left: dropdownRef.current ? dropdownRef.current.getBoundingClientRect().left + window.scrollX : 0
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#F5F7FA] transition-colors
                ${option.value === value ? "text-[#0B498B] font-medium" : "text-[#1C1C1C]"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown; 