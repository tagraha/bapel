// @flow
import React from 'react';
import styled, {css} from 'styled-components';

type Variant = 'mobile' | 'desktop';
type Props = {
  variant: Variant,
};

const Container = styled.div`
  ${(props: Props) =>
    props.variant === 'mobile'
      ? css`
          max-width: 64rem;
        `
      : css`
          width: 117rem;
        `};
  margin: 0 auto;
  background: #e3e6e9;
  padding: 0;
`;

export default Container;
