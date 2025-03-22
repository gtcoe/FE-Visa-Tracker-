/**
 * Date formatting utilities for consistent date display across the application
 */

/**
 * Formats a date string or timestamp into a readable format (DD MMM, YYYY)
 * @param dateInput Date string, timestamp, or Date object
 * @param fallback Optional fallback string if date is invalid
 * @returns Formatted date string
 */
export const formatDate = (dateInput: string | number | Date | undefined | null, fallback: string = 'N/A'): string => {
  if (!dateInput) return fallback;
  
  try {
    const date = new Date(dateInput);
    
    // Check if date is valid
    if (isNaN(date.getTime())) return fallback;
    
    // Format to DD MMM, YYYY (e.g., 15 Jan, 2024)
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    
    return `${day} ${month}, ${year}`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return fallback;
  }
};

/**
 * Formats a date string or timestamp into a readable format with time (DD MMM, YYYY HH:MM)
 * @param dateInput Date string, timestamp, or Date object
 * @param fallback Optional fallback string if date is invalid
 * @returns Formatted date and time string
 */
export const formatDateWithTime = (dateInput: string | number | Date | undefined | null, fallback: string = 'N/A'): string => {
  if (!dateInput) return fallback;
  
  try {
    const date = new Date(dateInput);
    
    // Check if date is valid
    if (isNaN(date.getTime())) return fallback;
    
    // Format to DD MMM, YYYY HH:MM (e.g., 15 Jan, 2024 14:30)
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${day} ${month}, ${year} ${hours}:${minutes}`;
  } catch (error) {
    console.error('Error formatting date with time:', error);
    return fallback;
  }
}; 