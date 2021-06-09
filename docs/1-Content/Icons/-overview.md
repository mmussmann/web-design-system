---
title: Icons
---

## Definitions
<div class="row card-row">
    <div class="col-12 col-md-4">
      <div class="msds-category-card ">
        <a class="msds-category-card__link" href="/docs/content/icons/icons-flat" alt="msds-category-cards">
          <div class="msds-category-card__header">
            <div class="msds-category-card__header-body">Flat Icons</div>
            <div class="msds-category-card__header-icon-container">
              <svg class="msds-category-card__header-icon"><use href="/msds-spritemap.svg#right-arrow"/></svg>
            </div>
          </div>
          <div class="msds-category-card__content">
            <div class="msds-category-card__content-body">Check out all our flat icons</div>
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="msds-category-card ">
        <a class="msds-category-card__link" href="/docs/content/icons/icons-rich" alt="msds-category-cards">
          <div class="msds-category-card__header">
            <div class="msds-category-card__header-body">Rich Icons</div>
            <div class="msds-category-card__header-icon-container">
              <svg class="msds-category-card__header-icon"><use href="/msds-spritemap.svg#right-arrow"/></svg>
            </div>
          </div>
          <div class="msds-category-card__content">
            <div class="msds-category-card__content-body">Check out all our Rich icons</div>
          </div>
        </a>
      </div>
    </div>
</div>

## Adding a new icon
- Use SVGOMG to optimize the SVG https://jakearchibald.github.io/svgomg/
- Add the icon.svg to **src/svg** folder.
- Update **components/icons/icons.hbs** with the new icon
- Push to repository
- Create a new release. _see under [Create a new release](/docs/creating-a-new-release)_ 

Once travis has build the release and published to NPM you can use it by updating the NPM package.

## Usage
Host **msds-spritemap.svg** then use it like below with the # representing the icon name (ID)