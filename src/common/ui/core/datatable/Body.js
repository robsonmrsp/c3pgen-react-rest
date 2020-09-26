/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';

export const Body = ({ columns, data = [], onSelect }) => (
  <tbody>
    {
      data.map((item) => (
        <tr key={JSON.stringify(item)}>
          {columns.map((col) => {
            if (col.cellRender) {
              return col.cellRender(item);
            }
            return (
              <td onClick={() => onSelect(item)} key={`${item[col.field]}_${col.field}`}>{item[col.field]}</td>
            );
          })}
        </tr>
      ))
    }
  </tbody>
);
