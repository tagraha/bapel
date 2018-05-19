// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string,
  error?: boolean,
};

const HelpLabelWrapper = styled.span`
  font-size: 1.2rem;
  color: ${props => (props.error ? '#f44336' : '#999')};
  margin: 0.4rem 0 0;
  display: block;
`;

const HelpLabel = (props: Props) => (
  <HelpLabelWrapper {...props}>{props.children}</HelpLabelWrapper>
);

export default HelpLabel;
