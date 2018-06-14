import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  cardImage?: string,
  cardCaption?: string,
  linkDestination?: string,
  external: boolean,
  isReactRouter: boolean,
};

const Card = (props: Props) => {
  const {
    cardImage,
    cardCaption,
    linkDestination,
    external,
    isReactRouter,
  } = props;

  return (
    <CardWrapper>
      <CardImage src={cardImage || 'https://picsum.photos/500/300'} />
      <CardTitleWrapper>
        {cardCaption && !isReactRouter &&
          <CardTitle 
            href={linkDestination || "javascript:void(0)"}
            target={external ? '_blank' : '_parent'}
            rel="noopener noreferrer"
          >
            {cardCaption}
          </CardTitle>
        }

        {isReactRouter &&
          <LinkRouter
            to={linkDestination}
          >{cardCaption}</LinkRouter>
        }
      </CardTitleWrapper>

      <CardContent>5m ago by Tirta</CardContent>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  max-width: 33%;
  outline: none !important;
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 261px;
`;

const CardTitleWrapper = styled.div`
  padding: 1em 0 .5em 0;
  text-decoration: none !important;
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

const LinkRouter = styled(Link)`
  color: #000;
  font-size: 1.2em;

  &:hover {
    color: #8e8e8e;
    text-decoration: none;
  }
`;

export default Card;