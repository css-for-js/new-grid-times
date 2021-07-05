import React from 'react';
import { Twitter, Facebook } from 'react-feather';
import styled from 'styled-components/macro';
import MaxWidthWrapper from '../MaxWidthWrapper';

import VisuallyHidden from '../VisuallyHidden';

const Footer = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <TopRow>
          <nav>
            <TopNavList>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/press">Press Releases</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </TopNavList>
          </nav>
          <Social>
            <a href="/">
              <VisuallyHidden>
                Visit The Grid Times on Facebook
              </VisuallyHidden>
              <Facebook size={20} />
            </a>
            <a href="/">
              <VisuallyHidden>
                Visit The Grid Times on Twitter
              </VisuallyHidden>
              <Twitter size={20} />
            </a>
          </Social>
        </TopRow>
        <MainNavArea>
          <nav>
            <MainNavHeading>Discover Content</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/pol">Politics</a>
              </li>
              <li>
                <a href="/wrl">World</a>
              </li>
              <li>
                <a href="/fin">Financial</a>
              </li>
              <li>
                <a href="/spo">Sports and Entertainment</a>
              </li>
              <li>
                <a href="/oped">Opinion and Editorial</a>
              </li>
            </MainNavList>
          </nav>
          <nav>
            <MainNavHeading>Regional Websites</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/us">New Grid United States</a>
              </li>
              <li>
                <a href="/eu">New Grid Europe</a>
              </li>
              <li>
                <a href="/asia">New Grid Asia</a>
              </li>
              <li>
                <a href="/mars">New Grid Mars and Beyond</a>
              </li>
              <li>
                <a href="/au">New Grid Australia</a>
              </li>
            </MainNavList>
          </nav>
          <nav>
            <MainNavHeading>Careers</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/pos">Open Positions</a>
              </li>
              <li>
                <a href="/team">Meet the team</a>
              </li>
              <li>
                <a href="/culture">Company Culture</a>
              </li>
            </MainNavList>
          </nav>
          <nav>
            <MainNavHeading>Legal and Privacy</MainNavHeading>
            <MainNavList>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/🍪">Use of cookies</a>
              </li>
              <li>
                <a href="/manage">Manage cookies</a>
              </li>
              <li>
                <a href="/legal">Legal notice</a>
              </li>
              <li>
                <a href="/tos">Terms and Conditions</a>
              </li>
            </MainNavList>
          </nav>
        </MainNavArea>
      </MaxWidthWrapper>
      <SubfooterWrapper>
        <MaxWidthWrapper>
          <Subfooter>
            <Logo href="/">New Grid Times</Logo>
            <Disclaimer>
              © 2021 Fake Company Ltd. All Rights Reserved
            </Disclaimer>
          </Subfooter>
        </MaxWidthWrapper>
      </SubfooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  color: var(--color-white);
  background: var(--color-gray-900);
  font-family: var(--font-family-sans-serif);
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--color-gray-300);
  font-size: 0.875rem;
  border-bottom: 1px solid var(--color-gray-700);
  padding: 24px 0;
`;

const Social = styled.div`
  display: flex;
  gap: 24px;

  svg {
    display: block;
  }

  path {
    stroke-width: 1.5px;
  }
`;

const TopNavList = styled.ul`
  display: flex;
  gap: 16px;
`;

const MainNavArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 0 48px;
  text-align: center;
`;

const MainNavHeading = styled.h2`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-300);
  margin-bottom: 8px;
`;

const MainNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubfooterWrapper = styled.div`
  background: var(--color-offblack);
  padding: 8px 0px;
  /* Optical alignment */
  padding-bottom: 16px;
`;

const Subfooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.a`
  font-family: var(--font-family-logo);
  font-size: 2rem;
  color: var(--color-gray-100);
`;

const Disclaimer = styled.p`
  margin-top: -4px;
  font-size: 0.875rem;
  color: var(--color-gray-500);
`;

export default Footer;
