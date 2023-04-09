/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './pantigation.css'
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#"
              className={`page-link ${number === currentPage ? 'active-page' : ''} d-flex justify-content-center align-items-center`}
              onClick={() => handleClick(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
