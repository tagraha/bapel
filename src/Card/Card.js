import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <CardWrapper>
      <CardImage src='https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg' />
      <CardTitleWrapper>
        <CardTitle href="javascript:void(0)">
          any kind of long text of title would be great. hehehe, yolo bro
        </CardTitle>
      </CardTitleWrapper>

      <CardContent>5m ago by Tirta</CardContent>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  max-width: 33%;
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 261px;
`;

const CardTitleWrapper = styled.div`
  padding: 1em 0 .5em 0;
`;

const CardTitle = styled.a`
  color: #000;
  font-size: 1.2em;

  &:hover {
    color: #8e8e8e;
    text-decoration: none;
  }
`;

const CardContent = styled.p`
  font-size: .75em;
  color: #b2b3bb;
`

export default Card;