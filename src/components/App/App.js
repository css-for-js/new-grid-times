import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <em>TODO</em>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
