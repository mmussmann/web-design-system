---
title: Solution Cards
---

## The solution cards are used everywhere on the website to link between pages and demo optional solutions within Milestone Systems
Below you will find the different definitions and options to create your solution cards

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
                <ul class="document__unordered-list">
                    <li class="document__unordered-list-item"> 
                        <a class="msds-link"href="#large">Large</a>
                    </li>
                    <li class="document__unordered-list-item"> 
                        <a class="msds-link"href="#small">Small</a>
                    </li>
                </ul>
            </ul>
            <li class="document__unordered-list-item"> 
                <a class="msds-link"href="#solution-card-layouts">Solution Card Layouts</a>
            </li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item"> 
                    <a class="msds-link"href="#solution-card-default">Solution Card Default</a>
                </li>
                <li class="document__unordered-list-item"> 
                    <a class="msds-link"href="#solution-cards-with-optional-solution-badges">Solution Card With Optional Solution Badges</a>
                </li>
                <li class="document__unordered-list-item"> 
                    <a class="msds-link"href="#solution-cards-with-optional-certification-badges">Solution Card With Optional Certification Badges</a>
                </li>
            </ul>
        </ul>
    </div>
</div>

## Overview
### Global Definition
Each solution card is based on a global CSS class called <code>“msds-solution-card”</code>. It is important to include this class first as it is the main CSS class of the component. Without this HTML class, you cannot utilize component. 
There are 4 types of solution cards:
-	The default Solution Cards
-	Solution Cards with optional solution badges
-   Solution Cards without a certification badges

<div class="element-preview">
  <div class="element-preview__inner">{{render '@solution-card-default-layout'}}</div>
</div>

### Sizes
Solution Cards have two different sizes

<div class="element-preview">
  <div class="element-preview__inner">{{render '@solution-card-sizes'}}</div>
</div>

#### Large Solution Cards
When using large solution cards, make use of the bootstrap column <code>col-md-4<code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@solution-card-default'}}</div>
</div>

```html
{{render '@solution-card-default'}}
```

#### Small Solution Cards
When using small solution cards, make use of the bootstrap column <code>col-md-3<code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@solution-card-small'}}</div>
</div>

```html
{{render '@solution-card-small'}}
```

### Solution Card Layouts
Below are the different Solution Card layouts

#### Solution Card Default
Below is an example of the default Solution Card 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@solution-card-default'}}</div>
</div>

```html
{{render '@solution-card-default'}}
```

#### Solution Cards With Optional Solution Badges
Solution Cards can have option solution badges

<div class="element-preview">
  <div class="element-preview__inner">{{render '@solution-card-optional-solution-badges'}}</div>
</div>

```html
{{render '@solution-card-optional-solution-badges'}}
```

#### Solution Cards With Optional Certification Badges
Solution Cards can have option certification badges

<div class="element-preview">
  <div class="element-preview__inner">{{render '@solution-card-optional-certification-badges'}}</div>
</div>

```html
{{render '@solution-card-optional-certification-badges'}}
```