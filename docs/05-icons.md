---
title: Icons
---
### Adding a new icon
- Use SVGOMG to optimize the SVG https://jakearchibald.github.io/svgomg/
- Add the icon.svg to **src/svg** folder.
- Update **components/icons/icons.hbs** with the new icon
- Push to repository
- Create a new release. _see under [Create a new release](/docs/creating-a-new-release)_ 

Once travis has build the release and published to NPM you can use it by updating the NPM package.

### Usage
Host msds-spritemap.svg then use it like below with the # representing the icon name (ID)
```
<svg>
  <use href="/msds-spritemap.svg#graphql-delete-me" />
</svg>
```