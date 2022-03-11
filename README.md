# Playground Test
## Getting Started
`git clone https://github.com/sallf/playground-test.git`

`cd playground-test`

`npm start`

Don't forget to get the server up and running and make sure it's available at `http://localhost:3000/`.

## Architecture
```
src
│ __mocks__ (jest)
│ __tests__ (jest)
| api (functions for api calls)
| App (root react component)
| assets (images and other assets)
  |_ public (assets that shouldn't be hash named)
| common (shared functions and objects)
| components (all react components that are not tied to a route)
| hooks (all react components that are not tied to a route)
| screens (all react components that are tied to a route)
| scss (all scss style - container of local.scss and global.scss)
| index.ejs (root index html file)
| index.jsx (root index js file - loads App)
```

## Technologies

Most of the HTML and CSS was custom written to fit the specs and because I didn't want to  use too many packages. I did rely on:

- [GSAP](https://greensock.com/) for animation help.
- [multicoin-address-validator](https://www.npmjs.com/package/multicoin-address-validator) to help validate the input.

## Notes

The table was built with `flexbox` and relies on a config file, `columnData`, to keep the columns aligned. HTML `table`s, while still used for tabular data, are challenging to make responsive. This approach allows us to use a single layout, and simply make CSS adjustments, to switch between the large and small screen versions. These layouts would not be possible with a single HTML `table`. Relying solely on CSS to track the breakpoint also keeps us from having to have extra eventListeners and track the screen width in React. I ultimately think this approach is cleaner and easier to maintain.

The instructions requested that the `getName` field always be visible on the small screen layout. I assumed that was the missing filed that I filled in with "Some Activity". The small screen layout maintains the original order of the cells. This could be adjusted with the `order` property if it needed to be adjusted.

A few things I would have included in a larger project:

1. Instead of importing a modal into the components that need it, a single primary modal loaded in the root `App` component is better practice so you don't have to worry about modals over modals. Easy to control it with `context` or `redux`.
2. A lot of the colors were very similar and it would be pretty easy to clean up 25%-50% of them to help simplify things.
3. Add a loading state to the table to cut down on the layout shift that would be  with a slower API.
4. Process error messages from the API.
5. Build a custom animation with GSAP for the expand animation on small screens. The current implementation is a hack and could fail in some extreme situations.
