export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  offblack: 'hsl(24deg 5% 6%)',
  gray: {
    100: 'hsl(40deg 12% 95%)',
    300: 'hsl(35deg 8% 80%)',
    500: 'hsl(30deg 4% 60%)',
    700: 'hsl(28deg 5% 40%)',
    900: 'hsl(24deg 6% 16%)',
  },
  primary: 'hsl(224deg 30% 40%)',
  secondary: 'hsl(180deg 34% 37%)',
  urgent: 'hsl(0deg 55% 54%)',
};

export const WEIGHTS = {
  normal: 400,
  medium: 550,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  serif: '"Crimson Pro", Georgia, serif',
  sansSerif:
    '"Helvetica Neue", Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
  logo: 'Chomsky',
};
