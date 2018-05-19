// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  src?: string,
  children?: React$Node,
};

const BadgeContainer = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
  border-radius: 50%;
  overflow: hidden;
  border: solid 0.2rem #fff;
  background: #fff;
  img,
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const AvatarBadge = (props: Props) => {
  const {src, children} = props;
  return (
    <BadgeContainer>{children || <img src={src} alt="" />}</BadgeContainer>
  );
};

export default AvatarBadge;
