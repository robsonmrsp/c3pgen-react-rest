import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

const TablePagination = ({ onPaginate, page, totalItems, pageSize }) => {
  const numPages = 10;
  console.log('PageSize', pageSize);
  let totalNumPages = Math.round((totalItems / pageSize) + 1);
  const [firstVisiblePage, setFirstVisiblePage] = useState(1);
  const [activeButtomItemNumber, setActiveButtomItemNumber] = useState(1);

  const firstPage = page === 1 ? 1 : firstVisiblePage;

  const items = Array.from(new Array(numPages), (l, index) => (10 * (firstPage - 1)) + index + 1);
  totalNumPages = Math.floor((totalItems / pageSize)) + 1;

  const onClickItemHandler = (itemNumber) => {
    setActiveButtomItemNumber(itemNumber);
    if (onPaginate) onPaginate(itemNumber);
  };

  const onClickPrevItemHandler = () => {
    const prev = activeButtomItemNumber > 1 ? activeButtomItemNumber - 1 : 1;
    if (activeButtomItemNumber > 1) {
      onClickItemHandler(prev);
    }
  };

  const onClickNextItemHandler = () => {
    const next = activeButtomItemNumber < totalNumPages ? activeButtomItemNumber + 1 : numPages;

    if (next > (10 * (firstVisiblePage))) {
      setFirstVisiblePage(firstVisiblePage + 1);
    }

    if (activeButtomItemNumber < totalNumPages) {
      onClickItemHandler(next);
    }
  };

  const onClickFirstItemHandler = () => {
    setFirstVisiblePage(1);
    onClickItemHandler(1);
  };

  const onClickLastItemHandler = () => {
    setFirstVisiblePage(Math.round(totalNumPages / 10));
    onClickItemHandler(totalNumPages);
  };


  return (
    <Pagination className="data_table_paginate">
      <Pagination.First onClick={(event) => onClickFirstItemHandler(event)} />
      <Pagination.Prev onClick={(event) => onClickPrevItemHandler(event)} />

      {items.map((item) => {
        if (item <= totalNumPages) {
          return (
            <Pagination.Item
              key={item}
              active={item === page}
              onClick={(event) => onClickItemHandler(item, event)}
            >
              {item}
            </Pagination.Item>
          );
        }
        return null;
      })}

      <Pagination.Next onClick={(event) => onClickNextItemHandler(event)} />
      <Pagination.Last onClick={(event) => onClickLastItemHandler(event)} />
    </Pagination>
  );
};

const CustomPagination = React.memo(TablePagination);

export { CustomPagination as Pagination };
