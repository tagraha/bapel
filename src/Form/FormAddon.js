// @flow
import React from 'react';
import styled from 'styled-components';
import type {InputSize} from './FormInput';
import Icon, {Icons} from '../Icon';

type Props = {
  children: React$Element<typeof Icons | typeof Icon> | string,
  size: InputSize,
};

const FormAddonWrapper = styled.div`
  padding: ${props =>
    props.size === 'small' ? '0.3rem 0.4rem' : '0.7rem 0.8rem'};
  white-space: nowrap;
  color: #808080;
  line-height: 2.4rem;
`;

const FormAddon = ({children, size}: Props) => (
  <FormAddonWrapper size={size}>{children}</FormAddonWrapper>
);

export default FormAddon;
