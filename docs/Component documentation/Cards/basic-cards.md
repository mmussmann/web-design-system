---
title: Basic Cards
---

## The basic cards are used everywhere on the website to link between pages
Below you will find the different definitions and options to create your basic cards

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
                  <a class="msds-link"href="#themes">Themes</a>
                </li>
            </ul>
            <li class="document__unordered-list-item"> 
                <a class="msds-link"href="#basic-card-layouts">Basic Card Layouts</a>
            </li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item"> 
                    <a class="msds-link"href="#basic-card">Basic Card Default</a>
                </li>
                <li class="document__unordered-list-item"> 
                    <a class="msds-link"href="#basic-card-without-a-caption">Basic Card Without A Caption</a>
                </li>
                <li class="document__unordered-list-item">
                    <a class="msds-link"href="#basic-card-without-a-caption-with-an-icon">Basic Card With Header Icon</a>
                </li>
                <li class="document__unordered-list-item">
                    <a class="msds-link"href="#basic-media-card-with-media-types">Basic Card With Header Image</a>
                </li>
            </ul>
        </ul>
    </div>
    <div class="col-6">
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                <a class="msds-link"href="#basic-card-grouping">Basic Card Grouping</a>
            </li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                    <a class="msds-link"href="#basic-card-left-aligned">Basic Card Left Aligned</a>
                </li>
                <li class="document__unordered-list-item">
                    <a class="msds-link"href="#basic-card-center-aligned">Basic Card Center Aligned</a>
                </li>
                <li class="document__unordered-list-item">
                    <a class="msds-link"href="#basic-card-with-icon-in-caption-title">Basic Card With Icon In Caption</a>
                </li>
            </ul>
        </ul>
    </div>
</div>

## Overview
### Global Definition
Each basic card is based on a global CSS class called <code>“msds-basic-card”</code>. It is important to include this class first as it is the main CSS class of the component. Without this HTML class, you cannot utilize component. 
There are 4 types of basic cards:
-	The default Basic Cards
-	Basic Cards without a caption
-   Basic Cards with header icons 
-   Basic Cards with header images

### Themes
Basic Cards have two different themes

#### Light Themed Cards
Light theme cards are setup as the default card

<div class="element-preview">
  <div class="element-preview__inner">{{render '@basic-card-default'}}</div>
</div>

#### Dark Themed Cards
To use a dark themed card add the CSS class "<code>msds-basic-card\--dark</code>", this modifier will work for all basic cards

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@basic-card-default-dark'}}</div>
</div>

```html
{{render '@basic-card-default-dark'}}
```

### Basic Card Layouts
Below are the different Basic Card layouts

#### Basic Card
Below is an example of the default Basic Card 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@basic-card-default'}}</div>
</div>

```html
{{render '@basic-card-default'}}
```

#### Basic Card Without A Caption
Below is an example of a Basic Card without a caption

<div class="element-preview">
  <div class="element-preview__inner">{{render '@basic-card-default-without-caption'}}</div>
</div>

```html
{{render '@basic-card-default-without-caption'}}
```

#### Basic Card Without A Caption With An Icon
Below is an example of a Basic Card without a caption with an icon

<div class="element-preview">
  <div class="element-preview__inner">{{render '@basic-card-default-without-caption-with-header-icon'}}</div>
</div>

```html
{{render '@basic-card-default-without-caption-with-header-icon'}}
```

#### Basic Card Without A Caption With An Image
Below is an example of a Basic Card without a caption with an image

<div class="element-preview">
  <div class="element-preview__inner">{{render '@basic-card-default-without-caption-with-header-image'}}</div>
</div>

```html
{{render '@basic-card-default-without-caption-with-header-image'}}
```

### Basic Card Grouping
Basic Cards can be grouped into left/center/left with icon aligned cards

<div class="element-preview">
  <div class="element-preview__inner">{{render '@basic-card-grouping'}}</div>
</div>

##### Basic Card Left Aligned
Basic Cards that are left aligned, are our default styling for Basic Cards.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@basic-card-grouping-left'}}</div>
</div>

```html
{{render '@basic-card-grouping-left'}}
```

##### Basic Card Center Aligned
Basic Cards center aligned can be setup by using the "<code>msds-basic-card--centered</code>" CSS class.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@basic-card-grouping-center'}}</div>
</div>

```html
{{render '@basic-card-grouping-center'}}
```

##### Basic Card With Icon In Caption Title
Basic Cards can have an icon in the caption title

<div class="element-preview">
  <div class="element-preview__inner">{{render '@basic-card-grouping-left-with-flat-icon'}}</div>
</div>

```html
{{render '@basic-card-grouping-left-with-flat-icon'}}
```

