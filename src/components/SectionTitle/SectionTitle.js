import React from 'react';

import styled from 'styled-components/macro';

const SectionTitle = ({ children, cornerLink }) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
      {cornerLink && (
        <CornerLink href={cornerLink.href}>
          {cornerLink.content}
        </CornerLink>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  color: var(--color-gray-900);
  font-weight: var(--font-weight-bold);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CornerLink = styled.a`
  font-size: 0.75rem;
  color: var(--color-gray-900);
  font-family: var(--font-family-sans-serif);
  font-weight: var(--font-weight-bold);

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export default SectionTitle;
