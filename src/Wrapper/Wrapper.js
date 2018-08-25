/* @flow */
import React from 'react';
import styled from 'styled-components';
import './../../assets/fonts/font.css';

const WrapperStyle = styled.div`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
`;

const Wrapper = (props: Props) => {
  const { children } = props;
  return (
    <WrapperStyle>
      { children }
    </WrapperStyle>
  )
}

type Props = {
  children: React$Node;
}

export default Wrapper;