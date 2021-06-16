import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
  MARKET_DATA,
  SPORTS_STORIES,
} from '../../data';

import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

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
          <WrappedAdvertisement />
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
        </MainGrid>
      </MaxWidthWrapper>
    </>
  );
};

const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement'
    'market'
    'sports';
  grid-gap: 48px;
  /* Give ourselves some breathing room at the bottom */
  padding-bottom: 128px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories'
      'market market'
      'sports sports';
    grid-gap: 48px 0;
    grid-template-columns: 2fr 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    position: relative;
    padding-right: 32px;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 16px;
      bottom: 0;
      width: 1px;
      height: 100%;
      background-color: var(--color-gray-300);
    }
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
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

const WrappedAdvertisement = styled(Advertisement)`
  grid-area: advertisement;
`;

const MarketsSection = styled.section`
  grid-area: market;
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
