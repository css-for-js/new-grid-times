import React from 'react';
import styled from 'styled-components';

import { QUERIES } from '../../constants';

const MainStory = ({ id, title, image, location, abstract }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  grid-gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      'image'
      'heading'
      'abstract';
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;

  @media ${QUERIES.tabletOnly} {
    width: 100%;
  }
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;

  @media ${QUERIES.tabletOnly} {
    margin-top: 4px;
  }
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  hyphens: auto;
`;

export default MainStory;
