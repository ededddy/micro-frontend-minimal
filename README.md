# Micro-Frontend Minimal Example

Includes Vue, Solid, React.

# References

1. https://github.com/sasoria/astro-microfrontends (contains react and
   solid, but in js, no our great Vue)
2. (@astrojs/vue doc) [https://docs.astro.build/en/guides/integrations-guide/vue/]
3. (@astrojs/solid doc) [https://docs.astro.build/en/guides/integrations-guide/solid-js/]  
   do not recommend, will prompt warning for computation outside of render. (introduce memory leak)
4. (@astrojs/react doc) [https://docs.astro.build/en/guides/integrations-guide/react/]

# Usage

1. Use `npm`, `pnpm`, `yarn` to install packages on all `app-{}`, `app-{}/`,and
   `shell`

2. Build packages for `app-{}`. You will see `dist/bundle.js`showing up
   in the app root folder.

3. Run `pnpm start` or `npm startor` or `yarn start` in each `app-{}/server/` to start up the
   applet providers.

4. Run `pnpm start` or `npm startor` or `yarn start` in `shell` and see
   the magic.
