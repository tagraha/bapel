// @flow
import React from 'react';
import styled, {css} from 'styled-components';

import Matcher from '../Utils/Matcher';

type TextVariant = 'regular' | 'thick' | 'medium' | 'bold';

type TextSize =
  | 'xmicro'
  | 'micro'
  | 'small'
  | 'regular'
  | 'large'
  | 'display-small'
  | 'display-medium'
  | 'display-large';

type TextColor =
  | 'regular'
  | 'cyan'
  | 'gray'
  | 'red'
  | 'green'
  | 'blue'
  | 'orange'
  | 'white'
  | 'blue';

type TextFamily = 'default' | 'serif';
type TextTransform = 'capitalize' | 'uppercase' | 'lowercase';

type Props = {
  size: TextSize,
  variant: TextVariant,
  color: TextColor,
  textTransform?: TextTransform,
  family: TextFamily,
  children: React$Node,
  className?: string,
  italic?: boolean,
};

const StyledText = styled.span`
  font-family: ${props =>
    props.family === 'serif'
      ? '"PT Serif", Georgia, Serif'
      : '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif'};
  -webkit-font-smoothing: antialiased;
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
  font-weight: ${Matcher.create('variant', [
    ['regular', '400'],
    ['thick', '500'],
    ['medium', '600'],
    ['bold', '800'],
  ])};
  color: ${Matcher.create('color', [
    ['regular', '#000000'],
    ['cyan', '#00a1b0'],
    ['gray', '#999999'],
    ['red', '#f44336'],
    ['green', '#4CAF50'],
    ['blue', '#2196F3'],
    ['orange', '#FF9800'],
    ['white', '#FFFFFF'],
    ['blue', '#2196F3'],
  ])};
  text-transform: ${Matcher.create('textTransform', [
    ['capitalize', 'capitalize'],
    ['uppercase', 'uppercase'],
    ['lowercase', 'lowercase'],
  ])};
  ${props =>
    props.italic &&
    css`
      font-style: italic;
    `};
`;

const Text = (props: Props) => (
  <StyledText
    className={props.className}
    size={props.size}
    variant={props.variant}
    color={props.color}
    italic={props.italic}
    textTransform={props.textTransform}
    family={props.family}>
    {props.children}
  </StyledText>
);

Text.defaultProps = {
  size: 'regular',
  variant: 'regular',
  color: 'regular',
  family: 'default',
};

export type {TextColor, TextSize};
export default Text;
