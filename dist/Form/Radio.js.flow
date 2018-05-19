// @flow
import React from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.div`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.4rem;
`;

const RadioControl = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border: solid 0.1rem #808080;
  padding: 0.2rem;
  background-color: #fff;
  border-radius: 50%;
`;

const RadioCheck = styled.div`
  transition: 0.2s;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
  &:checked ~ div > div {
    background: #4caf50;
    transition: 0.2s;
  }
`;
const Radio = (props: {name?: string}) => (
  <RadioWrapper>
    <RadioInput type="radio" name={props.name} />
    <RadioControl>
      <RadioCheck />
    </RadioControl>
  </RadioWrapper>
);

export default Radio;
