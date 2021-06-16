import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <MobileActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </MobileActionGroup>
          <MobileActionGroup>
            <button>
              <User size={24} />
            </button>
          </MobileActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Side>
          <DesktopActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </DesktopActionGroup>
        </Side>
        <Logo />
        <Side>
          <SubscribeWrapper>
            <Button>Subscribe</Button>
            <SubLink href="/login">Already a subscriber?</SubLink>
          </SubscribeWrapper>
        </Side>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;
const MobileActionGroup = styled(ActionGroup)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  display: none;

  &:last-of-type {
    justify-content: flex-end;
  }

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: revert;
    margin-top: 16px;
    margin-bottom: 64px;
  }
`;

const SubscribeWrapper = styled.div`
  position: relative;
`;

const SubLink = styled.a`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2rem;
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  font-style: italic;
  color: var(--color-gray-900);
  text-decoration: underline;
`;

export default Header;
