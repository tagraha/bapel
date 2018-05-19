// @flow
import React from 'react';
import styled, {css} from 'styled-components';
import StyleMatcher from '../Utils/Matcher';

type Direction = 'horizontal' | 'vertical';
type Color = 'regular' | 'white' | 'black';

type Props = {
  direction?: Direction,
  opacity: number,
  color: Color,
  className?: string,
  style?: Object,
  width?: string,
};

const StyledSeparator = styled.div`
  opacity: ${(props: Props) => props.opacity};
  background: ${StyleMatcher.create('color', [
    ['regular', '#e6e6e6'],
    ['white', '#fff'],
    ['black', '#000'],
  ])};

  ${(props: Props) =>
    props.direction === 'horizontal' &&
    css`
      height: ${props.width};
      width: 100%;
      clear: both;
      position: relative;
      z-index: 8;
    `};

  ${(props: Props) =>
    props.direction === 'vertical' &&
    css`
      height: 100%;
      width: ${props.width};
      position: relative;
      z-index: 8;
    `};
`;

const Separator = (props: Props) => <StyledSeparator {...props} />;

Separator.defaultProps = {
  direction: 'horizontal',
  color: 'regular',
  opacity: 1,
  width: '0.1rem',
};

export default Separator;
