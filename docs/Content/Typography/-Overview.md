---
title: Typography
---

## In this section we have defined all the typography related to our text, links and lists.

Also, you should know that they are all based on googles [open sans](https://fonts.google.com/specimen/Open+Sans)

## Definitions
<div class="row card-row">
    <div class="col-12 col-md-4">
      <div class="msds-category-card ">
        <a class="msds-category-card__link" href="/docs/content/typography/text" alt="msds-category-cards">
          <div class="msds-category-card__header">
            <div class="msds-category-card__header-body">Text</div>
            <div class="msds-category-card__header-icon-container">
              <svg class="msds-category-card__header-icon"><use href="/msds-spritemap.svg#right-arrow"/></svg>
            </div>
          </div>
          <div class="msds-category-card__content">
            <div class="msds-category-card__content-body">Check out the typography related to our website text.</div>
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="msds-category-card ">
        <a class="msds-category-card__link" href="/docs/content/typography/links" alt="msds-category-cards">
          <div class="msds-category-card__header">
            <div class="msds-category-card__header-body">Links</div>
            <div class="msds-category-card__header-icon-container">
              <svg class="msds-category-card__header-icon"><use href="/msds-spritemap.svg#right-arrow"/></svg>
            </div>
          </div>
          <div class="msds-category-card__content">
            <div class="msds-category-card__content-body">Check out the typography related to all our website links.</div>
          </div>
        </a>
      </div>
    </div>
	<div class="col-12 col-md-4">
      <div class="msds-category-card ">
        <a class="msds-category-card__link" href="/docs/content/typography/lists" alt="msds-category-cards">
          <div class="msds-category-card__header">
            <div class="msds-category-card__header-body">Lists</div>
            <div class="msds-category-card__header-icon-container">
              <svg class="msds-category-card__header-icon"><use href="/msds-spritemap.svg#right-arrow"/></svg>
            </div>
          </div>
          <div class="msds-category-card__content">
            <div class="msds-category-card__content-body">Check out the typography related to all our website lists.</div>
          </div>
        </a>
      </div>
    </div>
</div>

### Adding google font to page:
Below is the link to include google fonts on the page
```html
<link href='//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,300,400,700,600' rel='stylesheet' type='text/css' />
```

### How to enable open sans font family on elements:
Add 'msds-enable-font-family' class to the parent element e.g. below example of how to do it on the entire page
```
<html class="msds-enable-font-family">
	......
</html>
```