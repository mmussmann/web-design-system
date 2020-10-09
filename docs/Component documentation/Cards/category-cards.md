---
title: Category Cards
---

## The category cards are used everywhere on the website to link between pages
## Below you will find the different definitions and options to create your category cards

### Table of contents
<div class="row">
    <div class="col-6">
      <ul class="document__unordered-list">
        <li class="document__unordered-list-item">
          <a  class="msds-link"href="#overview">Overview</a>
        </li>
        <ul class="document__unordered-list">
          <li class="document__unordered-list-item">
            <a  class="msds-link"href="#global-definition">Global Definition</a>
          </li>
          <li class="document__unordered-list-item">
            <a  class="msds-link"href="#sizes">Sizes</a>
          </li>
          <li class="document__unordered-list-item">
            <a  class="msds-link"href="#states">States</a>
          </li>
        </ul>
        <li class="document__unordered-list-item">
            <a  class="msds-link"href="#category-card-default">Category Card Default</a>
        </li>
        <ul class="document__unordered-list">
          <ul class="document__unordered-list">
            <li class="document__unordered-list-item">
              <a  class="msds-link"href="#category-cards-default-large">Category Cards Default Large</a>
            </li>
            <li class="document__unordered-list-item">
              <a  class="msds-link"href="#category-cards-default-small">Category Cards Default Small</a>
            </li>
            <li class="document__unordered-list-item">
              <a  class="msds-link"href="#category-cards-default-disabled">Category Cards Default Disabled</a>
            </li>
            <li class="document__unordered-list-item">
              <a  class="msds-link"href="#category-states-default">Category States Default</a>
            </li>
          </ul>
        </ul>
        <li class="document__unordered-list-item">
            <a  class="msds-link"href="#category-cards-dark-themed">Category Card Dark Themed</a>
        </li>
        <ul class="document__unordered-list">
          <ul class="document__unordered-list">
            <li class="document__unordered-list-item">
              <a  class="msds-link"href="#category-cards-large-dark-themed">Category Cards Large Dark Themed</a>
            </li>
            <li class="document__unordered-list-item">
              <a  class="msds-link"href="#category-cards-small-dark-themed">Category Cards Small Dark Themed</a>
            </li>
            <li class="document__unordered-list-item">
              <a  class="msds-link"href="#category-cards-disabled-dark-themed">Category Cards Disabled Dark Themed</a>
            </li>
            <li class="document__unordered-list-item">
              <a  class="msds-link"href="#category-states-dark-themed">Category States Dark Themed</a>
            </li>
          </ul>
        </ul>
      </ul>
    </div>
</div>

## Overview
### Global Definition
Each category card is based on a global CSS class called <code>"msds-category-card"</code>. It is important to include it first as it is the main CSS class. Without this HTML class, you cannot utalize component. 
There are 2 types of category cards, the primary category card, that has a content body below the headline, and the category card with no body below the headline.  
- Delete <code>"msds-category-card__content"</code> div to remove the body below the headline.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category'}}</div>
</div>

```html
{{render '@category'}}
```

### Sizes
Our cards can be rendered in 2 different sizes, large, and small as followed. In order to use small cards, add the following
- <code>"col-md-3"</code> instead of <code>"col-md-4"</code>
- <code>"msds-category-card\--small"</code> to the same group of classes that has <code>"msds-category-card"</code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category-overview-sizes'}}</div>
</div>

```html
{{render '@category-overview-sizes'}}
```

### States
Each button has different states which are applied automatically: <i>enabled, hover, active, focus and disabled.</i>
You can see the different state by hovering, activating and focusing on them on the example below. The last button would disabled by default.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category-overview-states'}}</div>
</div>

```html
{{render '@category-overview-states'}}
```

## Category Card Default
The default category card is a light themed, blue card.

### Category Cards Default Large 
The default large category card can be used by wrapping your <code>"msds-category-card"</code> block with a <code>"col-md-4"</code> from Bootstrap.
Below is a example of the Milestone Large Category Card. 
- The default has content in the body of the card and has a preset width based on bootstrap columns <code>"col-md-4"</code>.
- The alternative has no body, to achieve this you can remove the body from the card.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category'}}</div>
</div>

```html
{{render '@category'}}
```

### Category Cards Default Small
Below is a example of the Milestone Small Themed Category Card. 
- The small cards have preset width based on bootstrap columns <code>"col-md-3"</code> and <code>"msds-category-card--small"</code> as an extra class at the same level as <code>"msds-category-card"</code>.
- The alternative has no body, to achieve this you can remove the body from the card.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category-small'}}</div>
</div>

```html
{{render '@category-small'}}
```

### Category Cards Default Disabled
Below is a example of the Milestone Disabled Category Card. 
- The disabled cards must have the <code>"msds-category-card\--disabled"</code> modifier as an extra class at the same level as <code>"msds-category-card"</code> in order to disable the card. This applies to both large and small category cards.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category-disabled'}}</div>
</div>

```html
{{render '@category-disabled'}}
```
<div class="element-preview">
  <div class="element-preview__inner">{{render '@category-small-disabled'}}</div>
</div>

```html
{{render '@category-small-disabled'}}
```

### Category States Default
Each button has different states which are applied automatically: <i>enabled, hover, active, focus and disabled.</i>
You can see the different state by hovering, activating and focusing on them on the example below. The last button would disabled by default.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category-overview-states'}}</div>
</div>

```html
{{render '@category-overview-states'}}
```

## Category Cards Dark Themed
To use "dark themed category card" you need to add the following CCS class: <code>"msds-category-card\--dark"</code>. 

Below is a example of the Milestone Large Dark Themed Category Card. 
- The default has content in the body of the card and has a preset width based on bootstrap columns <code>"col-md-4"</code>.
- The alternative has no body, to achieve this you can remove the body from the card.

### Category Cards Large Dark Themed
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@category-dark'}}</div>
</div>

```html
{{render '@category-dark'}}
```

### Category Cards Small Dark Themed
Below is a example of the Milestone Small Dark Themed Category Card. 
- The small cards have preset width based on bootstrap columns <code>"col-md-3"</code> and <code>"msds-category-card--small"</code> as an extra class at the same level as <code>"msds-category-card"</code>.
- The alternative has no body, to achieve this you can remove the body from the card.

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@category-small-dark'}}</div>
</div>

```html
{{render '@category-small-dark'}}
```

### Category Cards Disabled Dark Themed
Below is a example of the Milestone Disabled Dark Themed Category Card. 
- The disabled cards must have the <code>"msds-category-card\--disabled"</code> modifier as an extra class at the same level as <code>"msds-category-card"</code> in order to disable the card. This applies to both large and small category cards.

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@category-disabled-dark'}}</div>
</div>

```html
{{render '@category-disabled-dark'}}
```
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@category-small-disabled-dark'}}</div>
</div>

```html
{{render '@category-small-disabled-dark'}}
```

### Category States Dark Themed
Each button has different states which are applied automatically: <i>hover, active, focus and disabled.</i>
You can see the different state by hovering, activating and focusing on them on the example below. The last button would disabled by default.

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@category-overview-dark-states'}}</div>
</div>

```html
{{render '@category-overview-dark-states'}}
```
<script>
  //Iniliazes JS each time a user changes the page - this is for fractle v1.3.0
  dispatchEvent(new Event('load'));
</script>
