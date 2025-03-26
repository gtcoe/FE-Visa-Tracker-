"use client";

import React, { memo, useState } from 'react';
import { FORM_MODE } from '@component/constants/formConstants';

interface DateInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
  readOnly?: boolean;
  formMode?: FORM_MODE;
  placeholder?: string;
}

const DateInput: React.FC<DateInputProps> = ({
  name,
  value,
  onChange,
  label,
  required = false,
  readOnly = false,
  formMode = FORM_MODE.EDIT,
  placeholder = "Select date"
}) => {
  const [showPicker, setShowPicker] = useState(false);

  // Convert YYYY-MM-DD to MM/DD/YYYY for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    
    try {
      const [year, month, day] = dateString.split('-');
      return `${month}/${day}/${year}`;
    } catch (e) {
      return dateString;
    }
  };

  // Convert MM/DD/YYYY to YYYY-MM-DD for input value
  const formatDateForInput = (dateString: string) => {
    if (!dateString) return '';
    
    try {
      if (dateString.includes('-')) {
        return dateString;
      }
      
      const [month, day, year] = dateString.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    } catch (e) {
      return dateString;
    }
  };

  // Handle manual date entry
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...e,
      target: {
        ...e.target,
        name: e.target.name,
        value: e.target.value
      }
    });
  };

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setShowPicker(false);
    }
  };

  // Show the date picker when the input is clicked
  const handleFocus = () => {
    if (!readOnly && formMode !== FORM_MODE.VIEW) {
      setShowPicker(true);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {formMode === FORM_MODE.VIEW || readOnly ? (
        <input
          type="text"
          value={formatDate(value)}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] bg-gray-100"
          readOnly
        />
      ) : (
        <input
          type={showPicker ? "date" : "text"}
          name={name}
          value={showPicker ? formatDateForInput(value) : formatDate(value)}
          onChange={handleDateChange}
          onFocus={handleFocus}
          onBlur={() => setTimeout(() => setShowPicker(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A]"
        />
      )}
    </div>
  );
};

export default memo(DateInput); 