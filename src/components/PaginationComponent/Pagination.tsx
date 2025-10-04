import React from 'react';
import type { MetaServer } from '@adapters/types/ProductServer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  meta: MetaServer;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ meta, currentPage, onPageChange }) => {
  const { last_page } = meta;
  const pages = Array.from({ length: last_page }, (_, i) => i + 1);

  return (
    <div className='flex items-center space-x-1 rounded bg-white p-2 shadow'>
      <button
        className='cursor-pointer rounded px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 disabled:opacity-50'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`cursor-pointer rounded px-3 py-1.5 text-sm transition-all duration-300 ${
            currentPage === page ? 'bg-neutral-800 text-white' : 'text-neutral-600 hover:bg-neutral-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        className='cursor-pointer rounded px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 disabled:opacity-50'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === last_page}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};
