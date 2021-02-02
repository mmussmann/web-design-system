---
title: Icons
---
## Adding a new icon
- Use SVGOMG to optimize the SVG https://jakearchibald.github.io/svgomg/
- Add the icon.svg to **src/svg** folder.
- Update **components/icons/icons.hbs** with the new icon
- Push to repository
- Create a new release. _see under [Create a new release](/docs/creating-a-new-release)_ 

Once travis has build the release and published to NPM you can use it by updating the NPM package.

## Usage
Host **msds-spritemap.svg** then use it like below with the # representing the icon name (ID)

##  Flat Icon source
```
<svg title="flat-icon">
    <use href="/msds-spritemap.svg#name-of-flat-icon"></use>
</svg>
```

##  Rich Icon source
As a class
```
<div class="name-of-rich-icon"></div>
```

Or as embedded image
```
<img src="path/to/svg/name-of-rich-icon-file.svg" alt=""/>
```