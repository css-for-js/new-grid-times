import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <SubscribeText>Already a subscriber ?</SubscribeText>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  position: relative;
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

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-self: end;
    align-self: center;
  }
`;

const SubscribeText = styled.a`
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: 38px;
  font-family: Crimson Text;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 22px;
  text-decoration-line: underline;
`;

const DesktopActionGroup = styled.div`
  display: none;

  svg {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 24px;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    height: 120px;
    justify-content: revert;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
