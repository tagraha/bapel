// @flow
import React from 'react';
import moment from 'moment';
import styled, {css} from 'styled-components';
import FormControl from './FormControl';
import FormAddon from './FormAddon';
import Icon, {Icons} from '../Icon';
import {TableRow, TableColumn} from '../Display';

type InputType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'email'
  | 'date'
  | 'password'
  | 'tel'
  | 'time'
  | 'datetime'
  | 'select';

type InputSize = 'default' | 'small';

type InputProps = {
  onChange?: Function,
  value?: moment | string,
  defaultValue?: moment | string,
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  rows?: number,
};

type InputOption = {
  value: string,
  label: string | number,
};

type Props = {
  type: InputType,
  size: InputSize,
  block: boolean,
  group: boolean,
  error: boolean,
  borderless: boolean,
  inputProps?: InputProps,
  options?: Array<InputOption>,
  addonLeft?: React$Element<typeof Icons | typeof Icon> | string,
  addonRight?: React$Element<typeof Icons | typeof Icon> | string,
};

const FormInputContainer = styled.div`
  display: block;
  border: ${props => (props.borderless ? 'none' : 'solid 0.1rem #d2d2d2')};
  border-top-color: #c2c2c2;
  border-radius: ${props => (props.group ? '0.2rem 0 0 0.2rem' : '0.2rem')};
  background: #fff;
  overflow: visible;
  &:focus-within {
    border-color: #137cbd;
  }
  ${props =>
    props.group &&
    css`
      border-right: none;
    `} ${props =>
    props.error &&
    css`
      border-color: #f44336 !important;
    `};
  ${props =>
    props.block &&
    css`
      width: 100%;
    `};
`;

const FormInputWrapper = styled.div`
  transition: 0.2s;
  font-size: 1.6rem;
  position: relative;
  overflow: visible;
`;

const FormInput = (props: Props) => (
  <FormInputContainer {...props}>
    <FormInputWrapper>
      <TableRow variant="wide">
        {props.addonLeft && (
          <TableColumn verticalAlign="middle">
            <FormAddon size={props.size}>{props.addonLeft}</FormAddon>
          </TableColumn>
        )}
        <TableColumn verticalAlign="middle" variant="wide">
          <FormControl {...props} />
        </TableColumn>
        {props.addonRight && (
          <TableColumn verticalAlign="middle">
            <FormAddon size={props.size}>{props.addonRight}</FormAddon>
          </TableColumn>
        )}
      </TableRow>
    </FormInputWrapper>
  </FormInputContainer>
);

FormInput.defaultProps = {
  size: 'default',
  block: false,
  group: false,
  error: false,
  borderless: false,
};

export type {InputType, InputSize, InputProps, InputOption};
export default FormInput;
