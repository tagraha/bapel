// @flow
import React from 'react';
import styled from 'styled-components';
import type {ButtonSize, ButtonIconType, ButtonIconPosition} from './Button';
import {NotificationBadge} from '../Badge';
import StyleMatcher from '../Utils/Matcher';

type Props = {
  icon: ButtonIconType,
  size?: ButtonSize,
  notificationValue?: string | number,
  position: ButtonIconPosition,
};

const buttonIconStyleHandler = (props: Props) => {
  const styles: Object = {};
  const {size} = props;
  switch (size) {
    case 'xsmall':
      styles.padding = StyleMatcher.create('position', [
        ['default', '.3rem .4rem'],
        ['right', '0.3rem .4rem .3rem 0'],
        ['left', '0.3rem 0 .3rem .4rem'],
      ])(props);
      break;
    case 'small':
      styles.padding = StyleMatcher.create('position', [
        ['default', '.5rem .6rem'],
        ['right', '0.5rem .6rem .5rem 0'],
        ['left', '0.5rem 0 .5rem .6rem'],
      ])(props);
      break;
    default:
      styles.padding = StyleMatcher.create('position', [
        ['default', '.7rem .8rem'],
        ['right', '0.7rem .8rem .7rem 0'],
        ['left', '0.7rem 0 .7rem .8rem'],
      ])(props);
      break;
  }

  return styles;
};

const ButtonIconContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 1px;
`;

const ButtonIconWrapper = styled.span`
  position: relative;
  display: block;
  padding: ${props => buttonIconStyleHandler(props).padding};
`;

const ButtonIcon = ({size, notificationValue, icon, position}: Props) => (
  <ButtonIconContainer>
    <ButtonIconWrapper size={size} position={position}>
      {React.cloneElement(icon, {size})}
      {notificationValue !== null &&
        typeof notificationValue !== 'undefined' && (
          <NotificationBadge>{notificationValue}</NotificationBadge>
        )}
    </ButtonIconWrapper>
  </ButtonIconContainer>
);

ButtonIcon.defaultProps = {
  position: 'default',
};

export default ButtonIcon;
