// @flow
import React from 'react';
import styled from 'styled-components';

import Matcher from '../Utils/Matcher';

type Props = {
  background?: 'red' | 'green' | 'blue',
  children?: React$Node,
};

const StyledBadge = styled.span`
  -webkit-font-smoothing: antialiased;
  display: table;
  line-height: 2.4rem;
  padding: 0 0.8rem;
  border-radius: 10rem;
  background: #000;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  background: ${Matcher.create('background', [
    ['red', '#db3737'],
    ['green', '#4CAF50'],
    ['blue', '#2196F3'],
  ])};
`;

const Badge = (props: Props) => (
  <StyledBadge {...props}>{props.children}</StyledBadge>
);

Badge.defaultProps = {
  background: 'green',
};

export default Badge;
