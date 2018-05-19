// @flow
import React from 'react';
import styled from 'styled-components';
import {UikitConsumer} from '../Provider';

const LabelLink = (props: Object) => (
  <UikitConsumer>{({Link}) => <Link {...props} />}</UikitConsumer>
);

export default styled(LabelLink)`
  color: inherit;
  cursor: pointer;
  text-decoration: none !important;
  outline: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.08);
`;
