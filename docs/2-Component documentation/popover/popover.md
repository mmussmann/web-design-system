---
title: Popover
---

## On this page we will go through our Popover component 

This component should be easy to integrate in our implementations. 

## Overview
### Global Definition
Each Popover component is based on a global CSS class called "msds-popover". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@popover-global-definition'}}</div>
</div>

```html
{{render '@popover-global-definition'}}
```
#### Popover positioning
The Popover element can be positioned on top, left, right or on the bottom its hover element by extenting the class with its corrosponding extending class.  msds-popover--top, msds-popover--left, msds-popover--right, msds-popover--bottom. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@popover-top'}}</div>
</div>

```html
{{render '@popover-top'}}
```

<div class="element-preview d-flex flex-row-reverse">
  <div class="element-preview__inner">{{render '@popover-left'}}</div>
</div>

```html
{{render '@popover-left'}}
```

<div class="element-preview">
  <div class="element-preview__inner">{{render '@popover-bottom'}}</div>
</div>

```html
{{render '@popover-bottom'}}
```