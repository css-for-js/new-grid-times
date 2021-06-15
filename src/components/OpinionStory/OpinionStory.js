import React from 'react';
import styled from 'styled-components';

const MainStory = ({ id, title, author, avatar }) => {
  return (
    <ArticleLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </ArticleLink>
  );
};

const ArticleLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const Avatar = styled.img`
  float: right;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  /* Optical alignment */
  transform: translateY(4px);
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default MainStory;
