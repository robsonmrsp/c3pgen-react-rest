import React from 'react';
import { Container } from 'react-bootstrap';

export const Page = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export const Title = ({ text }) => (
  <div className="hk-pg-header">
    <h4 className="hk-pg-title">
      <span className="pg-title-icon">
        <span className="feather-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-align-left"
          >
            <line x1={17} y1={10} x2={3} y2={10} />
            <line x1={21} y1={6} x2={3} y2={6} />
            <line x1={21} y1={14} x2={3} y2={14} />
            <line x1={17} y1={18} x2={3} y2={18} />
          </svg>
        </span>
      </span>
      {text}
    </h4>
  </div>
);