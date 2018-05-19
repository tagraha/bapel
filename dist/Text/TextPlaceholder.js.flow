// @flow
import React from 'react';
import styled from 'styled-components';
import Matcher from '../Utils/Matcher';
import type {TextSize} from './Text';

type Props = {
  size: TextSize,
  width: 'small' | 'medium' | 'large',
};

const TextPlaceholderWrapper = styled.div`
  font-size: ${Matcher.create('size', [
    ['xmicro', '1rem'],
    ['micro', '1.2rem'],
    ['small', '1.4rem'],
    ['regular', '1.6rem'],
    ['large', '2.0rem'],
    ['display-small', '2.4rem'],
    ['display-medium', '3.2rem'],
    ['display-large', '4.0rem'],
  ])};
  width: ${Matcher.create('width', [
    ['small', '20%'],
    ['medium', '40%'],
    ['large', '80%'],
  ])};
  display: inline-block;
  margin: 0px auto;
  background-color: #ccc;
`;

const TextPlaceholder = (props: Props) => (
  <TextPlaceholderWrapper width={props.width} size={props.size}>
    &nbsp;
  </TextPlaceholderWrapper>
);

TextPlaceholder.defaultProps = {
  size: 'regular',
  width: 'large',
};

export default TextPlaceholder;
