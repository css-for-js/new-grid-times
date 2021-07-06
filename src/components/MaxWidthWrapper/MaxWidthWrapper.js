import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: min(100%, calc(1200px + 32px * 2));
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export default MaxWidthWrapper;
