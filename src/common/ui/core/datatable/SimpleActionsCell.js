import React from 'react';
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  FaRegEdit, FaRegTrashAlt,
} from 'react-icons/fa';

export const SimpleActionsCell = ({ onClickEdit, onClickRemove }) => (
  <td>
    <a
      className="mr-25"
      onClick={() => onClickEdit && onClickEdit()}
    >
      <FaRegEdit />
    </a>
    <a onClick={() => onClickRemove && onClickRemove()}>
      <FaRegTrashAlt className="txt-danger text-danger" />
    </a>
  </td>
);
