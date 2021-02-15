---
title: Generic Cards
---

## The generic cards are used everywhere on the website to link between pages
## Below you will find the different definitions and options to create your generic cards

### Table of contents
<div class="row">
    <div class="col-6">
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#overview">Overview</a>
            </li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link"href="#global-definition">Global Definition</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link"href="#sizes">Sizes</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link"href="#aspect-ratios">Aspect Ratios</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link"href="#generic-cards-with-svgs">Using SVG images</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link"href="#themes">Themes</a>
                </li>
            </ul>
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#generic-card-default">Generic Card Default</a>
            </li>
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#generic-card-without-an-image">Generic Card Media</a>
            </li>
            <ul class="document__unordered-list">
              <li class="document__unordered-list-item">
                <a class="msds-link"href="#default-generic-media-card">Default Generic Media Card</a>
              </li>
              <li class="document__unordered-list-item">
                <a class="msds-link"href="#generic-media-card-with-media-types">Generic Media Card With Media Types</a>
              </li>
            </ul>
        </ul>
    </div>
</div>

## Overview
### Global Definition
Each generic card is based on a global CSS class called <code>“msds-generic-card”</code>. It is important to include this class first as it is the main CSS class of the component. Without this HTML class, you cannot utilize component. 
There are 2 types of generic cards:
-	The default Generic Cards
-	Generic Cards with media information

<div class="element-preview">
  <div class="element-preview__inner">{{render '@generic-card-overview'}}</div>
</div>

### Sizes
Generic Cards come in two different sizes, large (default) and small media cards.

#### Large
When using large generic cards, make use of the bootstrap column <code>col-md-4<code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@generic-card-default'}}</div>
</div>

```html
{{render '@generic-card-default'}}
```

#### Small
When using small generic cards, make use of the bootstrap column <code>col-md-3</code> and the HTML modifier <code>class = "generic-card\--small"</code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@generic-card-default-small'}}</div>
</div>

```html
{{render '@generic-card-default-small'}}
```

### Aspect Ratios
Generic cards can be setup to use two different types of aspect ratios
-	Generic Cards with a 2 by 1 ratio by using <code>class = "embed-responsive-2by1"</code>
-	Generic Cards with a 16 by 9 ratio by using <code>class = "embed-responsive-16by9"</code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@generic-card-aspect'}}</div>
</div>

```html
{{render '@generic-card-aspect'}}
```

### Generic Cards With SVG's
Generic cards can use SVG images instead of the default jpg or png images

<div class="element-preview">
  <div class="element-preview__inner">{{render '@generic-card-default-svg'}}</div>
</div>

```html
{{render '@generic-card-default-svg'}}
```

### Themes
Generic Cards have two different themes

#### Light Themed Cards
Light theme cards are setup as the default card

<div class="element-preview">
  <div class="element-preview__inner">{{render '@generic-card-default-svg'}}</div>
</div>

```html
{{render '@generic-card-default-svg'}}
```

#### Dark Themed Cards
To use a dark themed card add the CSS class "<code>msds-generic-card\--dark-theme</code>"

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@generic-card-default-svg-dark'}}</div>
</div>

```html
{{render '@generic-card-default-svg-dark'}}
```

### Generic Card Default
Below is an example of the default Generic Card 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@generic-card-default'}}</div>
</div>

```html
{{render '@generic-card-default'}}
```

### Generic Media Card 
Generic Media Cards have two different options, the first option is the default Generic Media card. The second option displays the media type of the generic card.

#### Default Generic Media Card 
Below we have an example of the default Generic Media Card
<div class="element-preview">
  <div class="element-preview__inner">{{render '@generic-card-media'}}</div>
</div>

```html
{{render '@generic-card-media'}}
```

#### Generic Media Card With Media Types
Below we have an example of the Generic Media Card with a floating icon to display the media card type
<div class="element-preview">
  <div class="element-preview__inner">{{render '@generic-card-media-floating-icon'}}</div>
</div>

```html
{{render '@generic-card-media-floating-icon'}}
```