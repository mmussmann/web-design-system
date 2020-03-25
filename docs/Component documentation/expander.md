---
title: Expander
---

## The expanders are used when you wanted to should users limited information until the user expands an element
## Below you will find the different definitions and options to create your expanders

### Table of contents
<div class="row">
    <div class="col-4">
        <dl>
            <dt>[Overview](#overview)</dt>
            <dd>[Global Definition](#global-definition)</dd>
        </dl>
          <dl>
            <dt>[Expanding Accordion Default](#expanding-accordion)</dt>
            <dt>[Nesting Expanding Accordion](#nesting-expanding-accordion)</dt>
            <dt>[Expanding Accordion Dark Theme](#expanding-accordion-dark-theme)</dt>
        </dl>
    </div>
</div>

## Overview
### Global Definition
Each expanding component is based on a global CSS class called <code>"msds-expander"</code>. It is important to include this class first this is the main HTML class of the component. Without this HTML class, you cannot utalize component. 
There are 2 types of Expanders, with multiple UI themes for dark and light themes:

1. The default Expander - Accordion
 - Default
 - Dark Theme
2. The secondary Expander - Section 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-expander'}}</div>
</div>

### Expanding Accordion
To use "expanding accordion" you need to add the following HTML class: <code>"msds-expander"</code>. 

Below is a example of the Milestone Expanding Accordion. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-expander'}}</div>
</div>

```html
{{render '@accordion-expander'}}
```

### Nesting Expanding Accordion
The expanding accordions can be nested inside each other, by adding the markup for the second accordion inside the parent accordion.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-expander-nested'}}</div>
</div>

```html
{{render '@accordion-expander-nested'}}
```

### Expanding Accordion Dark Theme
To use "dark themed expanding accordion" you need to add the following HTML class: <code>"msds-expander\--dark"</code>. 

Below is a example of the Milestone Dark Themed Expanding Accordion. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@accordion-expander-dark'}}</div>
</div>

```html
{{render '@accordion-expander-dark'}}
```
