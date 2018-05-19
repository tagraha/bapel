// @flow
import React from 'react';
import styled from 'styled-components';
import type {ButtonSize, ButtonVariant} from './Button';
import StyleMatcher from '../Utils/Matcher';
import Text from '../Text';

type Props = {
  size?: ButtonSize,
  variant?: ButtonVariant,
  children: string | React$Element<typeof Text>,
};

const buttonLabelStyleHandler = (props: Props) => {
  const styles: Object = {};
  switch (props.size) {
    case 'xsmall':
      styles.padding = '0rem 0.8rem';
      break;
    case 'small':
      styles.padding = '0.3rem 1.2rem';
      break;
    default:
      styles.padding = '0.7rem 1.2rem';
      break;
  }

  return styles;
};

const variantMatcher = StyleMatcher.create('variant', [
  ['primary', 'white'],
  ['line', 'cyan'],
  ['danger', 'red'],
  ['default', 'regular'],
  ['link', 'regular'],
]);

const sizeMatcher = StyleMatcher.create('size', [
  ['default', 'regular'],
  ['small', 'small'],
  ['xsmall', 'micro'],
]);

const fontSizeMatcher = StyleMatcher.create('size', [
  ['default', '1.6rem'],
  ['small', '1.4rem'],
  ['xsmall', '1.2rem'],
]);

const defaultTextProps = props => ({
  color: variantMatcher(props),
  size: sizeMatcher(props),
  variant: 'thick',
});

const ButtonTextWrapper = styled.span`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  font-size: ${fontSizeMatcher};
  padding: ${props => buttonLabelStyleHandler(props).padding};
`;

const ButtonLabel = ({size, variant, children}: Props) => {
  if (typeof children === 'string') {
    return (
      <ButtonTextWrapper size={size}>
        <Text {...defaultTextProps({size, variant})}>{children}</Text>
      </ButtonTextWrapper>
    );
  }
  return <ButtonTextWrapper size={size}>{children}</ButtonTextWrapper>;
};

export default ButtonLabel;
