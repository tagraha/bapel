// @flow
import React from 'react';
import styled, {css} from 'styled-components';
import ButtonLabel from './ButtonLabel';
import ButtonIcon from './ButtonIcon';
import Icon, {Icons} from '../Icon';
import Text from '../Text';

type ButtonSize = 'default' | 'small' | 'xsmall';
type ButtonVariant = 'default' | 'primary' | 'line' | 'danger' | 'link';
type ButtonPosition = 'middle' | 'left' | 'right';
type ButtonIconType = React$Element<typeof Icon | typeof Icons>;
type ButtonIconPosition = 'default' | 'left' | 'right';

type Props = {
  size: ButtonSize,
  variant: ButtonVariant,
  block: boolean,
  round: boolean,
  disabled: boolean,
  position?: ButtonPosition,
  children?: string | React$Element<typeof Text>,
  icon?: ButtonIconType,
  iconPosition?: ButtonIconPosition,
  notificationValue?: string | number,
};

type HandlerProps = {
  size?: ButtonSize,
  variant?: ButtonVariant,
  block?: boolean,
  round?: boolean,
  disabled?: boolean,
  position?: ButtonPosition,
};

const buttonStyleHandler = (props: HandlerProps) => {
  const styles: Object = {};

  styles.width = props.block || props.position ? '100%' : 'auto';
  styles.borderRadius = props.round ? '8rem' : '0rem';

  switch (props.variant) {
    case 'primary':
      styles.border = 'solid 0.1rem rgba(0, 0, 0, 0.24)';
      styles.borderBottomColor = 'rgba(0, 0, 0, 0.32)';
      styles.backgroundColor = '#3d70b2';
      styles.mouseEventBackgroundColor = '#30588c';
      break;
    case 'line':
      styles.border = 'solid 0.1rem #3d70b2';
      styles.borderBottomColor = '#30588c';
      styles.backgroundColor = '#fff';
      styles.mouseEventBackgroundColor = '#fff';
      break;
    case 'danger':
      styles.border = 'solid 0.1rem rgba(0, 0, 0, 0.24)';
      styles.borderBottomColor = 'rgba(0, 0, 0, 0.32)';
      styles.backgroundColor = '#f8f8f8';
      styles.mouseEventBackgroundColor = '#e4e4e4';
      break;
    case 'link':
      styles.border = '0';
      styles.backgroundColor = 'transparent';
      styles.mouseEventBackgroundColor = 'transparent';
      break;
    default:
      styles.border = 'solid 0.1rem rgba(0, 0, 0, 0.24)';
      styles.borderBottomColor = 'rgba(0, 0, 0, 0.32)';
      styles.backgroundColor = '#fff';
      styles.mouseEventBackgroundColor = '#d2d2d2';
  }

  switch (props.position) {
    case 'left':
      styles.borderRadius = '8rem 0 0 8rem';
      styles.borderRight = '0';
      break;
    case 'middle':
      styles.borderRadius = '0';
      styles.borderRight = '0';
      break;
    case 'right':
      styles.borderRadius = '0 8rem 8rem 0';
      break;
  }

  styles.cursor = props.disabled ? 'not-allowed' : 'pointer';
  styles.opacity = props.disabled ? '0.72' : '1';
  styles.mouseEventBackgroundColor = props.disabled
    ? styles.backgroundColor
    : styles.mouseEventBackgroundColor;

  return styles;
};

const ButtonWrapper = styled.button`
  appearance: none;
  user-select: none;
  font-family: inherit;
  padding: 0;
  outline: 0;
  transition: 0.2s;
  line-height: 2.4rem;
  text-decoration: none !important;
  ${props =>
    props.variant !== 'link' &&
    css`
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0.1),
        hsla(0, 0%, 100%, 0)
      );
    `} position: relative;
  overflow: hidden;
  display: inline-block;
  border-radius: ${props => buttonStyleHandler(props).borderRadius};
  width: ${props => buttonStyleHandler(props).width};
  background-color: ${props => buttonStyleHandler(props).backgroundColor};
  font-size: ${props => buttonStyleHandler(props).fontSize};
  color: '${props => buttonStyleHandler(props).color}';
  border: ${props => buttonStyleHandler(props).border};
  border-bottom-color: ${props => buttonStyleHandler(props).borderBottomColor};
  border-right: ${props => buttonStyleHandler(props).borderRight};
  &:hover {
    background-color: ${props =>
      buttonStyleHandler(props).mouseEventBackgroundColor};
    color: ${props => buttonStyleHandler(props).color};
  }
  cursor: ${props => buttonStyleHandler(props).cursor};
  opacity: ${props => buttonStyleHandler(props).opacity};
  vertical-align: middle;
`;

const ButtonContentContainer = styled.span`
  display: table;
  width: 100%;
`;

const Button = (props: Props) => {
  const {
    size,
    variant,
    icon,
    iconPosition,
    round,
    block,
    disabled,
    children,
    notificationValue,
    ...defaultButtonProps
  } = props;
  return (
    <ButtonWrapper
      block={block}
      round={round}
      disabled={disabled}
      size={size}
      variant={variant}
      {...defaultButtonProps}>
      <ButtonContentContainer>
        {icon &&
          (!iconPosition || iconPosition === 'left') && (
            <ButtonIcon
              notificationValue={notificationValue}
              size={size}
              icon={icon}
              position={
                children ? (iconPosition ? iconPosition : 'left') : 'default'
              }
            />
          )}
        {children && (
          <ButtonLabel size={size} variant={variant}>
            {children}
          </ButtonLabel>
        )}
        {icon &&
          iconPosition === 'right' && (
            <ButtonIcon
              notificationValue={notificationValue}
              size={size}
              icon={icon}
              position={iconPosition}
            />
          )}
      </ButtonContentContainer>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  size: 'default',
  variant: 'default',
  round: false,
  block: false,
  disabled: false,
};

export type {ButtonVariant, ButtonSize, ButtonIconType, ButtonIconPosition};
export default Button;
