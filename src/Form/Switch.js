// @flow
import React from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.div`
  position: relative;
`;

const SwitchInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  &:checked ~ div > div {
    left: 1.6rem;
  }

  :checked ~ div {
    background: #4caf50;
  }
`;

const SwitchInner = styled.div`
  position: relative;
  display: block;
  height: 2rem;
  width: 4rem;
  background: #cccccc;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.2rem 0;
  box-shadow: 0 0.1rem rgba(0, 0, 0, 0.08) inset;
`;

const SwitchButton = styled.div`
  position: absolute;
  left: 0;
  top: -0.2rem;
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.65),
    0 0.3rem 0.3rem rgba(0, 0, 0, 0.08);
  content: '';
  transition: all 0.3s ease;
`;

const Switch = () => (
  <SwitchWrapper>
    <SwitchInput type="checkbox" />
    <SwitchInner>
      <SwitchButton />
    </SwitchInner>
  </SwitchWrapper>
);

export default Switch;
