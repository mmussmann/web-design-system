---
title: Accordion
---

## The accordions are used when you wanted to show users limited information until the user expands an accordion an element

## Below you will find the different definitions and options to create an accordion component

### Table of contents

<div class="row">
    <div class="col-12">
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                 <a class="msds-link" href="#overview">Overview</a>
                 <ul>
                    <li class="document__unordered-list-item"> 
                        <a class="msds-link" href="#global-definition">Global Definition</a>
                    </li>
                 </ul>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#accordion-using-checkboxes">Accordion Using Checkboxes</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#accordion-using-radio-buttons">Accordion Using Radio Buttons</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#accordion-large">Accordion Large</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#accordion-with-an-icon-on-the-left">Accordion With An Icon On The Left</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#accordion-with-an-icon-on-the-left-floating">Accordion With An Icon On The Left Floating</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#accordion-with-an-icon-on-the-left-floating-dark-yellow">Accordion With An Icon On The Left Floating Dark Yellow Theme</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#accordion-filtered-list-items">Accordion With Filtered List Items</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#accordion-disabled">Accordion Disabled</a>
            </li>
        </ul>
    </div>
</div>

## Overview

### Global Definition
Each expanding component is based on a global CSS class called <code>"msds-accordion"</code>. It is important to include this class first as this is the main HTML class of the component. Without this HTML class, you cannot utilize component.

Ensure that each accordion element <code>input</code> has an id and that the label for for that element has a matching <code>for</code> attribute

#### Input

``` html
{{render '@accordion-input'}}
```

<br>

#### Label

``` html
{{render '@accordion-label'}}
```

<br>

There are 5 implementations of Accordions

#### The Default Expanding Accordions

* Default Accordion using checkboxes – the checkboxes allow multiple accordion elements to be open at any time.
* Accordion using radio buttons – the radio buttons only allow one accordion element to be open at any time.
* Accordions with an icon on the left side
* Accordions with a floating button on the left side
* Accordions as floating list items - used for navigation

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-overview'}}</div>
</div>

### Accordion using checkboxes

To use "expanding accordion" you need to add the following HTML class: <code>"msds-accordion"</code>.
The Accordion with checkboxes can have multiple accordions open at once.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-medium'}}</div>
</div>

``` html
{{render '@accordion-checkbox-medium'}}
```

### Accordion using radio buttons

To make use of accordions that can only have one element open at any time, change all the input types from checkbox to radio <code>type=”checkbox”</code> to <code>type=”radio” name=”accordion”</code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-radio'}}</div>
</div>

``` html
{{render '@accordion-radio'}}
```

### Accordion large

To make use of large accordions, add the <code>msds-accordion--large</code> to the main component <code>class="msds-accordion"</code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-large'}}</div>
</div>

``` html
{{render '@accordion-checkbox-large'}}
```

### Accordion with an icon on the left

To make use of accordions that has an icon on the left add the class modifier <code>msds-accordion__list-item-header\--left-icon</code> on the desired accordion label <code>class="msds-accordion__list-item-header</code>

``` html
{{render '@accordion-modifier-icon-left'}}
```

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-medium-icon-left'}}</div>
</div>

``` html
{{render '@accordion-checkbox-medium-icon-left'}}
```

### Accordion with an icon on the left floating

To make use of accordions that has an icon on the left with a floating button add the class modifier on the component <code>class="msds-accordion msds-accordion\--floating-list-item"</code> along with <code>msds-accordion__list-item-header\--left-icon</code> on the desired accordion label <code>class="msds-accordion__list-item-header</code>

``` html
{{render '@accordion-modifier-icon-floating'}}
```

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-medium-icon-left-floating'}}</div>
</div>

``` html
{{render '@accordion-modifier-icon-floating'}}
```

### Accordion with an icon on the left floating dark yellow

To make use of accordions that has an icon on the left with a floating button in a dark theme add the class modifier on the component <code>class="msds-accordion msds-accordion\--floating-list-item msds-accordion\--dark-yellow"</code>

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@accordion-checkbox-medium-icon-left-floating-dark-yellow'}}</div>
</div>

``` html
{{render '@accordion-checkbox-medium-icon-left-floating-dark-yellow'}}
```

### Accordion filtered list items

To make use of accordions with filtered list items is intended to be used for site navigation, to use the filtered list version of the accordion add the class modifier on the component <code>class="msds-accordion msds-accordion\--filter-list-item"</code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-medium-filtered-list-items'}}</div>
</div>

``` html
{{render '@accordion-checkbox-medium-filtered-list-items'}}
```

### Accordion disabled

To make use of the accordion with a disabled list item, append a <code>disabled</code> attribute to the <code>msds-accordion__list-item-input</code> element

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-medium-disabled'}}</div>
</div>

``` html
{{render '@accordion-checkbox-medium-disabled'}}
```
