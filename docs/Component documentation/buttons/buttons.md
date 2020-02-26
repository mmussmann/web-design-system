---
title: Buttons
---

## The buttons are used everywhere on the website for different purposes and actions such as forms, CTAs and campaigns...
## Below you will find the different definitions and options to create your buttons

### Table of contents
<div class="row">
    <div class="col-4">
        <dl>
            <dt>[Overview](#overview)</dt>
            <dd>[Global Definition](#global-definition)</dd>
            <dd>[Sizes](#sizes)</dd>
            <dd>[States](#states)</dd>
            <dd>[Direction](#direction)</dd>
        </dl>
        <dl>
            <dt>[Primary Button](#primary-button)</dt>
            <dd>[Without an icon](#without-an-icon)</dd>
            <dd>[With an icon](#with-an-icon)</dd>
        </dl>
        <dl>
            <dt>[Secondary Button](#secondary-button)</dt>
            <dd>[Without an icon](#without-an-icon)</dd>
            <dd>[With an icon](#with-an-icon)</dd>
        </dl>
        <dl>
            <dt>[Secondary Button Dark Theme](#secondary-button-dark-theme)</dt>
            <dd>[Without an icon](#without-an-icon)</dd>
            <dd>[With an icon](#with-an-icon)</dd>
        </dl>
        <dl>
            <dt>[Tertiary Button](#tertiary-button)</dt>
            <dd>[Without an icon](#without-an-icon)</dd>
            <dd>[With an icon](#with-an-icon)</dd>
        </dl>
    </div>
    <div class="col-4">
        <dl>
            <dt>[Gray Button](#gray-button)</dt>
            <dd>[Without an icon](#without-an-icon)</dd>
            <dd>[With an icon](#with-an-icon)</dd>
        </dl>
        <dl>
            <dt>[Danger Button](#danger-button)</dt>
            <dd>[Without an icon](#without-an-icon)</dd>
            <dd>[With an icon](#with-an-icon)</dd>
        </dl>
        <dl>
            <dt>[Button Group](#button-group)</dt>
            <dd>[Left Alignment](#left-alignment)</dd>
            <dd>[Center Alignment](#center-alignment)</dd>
            <dd>[Right Alignment](#right-alignment)</dd>
        </dl>
    </div>
</div>

## Overview
### Global Definition
Each button is based on a global CSS class called <code>"msds-btn"</code>. It is important to include it first as it is the main CSS class. Without it there is no button component. You can find mainly 2 types of buttons, the default button which is without an icon and one with a icon.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-overview-global-definition'}}</div>
</div>

```html
{{render '@button-overview-global-definition'}}
```

### Sizes
Our buttons can be rendered in 3 different sizes, large, medium and small as followed

<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-overview-sizes'}}</div>
</div>

```html
{{render '@button-overview-sizes'}}
```

### States
Each button has different states which are applied automatically: <i>enabled, hover, active, focus and disabled.</i>
You can see the different state by hovering, activating and focusing on them on the example below. The last button would disabled by default.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-overview-states'}}</div>
</div>

```html
{{render '@button-overview-states'}}
```

### Direction
In some circumstances when having a button with a icon, we would like to render the icon on the left side of the button. To do so, you just need to replace <code>"msds-btn\--icon"</code> by the following CSS class: <code>"msds-btn\--icon-left"</code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-overview-direction'}}</div>
</div>

```html
{{render '@button-overview-direction'}}
```

## Primary Button
To use a primary button you need to add the following CCS class: <code>"msds-btn\--primary"</code>. 

Below is a example of the Milestone Primary button. The default Primary button is without an icon as mentioned in the global definition previously.

### Without an icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-primary-default'}}</div>
</div>

```html
{{render '@button-primary-default'}}
```
### With an icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-primary-icon'}}</div>
</div>

```html
{{render '@button-primary-icon'}}
```

## Secondary Button
To use a Secondary button you need to add the following CCS class: <code>"msds-btn\--secondary"</code>. 

Below are few examples of the Milestone Secondary button. The default Secondary button is without an icon as mentioned in the global definition previously.

### Without an icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-secondary-default'}}</div>
</div>
```html
{{render '@button-secondary-default'}}
```

### With an icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-secondary-icon'}}</div>
</div>


## Secondary Button Dark Theme
To use a Secondary Dark Themed buttons you need to add the following CCS class: <code>"msds-btn\--secondary-dark"</code>. 

Below are few examples of the Milestone Secondary Dark Themed button. The default Secondary Dark Themed button has no icon as mentioned in the global definition previously.

### Without an icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-secondary-dark'}}</div>
</div>
```html
{{render '@button-secondary-dark'}}
```

### With an icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-secondary-dark-icon'}}</div>
</div>

```html
{{render '@button-secondary-dark-icon'}}
```

## Tertiary Button
To use a Tertiary button you need to add the following CCS class: <code>"msds-btn\--tertiary"</code>. 

Below are few examples of the Milestone Tertiary button. The default Tertiary button is without an icon as mentioned in the global definition previously.

### Without an icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-tertiary-default'}}</div>
</div>

```html
{{render '@button-tertiary-default'}}
```
### With an icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-tertiary-icon'}}</div>
</div>

```html
{{render '@button-tertiary-icon'}}
```

## Gray Button
To use a Gray button you need to add the following CCS class: <code>"msds-btn\--gray"</code>. 

Below are few examples of the Milestone Gray button. The default Gray button is without an icon as mentioned in the global definition previously.

### Without an icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-gray-default'}}</div>
</div>

```html
{{render '@button-gray-default'}}
```
### With icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-gray-icon'}}</div>
</div>

```html
{{render '@button-gray-icon'}}
```

## Danger Button
To use a Danger button you need to add the following CCS class: <code>"msds-btn\--danger"</code>. 

Below are few examples of the Milestone Danger button. The default Danger button is without an icon as mentioned in the global definition previously.

### Without an icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-danger-default'}}</div>
</div>

```html
{{render '@button-danger-default'}}
```
### With an icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-danger-icon'}}</div>
</div>

```html
{{render '@button-danger-icon'}}
```

## Button Group
In few cases, we will need to have several buttons and in order to render them and space them correctly, you will need to use a parent element using the following CSS classes: <code>"msds-btn-group\--left"</code> or <code>"msds-btn-group\--right"</code>. It all depends where you would like to align your buttons.

Below are few examples:

### Left Alignment
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-group-left-alignment'}}</div>
</div>

```html
{{render '@button-group-left-alignment'}}
```

### Center Alignment
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-group-center-alignment'}}</div>
</div>

```html
{{render '@button-group-center-alignment'}}
```

### Right Alignment
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-group-right-alignment'}}</div>
</div>

```html
{{render '@button-group-right-alignment'}}
```
