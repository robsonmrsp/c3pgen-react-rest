import React from 'react';

export const Breadcrumb = () => (
  <nav className="hk-breadcrumb" aria-label="breadcrumb">
    <ol className="breadcrumb breadcrumb-light bg-transparent">
      <li className="breadcrumb-item">
        <a href="#">Forms</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Form Layout
      </li>
    </ol>
  </nav>
);
