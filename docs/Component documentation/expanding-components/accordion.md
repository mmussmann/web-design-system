---
title: Accordion
---

## The accordions are used when you wanted to show users limited information until the user expands an accordion an element
## Below you will find the different definitions and options to create your accordions

### Table of contents
<div class="row">
    <div class="col-4">
        <dl>
            <dt>[Overview](#overview)</dt>
            <dd>[Global Definition](#global-definition)</dd>
        </dl>
          <dl>
            <dt>[Expanding Accordion Default](#expanding-accordion)</dt>
            <dt>[Expanding Accordion Dark Theme](#expanding-accordion-dark-theme)</dt>
        </dl>
    </div>
</div>

## Overview
### Global Definition
Each expanding component is based on a global CSS class called <code>"msds-accordion"</code>. It is important to include this class first as this is the main HTML class of the component. Without this HTML class, you cannot utilize component. 
There are 3 implementations of Accordions, in light and dark themes.

1. The default Expander - Accordion
 - Default Accordion using checkboxes – the checkboxes allow multiple accordion elements to be open at any time
 - Accordion using radio buttons – the radio buttons only allow one accordion element to be open at any time
 - Full Width Accordion – does not have an icon on the left and takes up the full width of a bootstrap grid.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox'}}</div>
</div>

### Expanding Accordion Using Checkboxes
To use "expanding accordion" you need to add the following HTML class: <code>"msds-accordion"</code>. 

Below is an example of the Milestone Expanding Accordion. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox}}</div>
</div>

```html
{{render '@accordion-checkbox}}
```

### Expanding Accordion Using Radio Buttons
To make use of accordions that can only have one element open at any time, change all the input types from checkbox to radio, and add a name property to the input tag. Ensure that all inputs have the same name <code><input type=”checkbox”></code> to <code><input type=”radio” name=”accordion”></code>
<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-radio}}</div>
</div>

```html
{{render '@accordion-radio}}
```

