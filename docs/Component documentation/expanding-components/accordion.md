---
title: Accordion
---

## The accordions are used when you wanted to show users limited information until the user expands an accordion an element
## Below you will find the different definitions and options to create an accordion component

### Table of contents
<div class="row">
    <div class="col-12">
        <dl>
            <dt>[Overview](#overview)</dt>
            <dd>[Global Definition](#global-definition)</dd>
        </dl>
          <dl>
            <dt>[Accordion Using Checkboxes](#accordion-using-checkboxes)</dt>
            <dt>[Accordion Using Radio Buttons](#accordion-using-radio-buttons)</dt>
            <dt>[Accordion Full Width](#accordion-full-width)</dt>
            <dt>[Accordion Dark Theme](#accordion-dark-theme)</dt>
            <dt>[Accordion Disabled](#accordion-disabled)</dt>
        </dl>
    </div>
</div>

## Overview
### Global Definition
Each expanding component is based on a global CSS class called <code>"msds-accordion"</code>. It is important to include this class first as this is the main HTML class of the component. Without this HTML class, you cannot utilize component. 

Ensure that each accordion element <code>input</code> has an id and that the label for for that element has a matching <code>for</code> attribute

#### Input
```html
{{render '@accordion-input'}}
```

#### Label

```html
{{render '@accordion-label'}}
```

There are 3 implementations of Accordions, in light and dark themes with an icon on the left, or a full width accordion without an icon on the left.

#### The Default Expanding Accordions
- Default Accordion using checkboxes – the checkboxes allow multiple accordion elements to be open at any time.
- Accordion using radio buttons – the radio buttons only allow one accordion element to be open at any time.
- Full Width Accordion – does not have an icon on the left and takes up the full width of a bootstrap grid.


<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-overview'}}</div>
</div>

### Accordion using checkboxes
To use "expanding accordion" you need to add the following HTML class: <code>"msds-accordion"</code>. 
The Accordion with checkboxes can have multiple accordions open at once.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-overview'}}</div>
</div>

Below is an example of the Milestone Default Expanding Accordion that you can copy into your solution to utilize the component. 

```html
{{render '@accordion-checkbox'}}
```

### Accordion using radio buttons
To make use of accordions that can only have one element open at any time, change all the input types from checkbox to radio <code>type=”checkbox”</code> to <code>type=”radio” name=”accordion”</code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-radio'}}</div>
</div>

Below is an example of the Milestone Expanding Accordion with radio buttons that you can copy into your solution to utilize the component. 

```html
{{render '@accordion-radio'}}
```

### Accordion Full Width 
To make use of the full width accordion, set the accordions container div to <code>class="col-12 col-md-8"</code>. In addition to setting the column container width, the following modifier has to be added to the msds-accordion div container <code> msds-accordion\--full-width</code>.

Full Width Accordions can utilize the dark themed if <code> msds-accordion\--dark</code> modifier is applied.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-radio-full-width'}}</div>
</div>

Below is an example of the Milestone Full Width Accordion that you can copy into your solution to utilize the component. 

```html
{{render '@accordion-radio-full-width'}}
```

### Accordion dark theme
To use "dark themed accordion" you need to add the following CCS class: <code>" msds-accordion\--dark"</code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-checkbox-dark'}}</div>
</div>

Below is an example of the Milestone Dark Themed Expanding Accordion that you can copy into your solution to utilize the component. 

```html
{{render '@accordion-checkbox-dark'}}
```

### Accordion disabled
To make use of the disabled accordion, add <code>disabled</code> to the input container of the accordion item you would like to disable <code><input id="how-does-membership-work" type="checkbox" disabled /></code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-disabled'}}</div>
</div>

Below is an example of the Milestone Disabled Accordion that you can copy into your solution to utilize the component. 

```html
{{render '@accordion-disabled'}}
```
