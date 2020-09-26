import React from 'react';

export const Counter = ({ first = 1, last = 10, pageSize = 10, totalRecords = 200, onChange }) => (
  <div
    className="dataTables_info"
    id="datable_1_info"
    role="status"
    aria-live="polite"
  >
    {`Showing ${first} to ${last} of ${totalRecords} entries.`}
    <select className="combo-page-size" onChange={(event) => onChange(event.target.value)} defaultValue={pageSize}>
      <option value="3">3</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
    </select>
    &nbsp;
    per page.
  </div>
);
