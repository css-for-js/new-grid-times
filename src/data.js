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

Researchers in the San Francisco think-tank Bestcap Innovations posit that time spent playing video games can be productive, in moderation. Active practice can boost reflexes, skills that will come in handy regardless of your view of the future. Even in the event of a zombie apocalypse, time spent in Mega Zombie Bash 2099 should have a powerful impact.

Not everyone views it the same way, though. David Davidson Sr., professor at LIT University, tells The Grid that any benefits are overshadowed by the social isolation caused by long play sessions, alone in a dark basement. “We don’t celebrate the silver linings that come from other destructive addictions”, he says.

(Please note, this and all the stories on this page are placeholders, made up off the top of my head. Please don't assume anything in them is true!)`,
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
