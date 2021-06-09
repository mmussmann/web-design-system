---
title: Buttons
---
## On this page we will go through our buttons component 

The buttons are used everywhere on the website for different purposes and actions such as forms, CTAs and campaigns...

Below you will find the different definitions and options to create your buttons

### Table of contents

<div class="row">
    <div class="col-6">
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                 <a class="msds-link" href="#overview">Overview</a>
            </li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#global-definition">Global Definition</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#sizes">Sizes</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#states">States</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#direction">Direction</a>
                </li>
            </ul>
        </ul>
         <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> <a class="msds-link" href="#primary-button">Primary Button</a></li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#primary-button-without-an-icon">Without An Icon</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#primary-button-with-an-icon">With An Icon</a>
                </li>
            </ul>
        </ul>
         <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> <a class="msds-link" href="#secondary-button">Secondary Button</a></li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#secondary-button-without-an-icon">Without An Icon</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#secondary-button-with-an-icon">With An Icon</a>
                </li>
            </ul>
        </ul> 
         <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> <a class="msds-link" href="#secondary-button-dark-theme">Secondary Dark Button</a></li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#secondary-button-dark-theme-without-an-icon">Without An Icon</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#secondary-button-dark-theme-with-an-icon">With An Icon</a>
                </li>
            </ul>
        </ul> 
    </div>
    <div class="col-6">
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> <a class="msds-link" href="#tertiary-button">Tertiary Button</a></li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#tertiary-button-without-an-icon">Without An Icon</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#tertiary-button-with-an-icon">With An Icon</a>
                </li>
            </ul>
        </ul>
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> <a class="msds-link" href="#gray-button">Gray Button</a></li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#gray-button-without-an-icon">Without An Icon</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#gray-button-with-an-icon">With An Icon</a>
                </li>
            </ul>
        </ul>
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> <a class="msds-link" href="#danger-button">Danger Button</a></li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#danger-button-without-an-icon">Without An Icon</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#danger-button-with-an-icon">With An Icon</a>
                </li>
            </ul>
        </ul>    <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> <a class="msds-link" href="#button-group">Button Group</a></li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#left-alignment">Left Alignment</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#center-alignment">Center Alignment</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link" href="#right-alignment">Right Alignment</a>
                </li>
            </ul>
        </ul>
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

### Primary Button Without An Icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-primary-default'}}</div>
</div>

```html
{{render '@button-primary-default'}}
```
### Primary Button With An Icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-primary-icon'}}</div>
</div>

```html
{{render '@button-primary-icon'}}
```

## Secondary Button
To use a Secondary button you need to add the following CCS class: <code>"msds-btn\--secondary"</code>. 

Below are few examples of the Milestone Secondary button. The default Secondary button is without an icon as mentioned in the global definition previously.

### Secondary Button Without An Icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-secondary-default'}}</div>
</div>

```html
{{render '@button-secondary-default'}}
```

### Secondary Button With An Icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-secondary-icon'}}</div>
</div>

## Primary Button Dark Theme
To use a Primary Dark Themed buttons you need to add the following CCS class: <code>"msds-btn\--primary-dark"</code>. 

Below are few examples of the Milestone Primary Dark Themed button. The default Primary Dark Themed button has no icon as mentioned in the global definition previously.

### Without an icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-primary-dark'}}</div>
</div>

```html
{{render '@button-primary-dark'}}
```

### With an icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-primary-dark-icon'}}</div>
</div>

```html
{{render '@button-primary-dark-icon'}}
```

## Secondary Button Dark Theme
To use a Secondary Dark Themed buttons you need to add the following CCS class: <code>"msds-btn\--secondary-dark"</code>. 

Below are few examples of the Milestone Secondary Dark Themed button. The default Secondary Dark Themed button has no icon as mentioned in the global definition previously.

### Secondary Button Dark Theme Without An Icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-secondary-dark'}}</div>
</div>

```html
{{render '@button-secondary-dark'}}
```

### Secondary Button Dark Theme With An Icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-secondary-dark-icon'}}</div>
</div>

```html
{{render '@button-secondary-dark-icon'}}
```

## Danger Button Dark Theme
To use a Danger Dark Themed buttons you need to add the following CCS class: <code>"msds-btn\--danger-dark"</code>. 

Below are few examples of the Milestone Danger Dark Themed button. The default Danger Dark Themed button has no icon as mentioned in the global definition previously.

### Without an icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-danger-dark'}}</div>
</div>

```html
{{render '@button-danger-dark'}}
```

### With an icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-danger-dark-icon'}}</div>
</div>

```html
{{render '@button-danger-dark-icon'}}
```

## Disabled Button Dark Theme
To apply a Disabled Dark Themed button state, you need to add the <code>"disabled"</code> CCS attribute to buttons that have one the following CSS classes:
<code>"msds-btn\--primary-dark"</code>, <code>"msds-btn\--secondary-dark"</code> or <code>"msds-btn\--danger-dark"</code>.

Below are few examples of the Milestone Disabled Dark Themed button. The default Disabled Dark Themed button has no icon as mentioned in the global definition previously.

### Without an icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-disabled-dark'}}</div>
</div>

```html
{{render '@button-disabled-dark'}}
```

### With an icon
<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@button-disabled-dark-icon'}}</div>
</div>

```html
{{render '@button-disabled-dark-icon'}}
```

## Tertiary Button
To use a Tertiary button you need to add the following CCS class: <code>"msds-btn\--tertiary"</code>. 

Below are few examples of the Milestone Tertiary button. The default Tertiary button is without an icon as mentioned in the global definition previously.

### Tertiary Button Without An Icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-tertiary-default'}}</div>
</div>

```html
{{render '@button-tertiary-default'}}
```
### Tertiary Button With An Icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-tertiary-icon'}}</div>
</div>

```html
{{render '@button-tertiary-icon'}}
```

## Gray Button
To use a Gray button you need to add the following CCS class: <code>"msds-btn\--gray"</code>. 

Below are few examples of the Milestone Gray button. The default Gray button is without an icon as mentioned in the global definition previously.

### Gray Button Without An Icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-gray-default'}}</div>
</div>

```html
{{render '@button-gray-default'}}
```
### Gray Button With An Icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-gray-icon'}}</div>
</div>

```html
{{render '@button-gray-icon'}}
```

## Danger Button
To use a Danger button you need to add the following CCS class: <code>"msds-btn\--danger"</code>. 

Below are few examples of the Milestone Danger button. The default Danger button is without an icon as mentioned in the global definition previously.

### Danger Button Without An Icon
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button-danger-default'}}</div>
</div>

```html
{{render '@button-danger-default'}}
```
### Danger Button With An Icon
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
