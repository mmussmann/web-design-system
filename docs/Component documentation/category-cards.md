---
title: Category Cards
---

## The category cards are used everywhere on the website to link between pages
## Below you will find the different definitions and options to create your category cards

### Table of contents
<div class="row">
    <div class="col-4">
        <dl>
            <dt>[Overview](#overview)</dt>
            <dd>[Global Definition](#global-definition)</dd>
            <dd>[Sizes](#sizes)</dd>
            <dd>[States](#states)</dd>
        </dl>
          <dl>
            <dt>[Category Card Default](#category-card-default)</dt>
            <dd>[Category Cards Default Large](#category-cards-default-large)</dd>
            <dd>[Category Cards Default Small](#category-cards-default-small)</dd>
            <dd>[Category Cards Default Disabled](#category-cards-default-disabled)</dd>
            <dd>[Category States Default](#category-states-default)</dd>
        </dl>
        <dl>
            <dt>[Category Card Dark Themed](#category-card-dark-themed)</dt>
            <dd>[Category Cards Large Dark Themed](#category-cards-large-dark-themed)</dd>
            <dd>[Category Cards Small Dark Themed](#category-cards-small-dark-themed)</dd>
            <dd>[Category Cards Disabled Dark Themed](#category-cards-disabled-dark-themed)</dd>
            <dd>[Category States Dark Themed](#category-states-dark-themed)</dd>
        </dl>
    </div>
</div>

## Overview
### Global Definition
Each category card is based on a global CSS class called "msds-category-card". It is important to include it first as it is the main CSS class. Without it there is no card component. 
There are 2 types of category cards, the primary category card, that has a content body below the headline, and the category card with no body below the headline.  
- Delete "msds-category-card__content" div to remove the body below the headline.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category'}}</div>
</div>

```html
{{render '@category'}}
```

### Sizes
Our cards can be rendered in 2 different sizes, large, and small as followed. In order to use small cards, add the following
- "col-md-3" instead of "col-md-4"
- "msds-category-card\--small" to the same group of classes that has "msds-category-card"

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
The default large category card can be used by wrapping your "msds-category-card" block with a "col-md-4" from Bootstrap.
Below is a example of the Milestone Large Category Card. 
- The default has content in the body of the card and has a preset width based on bootstrap columns "col-md-4".
- The alternative has no body, to achieve this you can remove the body from the card.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category'}}</div>
</div>

```html
{{render '@category'}}
```

### Category Cards Default Small
Below is a example of the Milestone Small Themed Category Card. 
- The small cards have preset width based on bootstrap columns "col-md-3" and "msds-category-card--small" as an extra class at the same level as "msds-category-card".
- The alternative has no body, to achieve this you can remove the body from the card.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@category-small'}}</div>
</div>

```html
{{render '@category-small'}}
```

### Category Cards Default Disabled
Below is a example of the Milestone Disabled Category Card. 
- The disabled cards must have the "msds-category-card\--disabled" modifier as an extra class at the same level as "msds-category-card" in order to disable the card. This applies to both large and small category cards.

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
To use "dark themed category card" you need to add the following CCS class: <b><i>"msds-category-card\--dark"</i></b>. 

Below is a example of the Milestone Large Dark Themed Category Card. 
- The default has content in the body of the card and has a preset width based on bootstrap columns "col-md-4".
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
- The small cards have preset width based on bootstrap columns "col-md-3" and "msds-category-card--small" as an extra class at the same level as "msds-category-card".
- The alternative has no body, to achieve this you can remove the body from the card.

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@category-small-dark'}}</div>
</div>

```html
{{render '@category-small-dark'}}
```

### Category Cards Disabled Dark Themed
Below is a example of the Milestone Disabled Dark Themed Category Card. 
- The disabled cards must have the "msds-category-card\--disabled" modifier as an extra class at the same level as "msds-category-card" in order to disable the card. This applies to both large and small category cards.

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
