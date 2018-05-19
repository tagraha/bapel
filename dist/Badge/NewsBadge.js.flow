// @flow
import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import StyleMatcher from '../Utils/Matcher';

type BadgeColor =
  | 'regular'
  | 'cyan'
  | 'gray'
  | 'red'
  | 'green'
  | 'blue'
  | 'orange'
  | 'white'
  | 'purple';

type Props = {
  children: React$Element<typeof Text>,
  color?: BadgeColor,
};

const HeroBadgeWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 99;
  text-transform: uppercase;
  line-height: 1.8rem;
  padding: 0 0.8rem;
  border-radius: 5rem;
  opacity: 0.4;
  font-size: 1rem;
  background-color: ${StyleMatcher.create('color', [
    ['regular', '#000000'],
    ['cyan', '#00a1b0'],
    ['gray', '#999999'],
    ['red', '#f44336'],
    ['green', '#4CAF50'],
    ['blue', '#2196F3'],
    ['orange', '#FF9800'],
    ['white', '#FFFFFF'],
    ['purple', '#673AB7'],
  ])};
`;

const HeroBadge = (props: Props) => (
  <HeroBadgeWrapper color={props.color}>{props.children}</HeroBadgeWrapper>
);

HeroBadgeWrapper.defaultProps = {
  color: 'regular',
};

export default HeroBadge;
