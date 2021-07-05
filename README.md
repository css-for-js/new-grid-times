# New Grid Times — Module 7 workshop

Introductory text

## Code structure

Like the last few workshops, this is a React / styled-components application.

This application is built using a **mobile-first methodology**. We're starting from a place of having almost-finished mobile styles; your mission is to add that last bit of polish on mobile, and then implement the tablet/laptop layouts specified in the designs.

Some design tokens, including colors, fonts, and media queries have been provided in `src/constants.js`. The colors and fonts have also been applied as global CSS variables in `src/components/GlobalStyles`.

Here's the full list of available CSS variables:

```
--color-white
--color-offblack
--color-gray-100
--color-gray-300
--color-gray-500
--color-gray-700
--color-gray-900
--color-primary      <-- dark blue
--color-secondary    <-- green
--color-urgent       <-- red

--font-weight-normal
--font-weight-medium
--font-weight-bold

--font-family-serif
--font-family-sans-serif
--font-family-logo
```

---

The app is broken into 4 main compartments:

- The header
- The main story grid
- The "specialty" story grid
- The footer

The main story grid holds the big featured story, the secondary stories, and the opinion/editorial stories. The "specialty" story grid holds the market and sports sections.

The data for the stories is held in a JS file, `src/data.js`. In a real app, this would be read from a database.

---

## Exercise 1: Header

Like in the Sole&Ankle workshop, this workshop features a two-step header that changes between desktop and mobile.

This workshop has been created with a "Mobile-first" methodology, and so your goal this time is to create a desktop variant of the header, and ensure the right header is used at both viewport sizes.

IMAGES

(You won't need to use CSS Grid for this exercise — think of this as more of a Flexbox review!)

---

## Exercise 2: Mobile polish

Before we start working on the tablet and laptop grid layouts, we need to add a bit of missing polish to the mobile implementation.

This exercise is split into a few mini-parts:

### Text truncation

In the mockup, our main story is truncated on mobile after 8 lines of text:

IMAGE

The exact # of lines shown depends on the viewport size. On tablet, it's 16:

IMAGE

On larger screens, we go back down to 10:

IMAGE

The syntax for multi-line ellipsis is very hard to remember, so you might wish to [review the lesson from Module 6](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/03-text-overflow#multi-line-ellipsis).

### Story borders

There are also dividers between the stories that are in lists, like the secondary and opinion stories:

IMAGE

Critically, the borders only run _between_ stories. Not above the top story, or below the last story.

A good place to start is in `MainStoryGrid.js`. That's where all of these stories are laid out.

### Opinion avatar placement

Opinion stories show a picture of the journalist. On mobile, this image is meant to be shifted off to the side:

IMAGE

Update the styles in `OpinionStory.js` to shift the avatar.

---

## Exercise 3: Tablet and laptop grids

Alright, time to do some grid modifications!

Update the `MainStoryGrid` component to support the layouts shown in Figma for tablet and laptop.

There are a few things that make this quite tricky. Here are some of the details that we'll need to cover, as well as some small hints about how to think about it:

### Swapped OpinionStory styles

On medium-sized (tablet) screens, the "opinion" section changes in two ways.

First, the arrangement updates so that the stories are shown side-by-side, instead of top-to-bottom.

But even more than that, the styles within the story change. Instead of having the avatar off to the side, it becomes part of a vertical stack.

On mobile/laptop:

IMAGE

On tablet:

IMAGE

We'll need to dip into `OpinionStory.js` and make some changes based on the viewport size. A `TabletOnly` query can be used for this case.

### Swapped SecondaryStory styles

Similarly, on tablet, our `SecondaryStory` switches to a new layout.

On mobile/laptop:

IMAGE

On tablet:

IMAGE

### Grid dividers

When our grid grows to have multiple columns, we want to add a thin grey line between the columns:

SCREENSHOT

We discuss strategies for this situation in the [“Grid Dividers” lesson](https://courses.joshwcomeau.com/css-for-js/07-css-grid/11-grid-dividers).

---

## Exercise 4: Specialty Story grid

Underneath the main grid we've been working on, we have another grid, with specialized items about markets and sports.

On mobile, we can use the [“World Famous” grid snippet](https://courses.joshwcomeau.com/css-for-js/07-css-grid/09-fluid-grids) to arrange both the market cards and the sports stories.

When we get to the larger viewports, though, the sports stories operate a little bit differently: they form a single long line, with overflow to allow us to scroll horizontally:

GIF

Finally, on large viewports, we want the market and sports sections to sit side-by-side, with a divider:

IMAGE

---

## Exercise 5: Footer

Well, we've made it to the bottom of the page!

There are two main challenges to the footer:

1. The columns of links (“Discover Content”, “Regional Websites”, etc) need to tile, as shown in the designs.
2. The alignment of certain elements changes. For example, the "superfooter", with the "About Us" link and the social icons, shifts to the right on large viewports. By contrast, the site name / copyright notice shifts to the left.

---

## Solution

View the solution on the course platform:
https://courses.joshwcomeau.com/css-for-js/07-css-grid/19-workshop-solution
