import React, { useState, useRef, useEffect } from 'react';
import { USER_STATUS, USER_STATUS_REVERSE } from '../../constants/userConstants';
import DropdownArrow from './DropdownArrow';

interface StatusDropdownProps {
  currentStatus: USER_STATUS;
  onChange: (newStatus: USER_STATUS) => void;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({ 
  currentStatus, 
  onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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

  const statusOptions = [
    { 
      value: USER_STATUS.ACTIVE, 
      label: USER_STATUS_REVERSE[USER_STATUS.ACTIVE],
      className: 'text-green-600 bg-green-100'
    },
    { 
      value: USER_STATUS.INACTIVE, 
      label: USER_STATUS_REVERSE[USER_STATUS.INACTIVE],
      className: 'text-red-600 bg-red-100'
    }
  ];

  const currentStatusOption = statusOptions.find(opt => opt.value === currentStatus);

  const handleStatusChange = (newStatus: USER_STATUS) => {
    onChange(newStatus);
    setIsOpen(false);
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative inline-block"
    >
      <div 
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          pl-3 pr-8 py-1 
          rounded-full 
          text-sm 
          font-medium 
          cursor-pointer 
          relative
          whitespace-nowrap
          ${currentStatusOption?.className}
        `}
      >
        {currentStatusOption?.label}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <DropdownArrow />
        </div>
      </div>
      {isOpen && (
        <div 
          style={{ 
            width: buttonRef.current ? `${buttonRef.current.offsetWidth}px` : 'auto' 
          }}
          className="
            absolute 
            z-10 
            bg-white 
            border 
            border-[#E6EAF2] 
            rounded-lg 
            shadow-lg 
            mt-1
            overflow-hidden
          "
        >
          {statusOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleStatusChange(option.value)}
              className={`
                px-3 
                py-2 
                cursor-pointer 
                hover:bg-[#F5F5F5]
                transition-colors
                duration-200
                ${option.value === currentStatus 
                  ? 'bg-[#0B498B]/5 text-[#0B498B]' 
                  : 'text-[#1C1C1C]'}
              `}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown; 