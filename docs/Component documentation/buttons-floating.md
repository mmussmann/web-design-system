---
title: Floating Buttons
---

## The buttons are used everywhere on the website for different purposes and actions such as forms, CTAs and campaigns...
## Below you will find the different definitions and options to create your buttons

### Table of contents
<div class="row">
    <div class="col-12">
        <dl>
            <dt>[Overview](#overview)</dt>
            <dd>[Global Definition](#global-definition)</dd>
            <dd>[Sizes](#sizes)</dd>
            <dd>[States](#states)</dd>
            <dd>[Direction](#direction)</dd>
        </dl>
        <dl>
            <dt>[Primary Floating Button](#primary-floating-button)</dt>
        </dl>
        <dl>
            <dt>[Secondary Floating Button](#secondary-floating-button)</dt>
        </dl>
        <dl>
            <dt>[Primary Floating Button Dark Theme](#primary-floating-button-dark-theme)</dt>
        </dl>
        <dl>
            <dt>[Secondary Floating Button Dark Theme](#secondary-floating-button-dark-theme)</dt>
        </dl>
    </div>
</div>

## Overview
### Global Definition
Each button is based on a global CSS class called "msds-btn" along with ".msds-btn-floating". It is important to include "msds-btn" as this is the main class for buttons, in order to utalize the floating button you need to include ".msds-btn-floating" as this modifier renders a floating button. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-overview'}}</div>
</div>

```html
{{render '@button-floating-overview'}}
```

### Sizes
Our floating buttons can be rendered in 3 different sizes, large, medium and small.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-default'}}</div>
</div>

```html
{{render '@button-floating-default'}}
```

### States
Each button has different states that are applied automatically: <i>hover, active, focus and disabled.</i>
- You can see the different state by hovering, activating and focusing on the first Floating Button below
- The second Floating Button is disabled, all floating buttons can be disabled.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-states'}}</div>
</div>

```html
{{render '@button-floating-states'}}
```

### Direction
There are three positional states that floating buttons can be preset to, these position can be applied to all floating buttons
- The icon on the left, and the text on the right by default
- The text on the left, and the icon on the right by using <b><i>".msds-btn-floating\--right"</i></b> modifier
- Column alignment with the text above the icon by using <b><i>".msds-btn-floating\--column"</i></b> modifier

#### Icon left - Text Right
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-default'}}</div>
</div>

```html
{{render '@button-floating-default'}}
```

#### Text left - Icon Right
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-aligned-right'}}</div>
</div>

```html
{{render '@button-floating-aligned-right'}}
```

#### Text above icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-aligned-column'}}</div>
</div>

```html
{{render '@button-floating-aligned-column'}}
```

## Primary Floating Button
To use a primary floating button can be used by appending the following modifier CCS class: <b><i>".msds-btn-floating"</i></b>. 

Below is a example of the Milestone Primary floating button.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-default'}}</div>
</div>

```html
{{render '@button-floating-default'}}
```

## Secondary Floating Button
To use the Secondary Floating Button you need to add the following CCS class: <b><i>".msds-btn-floating\--secondary"</i></b>. 

Below are few examples of the Milestone Secondary button.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-secondary'}}</div>
</div>

```html
{{render '@button-floating-secondary'}}
```

### Aligned Right
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-secondary-aligned-right'}}</div>
</div>

### Aligned Column - Text above icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-floating-secondary-aligned-column'}}</div>
</div>


## Primary Floating Button Dark Theme
To use the Dark Themed buttons you need to add the following CCS class: <b><i>".msds-btn-floating\--dark"</i></b>. 

Below are few examples of the Milestone Dark Themed Floating Button. 

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-floating-dark-default'}}</div>
</div>

```html
{{render '@button-floating-dark-default'}}
```

### Aligned Right
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-floating-dark-aligned-right'}}</div>
</div>

### Aligned Column - Text above icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-floating-dark-aligned-column'}}</div>
</div>

## Secondary Floating Button Dark Theme

To use the Dark Themed buttons you need to add the following CCS class: <b><i>".msds-btn-floating\--dark-secondary"</i></b>. 

Below are few examples of the Milestone Dark Themed Floating Button. 


<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-floating-dark-secondary'}}</div>
</div>

```html
{{render '@button-floating-dark-secondary'}}
```

### Aligned Right
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-floating-dark-secondary-aligned-right'}}</div>
</div>

### Aligned Column - Text above icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-floating-dark-secondary-aligned-column'}}</div>
</div>