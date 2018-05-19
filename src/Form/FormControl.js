// @flow
import React from 'react';
import styled from 'styled-components';
import DateTime from 'react-datetime';
import {TableRow, TableColumn} from '../Display';
import {Icons} from '../Icon';
import type {InputType, InputSize, InputOption, InputProps} from './FormInput';

type Props = {
  type: InputType,
  inputProps?: InputProps,
  options?: Array<InputOption>,
  size?: InputSize,
};

const FormControlWrapper = styled.div`
  display: block;
  appearance: none;
  line-height: 2.4rem;
  border: 0;
  font-family: inherit;
  outline: 0;
  background: none;
  min-width: 12rem;
  resize: vertical;
  color: inherit;
  width: 100%;
  padding: ${props =>
    props.size === 'small' ? '0.3rem 0.6rem' : '0.7rem 0.8rem'};
  font-size: ${props => (props.size === 'small' ? '1.4rem' : '1.6rem')};
  min-height: ${props => (props.size === 'small' ? '3rem' : '3.8rem')};
`;

const SelectDropDownWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  margin-top: -0.9rem;
`;

const InputForm = FormControlWrapper.withComponent('input');
const TextareaForm = FormControlWrapper.withComponent('textarea');
const SelectForm = FormControlWrapper.withComponent('select').extend`
  padding-right: 3.3rem;
`;

const FormControl = ({type, inputProps, options, size}: Props) => {
  let InputableForm = InputForm;
  let inputAttrs = {};
  switch (type) {
    case 'text':
    case 'number':
    case 'email':
    case 'password':
    case 'tel':
      inputAttrs = {type};
      break;
    case 'date':
      inputAttrs = {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: false,
      };
      break;
    case 'time':
      inputAttrs = {
        dateFormat: false,
        timeFormat: 'HH:mm',
      };
      break;
    case 'datetime':
      inputAttrs = {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
      };
      break;
    case 'select':
      InputableForm = SelectForm;
      break;
    case 'textarea':
      InputableForm = TextareaForm;
      break;
  }

  if (type === 'datetime' || type === 'date' || type === 'time') {
    return (
      <DateTime
        renderInput={props => (
          <InputableForm
            size={size}
            disabled={inputProps && inputProps.disabled}
            readonly={inputProps && inputProps.readonly}
            type="text"
            {...props}
          />
        )}
        {...inputProps}
        {...inputAttrs}
      />
    );
  }

  const props = {
    ...inputProps,
    ...inputAttrs,
    size,
  };

  if (type === 'select') {
    return (
      <TableRow variant="wide">
        <TableColumn verticalAlign="middle" style={{zIndex: 1}} relative>
          <InputableForm {...props}>
            <option>{(inputProps && inputProps.placeholder) || 'Pilih'}</option>
            {options &&
              options.map(item => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
          </InputableForm>
        </TableColumn>
        <TableColumn verticalAlign="middle" relative>
          <SelectDropDownWrapper>
            <Icons name="drop-down" size="small" />
          </SelectDropDownWrapper>
        </TableColumn>
      </TableRow>
    );
  }

  return <InputableForm {...props} />;
};

export default FormControl;
