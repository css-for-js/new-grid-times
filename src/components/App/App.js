import React from 'react';
import styled, { css } from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
  MARKET_DATA,
  SPORTS_STORIES,
} from '../../data';
import { QUERIES } from '../../constants';

import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import Footer from '../Footer';
import Spacer from '../Spacer';

const App = () => {
  return (
    <>
      <Header />
      <MaxWidthWrapper as="main">
        <MainGrid>
          <MainStorySection>
            <MainStory {...MAIN_STORY} />
          </MainStorySection>
          <SecondaryStorySection>
            <StoryList>
              {SECONDARY_STORIES.map((story, index) => {
                const isLastStory =
                  index === SECONDARY_STORIES.length - 1;
                return (
                  <>
                    <SecondaryStory key={story.id} {...story} />
                    {!isLastStory && <Divider />}
                  </>
                );
              })}
            </StoryList>
          </SecondaryStorySection>
          <OpinionSection>
            <SectionTitle>Opinion</SectionTitle>
            <OpinionStoryList>
              {OPINION_STORIES.map((story, index) => {
                const isLastStory =
                  index === OPINION_STORIES.length - 1;

                return (
                  <OpinionStoryWrapper>
                    <OpinionStory key={story.id} {...story} />
                    {!isLastStory && <OpinionDivider />}
                  </OpinionStoryWrapper>
                );
              })}
            </OpinionStoryList>
          </OpinionSection>
          <AdvertisementSection>
            <Advertisement />
          </AdvertisementSection>
        </MainGrid>

        <SpecialtyGrid>
          <MarketsSection>
            <SectionTitle
              cornerLink={{
                href: '/markets',
                content: 'Visit Markets data »',
              }}
            >
              Markets
            </SectionTitle>
            <MarketCards>
              {MARKET_DATA.map((data) => (
                <MarketCard key={data.tickerSymbol} {...data} />
              ))}
            </MarketCards>
          </MarketsSection>
          <SportsSection>
            <SectionTitle
              cornerLink={{
                href: '/sports',
                content: 'Visit Sports page »',
              }}
            >
              Sports
            </SectionTitle>
            <SportsStories>
              {SPORTS_STORIES.map((data) => (
                <SportsStoryWrapper key={data.id}>
                  <MiniStory {...data} />
                </SportsStoryWrapper>
              ))}
            </SportsStories>
          </SportsSection>
        </SpecialtyGrid>
      </MaxWidthWrapper>
      <Spacer size={64} />
      <Footer />
    </>
  );
};

const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  grid-gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-gap: 48px 0;
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-gap: 0px;
    grid-template-columns: 5fr 4fr 3fr;
  }
`;

const SpecialtyGrid = styled.div`
  display: grid;
  grid-template-areas:
    'market'
    'sports';
  grid-gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas: 'market sports';
    grid-gap: 0px;
    grid-template-columns: 1fr 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background: var(--color-gray-300);
  margin: 16px 0;
`;

const OpinionDivider = styled(Divider)`
  @media ${QUERIES.tabletOnly} {
    display: none;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    /* Optical alignment */
    margin-top: -6px;
  }
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`;

const OpinionStoryWrapper = styled.div`
  flex: 1;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} {
    border-top: 1px solid var(--color-gray-300);
    margin-top: 16px;
    padding-top: 16px;
  }
`;

const MarketsSection = styled.section`
  grid-area: market;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
    padding-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

const SportsSection = styled.section`
  grid-area: sports;
  /*
    HACK: This is necessary in order to allow grid children
    to overflow. It shouldn't be used.
  */
  overflow: auto;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 16px;
    overflow: auto;
    /* Add some space around the scrollbar */
    padding-bottom: 16px;
  }
`;

const SportsStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;
export default App;
