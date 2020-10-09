import React, { useState, useEffect } from 'react';
import {
  FaLongArrowAltDown, FaLongArrowAltUp, FaArrowsAltV,
} from 'react-icons/fa';

const Order = {
  ASC: 'ASC', DESC: 'DESC', NONE: '',
};
const Cell = ({ head, field, reset, sortable, onSort }) => {
  const [order, setOrder] = useState(Order.NONE);

  useEffect(() => {
    setOrder(Order.NONE);
  }, [reset]);

  const reorder = () => {
    setTimeout(() => {
      if (order === Order.NONE) {
        setOrder(Order.ASC);
        onSort(field, Order.ASC);
      } else if (order === Order.ASC) {
        setOrder(Order.DESC);
        onSort(field, Order.DESC);
      } else {
        setOrder(Order.NONE);
        onSort(field, Order.NONE);
      }
    }, 0);
  };
  if (sortable) {
    return (
      <a onClick={reorder} role="button" tabIndex="0" onKeyDown={() => null}>
        {order === Order.NONE && <FaArrowsAltV />}
        {order === Order.ASC && <FaLongArrowAltUp />}
        {order === Order.DESC && <FaLongArrowAltDown />}
        {head}
      </a>
    );
  }
  return (
    <a>
      {head}
    </a>
  );
};

export const Head = ({ columns, onSort }) => {
  const [columnName, setColumnOrdered] = useState('');
  return (
    <thead>
      <tr>
        {
          columns.map(({ head, field, sortable }) => (
            <th key={head} onClick={() => { setColumnOrdered(field); }}>
              <Cell sortable={sortable} head={head} field={field} onSort={onSort} reset={columnName === field} />
            </th>
          ))
        }
      </tr>
    </thead>
  );
};
