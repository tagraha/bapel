// @flow
import React from 'react';
import styled, {css} from 'styled-components';

import Matcher from '../Utils/Matcher';

type TextBoxName = 'line-height' | 'clamp-3' | 'clamp-2' | 'clamp-1';
type TextBoxVariant = 'normal' | 'condensed' | 'ultra-condensed';
type ClampColor = 'white' | 'black';

type Props = {
  name: TextBoxName,
  variant: TextBoxVariant,
  align: 'left' | 'center' | 'right' | 'justify',
  children: React$Node,
  noClamp: boolean,
  clampColor: ClampColor,
};

const StyledTextBox = styled.div`
  ${props =>
    props.align === 'center' &&
    props.name === 'clamp-1' &&
    css`
      margin: 0 auto;
    `}
  text-align: ${props => props.align};
  line-height: ${Matcher.create('variant', [
    ['normal', '1.5'],
    ['condensed', '1.25'],
    ['ultra-condensed', '1.175'],
  ])};
  overflow: hidden;
  ${props =>
    props.name === 'clamp-1'
      ? css`
          max-width: 90%;
          white-space: nowrap;
          text-overflow: ellipsis;
        `
      : css`
          white-space: normal;
        `};
  ${props =>
    props.variant === 'normal' &&
    props.name === 'clamp-3' &&
    css`
      position: relative;
      max-height: 4.5em;
    `};
  ${props =>
    props.variant === 'normal' &&
    props.name === 'clamp-2' &&
    css`
      position: relative;
      max-height: 3em;
    `};
  ${props =>
    props.variant === 'condensed' &&
    props.name === 'clamp-3' &&
    css`
      position: relative;
      max-height: 3.75em;
    `};
  ${props =>
    props.variant === 'condensed' &&
    props.name === 'clamp-2' &&
    css`
      position: relative;
      max-height: 2.5em;
    `};
  ${props =>
    props.variant === 'ultra-condensed' &&
    props.name === 'clamp-3' &&
    css`
      position: relative;
      max-height: 3.375em;
    `};
  ${props =>
    props.variant === 'ultra-condensed' &&
    props.name === 'clamp-2' &&
    css`
      position: relative;
      max-height: 2.25em;
    `};
  ${props =>
    (props.name === 'clamp-2' || props.name === 'clamp-3') &&
    !props.noClamp &&
    css`
      ::after {
        content: '';
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 75%;
        height: 1.2em;
        background: linear-gradient(
          to right,
          ${Matcher.create('clampColor', [
            ['white', 'rgba(255, 255, 255, 0)'],
            ['black', 'rgba(0, 0, 0, 0)'],
          ])},
          ${Matcher.create('clampColor', [
            ['white', 'rgba(255, 255, 255, 1) 75%'],
            ['black', 'rgba(0, 0, 0, 1) 75%'],
          ])}
        );
      }
    `};
`;

const TextBox = (props: Props) => (
  <StyledTextBox
    name={props.name}
    variant={props.variant}
    align={props.align}
    noClamp={props.noClamp}
    clampColor={props.clampColor}>
    {props.children}
  </StyledTextBox>
);

TextBox.defaultProps = {
  name: 'line-height',
  variant: 'normal',
  align: 'left',
  noClamp: false,
  clampColor: 'white',
};

export default TextBox;
