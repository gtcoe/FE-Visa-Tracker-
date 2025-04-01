import React, { useState } from 'react';
import Link from 'next/link';
import { useQueryClient } from '@tanstack/react-query';
import { 
  prefetchUserData, 
  prefetchClientData, 
  prefetchChecklistData 
} from '@component/utils/prefetchingStrategies';

interface PrefetchLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetchType?: 'user' | 'client' | 'checklist' | 'application';
  dataId?: number | string;
  onClick?: () => void;
}

/**
 * A Link component that prefetches data on hover
 * This improves perceived performance by loading data before the user navigates
 */
const PrefetchLink: React.FC<PrefetchLinkProps> = ({
  href,
  children,
  className = '',
  prefetchType,
  dataId,
  onClick,
}) => {
  const queryClient = useQueryClient();
  const [hasPrefetched, setHasPrefetched] = useState(false);

  const handleMouseEnter = async () => {
    // Only prefetch once per session
    if (!hasPrefetched && prefetchType && dataId) {
      try {
        switch (prefetchType) {
          case 'user':
            await prefetchUserData(queryClient, dataId);
            break;
          case 'client':
            await prefetchClientData(queryClient, Number(dataId));
            break;
          case 'checklist':
            await prefetchChecklistData(queryClient, Number(dataId));
            break;
          case 'application':
            // Add application prefetching if needed
            break;
        }
        
        setHasPrefetched(true);
      } catch (error) {
        console.error(`Error prefetching ${prefetchType} data:`, error);
      }
    }
  };

  return (
    <Link 
      href={href} 
      className={className}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default PrefetchLink; 