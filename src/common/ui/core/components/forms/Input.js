
import React from 'react';
import { Form, Col } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Select from 'react-select';
import { Formik, Field } from 'formik';
import { DateInput } from '@/common/ui/core/components/DateInput';
import { NumberInput } from '@/common/ui/core/components/NumberInput';

//onChange={(value) => setFieldValue('releaseDate', value)}
const Input = ({ name, type = 'text', label, md, value, handleChange, placeholder, errorMessage, setFieldValue }) => {
  console.log(1);
  if (type === 'text')
    return (
      <>
        <Form.Label>{label || name}</Form.Label>
        <Form.Control
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          isInvalid={!!errorMessage}
        />
        <Form.Control.Feedback type={errorMessage ? 'invalid' : 'valid'}>{errorMessage}</Form.Control.Feedback>
      </>
    );
  if (type == 'number')
    return (
      <>
        <Form.Label>{label || name}</Form.Label>
        <Form.Control
          name={name}
          placeholder={placeholder}
          value={value}
          isInvalid={!!errorMessage}
          as={NumberInput}
          onChange={(val) => setFieldValue(name, val)}

        />
        <Form.Control.Feedback type={errorMessage ? 'invalid' : 'valid'}>{errorMessage}</Form.Control.Feedback>
      </>
    );
}

export Input;