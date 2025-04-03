"use client";

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Option {
  value: string | number;
  label: string;
}

export interface CustomDropdownProps {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  name: string;
  disabled?: boolean;
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
  name,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0, placement: 'bottom' as 'bottom' | 'top' });
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionValue: string | number) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  // Function to calculate dropdown position to ensure it's fully visible
  const calculateDropdownPosition = () => {
    if (!dropdownRef.current) return;
    
    const rect = dropdownRef.current.getBoundingClientRect();
    const dropdownHeight = Math.min(options.length * 40, 240); // Estimate height (item height * count)
    const dropdownWidth = rect.width;
    
    // Calculate available space
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const spaceRight = window.innerWidth - rect.left;
    
    // Determine if it fits below or if we need to place it above
    const placement = spaceBelow < dropdownHeight && spaceAbove > dropdownHeight ? 'top' : 'bottom';
    
    // Position data
    const left = rect.left;
    let top = placement === 'bottom' ? rect.bottom + 4 : rect.top - dropdownHeight - 4;
    
    // Adjust if it would overflow right edge
    const rightOverflow = (left + dropdownWidth) - window.innerWidth;
    const adjustedLeft = rightOverflow > 0 ? left - rightOverflow - 8 : left;
    
    // Adjust if it would overflow bottom edge when placed at bottom
    if (placement === 'bottom' && (top + dropdownHeight) > window.innerHeight) {
      top = window.innerHeight - dropdownHeight - 8;
    }
    
    // Adjust if it would overflow top edge when placed at top
    if (placement === 'top' && top < 0) {
      top = 8;
    }
    
    setDropdownPosition({
      top,
      left: adjustedLeft,
      width: dropdownWidth,
      placement
    });
  };

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownMenuRef.current && 
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate position when opening dropdown
  useEffect(() => {
    if (isOpen) {
      calculateDropdownPosition();
    }
  }, [isOpen]);

  // Recalculate position on window resize and scroll
  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        calculateDropdownPosition();
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        calculateDropdownPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  // Render dropdown menu via portal to avoid containment issues
  const renderDropdownMenu = () => {
    const menu = (
      <div 
        ref={dropdownMenuRef}
        className="fixed z-50 bg-white border border-[#E6EAF2] rounded-md shadow-lg max-h-60 overflow-auto"
        style={{
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`,
          width: `${dropdownPosition.width}px`
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
    );

    // Use portal to render dropdown to body to avoid containment issues
    return isMounted ? createPortal(menu, document.body) : null;
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className={`w-full px-3 py-2 border border-[#E6EAF2] rounded-md bg-white flex items-center justify-between ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={() => {
          if (!disabled) {
            // Calculate position before opening
            if (!isOpen) {
              calculateDropdownPosition();
            }
            setIsOpen(!isOpen);
          }
        }}
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

      {isOpen && renderDropdownMenu()}
      
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={String(value)} />
    </div>
  );
};

export default CustomDropdown; 