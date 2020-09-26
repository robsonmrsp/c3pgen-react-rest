import React from 'react';
import { Table } from 'react-bootstrap';

export const DataTable = ({ children, ...props }) => (
  <Table {...props}>
    {children}
  </Table>
);
