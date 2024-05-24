import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (pageNumber) => {
        onPageChange(pageNumber);
      };
    
      const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
          pages.push(
            <a
              key={i}
              href="#"
              className={i === currentPage ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleClick(i);
              }}
            >
              {i}
            </a>
          );
        }
        return pages;
      };
    
      return (
        <div className="pagination">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handleClick(currentPage - 1);
            }}
          >
            &laquo;
          </a>
          {renderPageNumbers()}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handleClick(currentPage + 1);
            }}
          >
            &raquo;
          </a>
        </div>
      );
}

export default Pagination