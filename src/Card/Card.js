import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* internal library import */
import Wrapper from './../Wrapper';

type Props = {
  cardImage?: string,
  cardCaption?: string,
  url?: string,
  external: boolean,
  isReactRouter: boolean,
};

const Card = (props: Props) => {
  const {
    cardImage,
    cardCaption,
    url,
    external,
    isReactRouter,
  } = props;

  return (
    <Wrapper>
      <CardWrapper>
        <CardImage src={cardImage} />
        <CardTitleWrapper>
          {cardCaption && !isReactRouter &&
            <CardTitle 
              href={url || "javascript:void(0)"}
              target={external ? '_blank' : '_parent'}
              rel="noopener noreferrer"
            >
              {cardCaption}
            </CardTitle>
          }

          {isReactRouter &&
            <LinkRouter
              to={url}
            >{cardCaption}</LinkRouter>
          }
        </CardTitleWrapper>

        <CardContent>5m ago by Tirta</CardContent>
      </CardWrapper>
    </Wrapper>
  )
}

Card.defaultProps = {
  cardImage: 'https://picsum.photos/500/300',
  cardCaption: 'default caption',
  url: 'https://google.com',
  external: true,
  isReactRouter: false,
};

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