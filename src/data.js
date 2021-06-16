/**
 * In a real app, this data would likely live in a database,
 * and be fetched from an API, either at runtime or at
 * compile-time.
 *
 * Keep in mind, this workshop is focused on CSS. In order
 * to make it easy to focus on the styling, we're cutting
 * some corners when it comes to our data management, and
 * our JavaScript in general. Please don't try to glean
 * any best-practices from stuff like this data file!
 *
 * PLEASE NOTE: I made up all these stories myself, off the
 * top of my head. It's perhaps an interesting glimpse into
 * my psyche, but nothing you read in these stories should
 * be taken as fact, or even as an opinion. It's all
 * placeholder copy.
 */

export const MAIN_STORY = {
  id: 'a',
  title: 'Study: Video games improve reflexes and critical thinking',
  image: {
    src: '/images/gamepad.jpg',
    alt: 'An XBox gamepad, shown in dramatic lighting',
  },
  location: 'San Francisco',
  abstract: `24-year-old Anthony Vega enjoyed killing zombies, but didn’t realize that those skills were preparing him for work in the 21st century. It turns out, games like Super Mario Brothers and Mega Zombie Bash 2099 have a surprising correlation with in-demand skills like critical reasoning and abstract thinking.

Researchers at the San Francisco think-tank Bestcap Innovations posit that time spent playing video games can be productive, in moderation. Active practice can boost reflexes, skills that will come in handy regardless of your view of the future. Even in the event of a zombie apocalypse, time spent in Mega Zombie Bash 2099 should have a powerful impact.

Not everyone views it the same way, though. David Davidson Sr., professor at LIT University, tells The Grid that any benefits are overshadowed by the social isolation caused by long play sessions, alone in a dark basement. “My cat improves her reflexes by jumping on the dinner table and eating my fish sticks, but I don't celebrate that behaviour!”. Dr. Davidson, it should be noted, does not have a cat.

In 1996, early video game researchers discovered that Pac-Man players were 12% more likely to receive college admission, but 31% more likely to drop out. This suggests that, like famous sprinter Roger Bannister, video game players excel at quick bursts of activity, but struggle with long-term sustained effort.

More than 8 billion people around the world play video games, either recreationally or professionally.`,
};

export const SECONDARY_STORIES = [
  {
    id: 'b',
    title:
      'Politicians scramble as court overrules invalid legislation',
    image: {
      src: '/images/politicians.jpg',
      alt: 'Lots of white men in suits listen apathetically to a presentation',
    },
    abstract: `In a surprising judgment that surprised no one, the New Amsterdam court of appeals finds Bill 234 unconstitutional, overturning one of the Modern Sovereign party's core legislative achievements. Now, lawmakers are working furiously to rewrite the law before the Royal Ascent next month.`,
  },
  {
    id: 'c',
    title:
      'Vintage cars fetch a premium as car industry shifts gears',
    image: {
      src: '/images/old-car.jpg',
      alt: 'A vintage old Beetle (car), orange and with signs of wear',
    },
    abstract: `In a Landsdowne auction, a vintage 1900s beetle sold “as-is” for ȿ120,000, shattering expectations and records alike. As the automotive industry focuses on ALVs (Autonomous Levitated Vehicles), some enthusiasts are paying big bucks for a more traditional driving experience.`,
  },
  {
    id: 'd',
    title:
      'This season’s hottest fashions unveiled amidst designer controversy',
    image: {
      src: '/images/fashion.jpg',
      alt: 'A stylish woman carries a dozen shopping bags',
    },
    abstract: `Ludish Atvalatashia was in his 50s when he launched his first couture line. Famously, he worked as an engineer for Blue Rocket, and learned that many of his inventions were quite eye-catching on the runway. This week, though, whistleblowers from within his agency have revealed the toxic nature of their work environment.`,
  },
];

export const OPINION_STORIES = [
  {
    id: 'o-a',
    author: 'Stephen Abebe',
    avatar: '/images/avatar-stephen-abebe.jpg',
    title:
      'Humans need water to survive, and so do your potted plants!',
  },
  {
    id: 'o-b',
    author: 'Mario DeLuciano',
    avatar: '/images/avatar-mario-deluciano.jpg',
    title: 'Sports! The secret to winning big??',
  },
  {
    id: 'o-c',
    author: 'Alice Smith',
    avatar: '/images/avatar-alice-smith.jpg',
    title: 'Why I’ll never buy groceries in-person again',
  },
  {
    id: 'o-d',
    author: 'Rocko Pierce Stanley',
    avatar: '/images/avatar-rocko-pierce-stanley.jpg',
    title: 'Prediction: Disco is coming back, with a vengeance',
  },
];

export const MARKET_DATA = [
  {
    tickerSymbol: 'AAPL',
    exchangeName: 'NASDAQ',
    percentChange: 4.5,
  },
  {
    tickerSymbol: 'AMC',
    exchangeName: 'NYSE',
    percentChange: 7.9,
  },
  {
    tickerSymbol: 'ENB',
    exchangeName: 'TSE',
    percentChange: -12.4,
  },
  {
    tickerSymbol: 'GOOG',
    exchangeName: 'NASDAQ',
    percentChange: 8.1,
  },
  {
    tickerSymbol: 'AMZN',
    exchangeName: 'NASDAQ',
    percentChange: -6.6,
  },
  {
    tickerSymbol: 'MSFT',
    exchangeName: 'NASDAQ',
    percentChange: -1.2,
  },
];

export const SPORTS_STORIES = [
  {
    id: 's-a',
    image: {
      src: '/images/habs.jpg',
      alt: 'Montreal Canadiens goalie Carey Price covering his net',
    },
    title: 'Montreal Canadiens hope to settle the score in Vegas',
  },
  {
    id: 's-b',
    image: {
      src: '/images/bicycles.jpg',
      alt: 'Lots of men in cute matching outfits riding bicycles',
    },
    title: 'In surprise move, the Tour de France moves to Belgium',
  },
  {
    id: 's-c',
    image: {
      src: '/images/football.jpg',
      alt: 'A football player runs with the ball, whilst being chased by another player',
    },
    title:
      'The Texas Giants eke out a victory after a late-game touchdown',
  },
  {
    id: 's-d',
    image: {
      src: '/images/decathlon.jpg',
      alt: 'Women sprinting on a race track',
    },
    title: 'The surprising result for this summer decathlon',
  },
  {
    id: 's-3',
    image: {
      src: '/images/coach.jpg',
      alt: 'A soccer coach places pylons on a field',
    },
    title: 'Behind the scenes: coaching a Little League team',
  },
];
