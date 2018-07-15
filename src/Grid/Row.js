/* @flow */
import React from 'react';
import styled from 'styled-components';

const Row = (props: Props) => {
  const { align } = props;
  return (
    <RowContainer align={props.align}>{props.children}</RowContainer>
  )
}

const rowStyleHandler = (props: HandlerProps) => {
  const styles: Object = {};

  switch (props.align) {
    case 'start':
      styles.background = 'green';
      styles.justifyContent = 'flex-start';
      styles.flexPack = 'start';
      break;
    case 'center':
      styles.background = 'magenta';
      styles.justifyContent = 'center';
      styles.flexPack = 'center';
      break;
    case 'end':
      styles.background = 'yellow';
      styles.justifyContent = 'flex-end';
      styles.flexPack = 'end';
      break;
    default:
      styles.textAlign = 'start';
      styles.justifyContent = 'normal';
      styles.flexPack = 'start';
  }

  return styles;
};

const RowContainer  = styled.div`
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  background: ${props => rowStyleHandler(props).background};
  -webkit-box-pack: ${props => rowStyleHandler(props).flexPack};
  -ms-flex-pack: ${props => rowStyleHandler(props).flexPack};
  justify-content: ${props => rowStyleHandler(props).justifyContent};
  text-align: ${props => rowStyleHandler(props).flexPack};
`;

type RowAlignment = 'start' | 'center' | 'end';

type HandlerProps = {
  align?: RowAlignment,
};

type Props = {
  children: React$Node,
  align?: RowAlignment,
}

export default Row;