import React from 'react';
import { Pagination } from 'react-bootstrap';
const Paginating = ({ perPageItems, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / perPageItems); i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => paginate(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return <Pagination>{pageNumbers}</Pagination>;
};

export default Paginating;
