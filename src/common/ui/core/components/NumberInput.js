/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import moment from 'moment';
import Inputmask from 'inputmask';
import { Form } from 'react-bootstrap';

import 'pikaday/css/pikaday.css';

// Criar o conceito de Locale para  saber quais e como sao descritos
// informacoes como moeda, saparador de decimais, milhar data e etc
export const NumberInput = ({ name, decimal, placeholder, value = '', onChange }) => {
  const inputRef = useRef();
  useEffect(() => {
    const alias = (decimal ? 'decimal' : 'integer');
    Inputmask({ alias }).mask(inputRef.current);
  }, []);
  return (
    <Form.Control
      ref={inputRef}
      value={value}
      type="text"
      id={name}
      name={name}
      onChange={({ target }) => { onChange(target.value); }}
      placeholder={placeholder}
    />
  );
};
