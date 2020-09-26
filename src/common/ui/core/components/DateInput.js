/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import moment from 'moment';
import Inputmask from 'inputmask';
import { Form } from 'react-bootstrap';

import 'pikaday/css/pikaday.css';

const REGEX_DATE_DD_MM_YYYY = '([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)((\\d){4})';
const REGEX_DATETIME_DD_MM_YYYY_HH_MM = '([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)((\\d){4}) ([0-1]?[0-9]|2?[0-3]):([0-5]\\d)';

// FIXME no futuro tentar esse componente com o seguinte:
// https://github.com/pingcheng/bootstrap4-datetimepicker
export const DateInput = ({ name, placeholder, value, onChange }) => {
  const inputRef = useRef();
  useEffect(() => {
    Inputmask({ regex: REGEX_DATE_DD_MM_YYYY }).mask(inputRef.current);
    const picker = new Pikaday({
      field: inputRef.current,
      format: 'DD/MM/YYYY',
      onSelect: (date) => {
        const day = moment(date, 'DD/MM/YYYY');
        if (typeof onChange === 'function') {
          onChange(day.format('DD/MM/YYYY'));
        }
      },
    });
  }, []);
  // ((1)[0-2]))
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
