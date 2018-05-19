// @flow
import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.4rem;
`;

const CheckboxControl = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border: solid 0.1rem #a3a3a3;
  border-radius: 0.2rem;
  padding: 0.2rem;
  background-color: #fff;
`;

const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked ~ div > div {
    background: #4caf50;
    transition: 0.2s;
  }
`;

const CheckboxCheck = styled.div`
  width: 1rem;
  height: 1rem;
`;

const Checkbox = (props: {name?: string}) => (
  <CheckboxWrapper>
    <CheckboxInput type="checkbox" name={props.name} />
    <CheckboxControl>
      <CheckboxCheck />
    </CheckboxControl>
  </CheckboxWrapper>
);

export default Checkbox;
