import React from "react";
import _ from "lodash";
import "../sass/paginations.scss";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="nav" className="d-flex">
      <ul className="pagination pagination-lg mx-auto p-5">
        {pages.map(page => (
          <li
            key={page}
            className={
              page === currentPage ? "page-item active" : "page-item ml-2"
            }
          >
            <button className="btn" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
