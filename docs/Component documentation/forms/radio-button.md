---
title: Radio Button 
---
## On this page we will go through our Radio Button component 

Radio Button allow the user to select one option from a set of items.
They can be used in forms, filters, lists etc.

### Table of contents
<div class="row">
    <div class="col-4">
        <ul class="document__unordered-list">
             <li class="document__unordered-list-item">
                 <a class="msds-link" href="#overview">Overview</a>
             </li>
             <li class="document__unordered-list-item">
                 <a class="msds-link" href="#global-definition">Global Definition</a>
             </li>
             <li class="document__unordered-list-item">
                 <a class="msds-link" href="#states">States</a>
             </li>
         </ul>    
    </div>    
</div>

## Overview
### Global Definition
Each radio button component is based on a global CSS class called "msds-radio-button". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work.

The radio button makes use of custom styling by replacing the default input element with a pseudo-element selector, yet it keeps the native "checked" boolean property to toggle its state on/off (or selected/unselected).

<div class="element-preview">
  <div class="element-preview__inner">{{render '@radio-button-global-definition'}}</div>
</div>

```html
{{render '@radio-button-global-definition'}}
```


## States
The styling of states are defined in the CSS file. Some of the states can be triggered programmatically by setting the relative property to the input element. 

### Hover State

State of the hovered radio button.
<div class="element-preview">
  <div class="element-preview__inner">{{render '@radio-button-hover'}}</div>
</div>

### Checked State

It can be checked programmatically by setting the "checked" property to the input element.
<div class="element-preview">
  <div class="element-preview__inner">{{render '@radio-button-selected'}}</div>
</div>

```html
{{render '@radio-button-selected'}}
```

### Focus State

State of the focused radio button
<div class="element-preview">
  <div class="element-preview__inner">{{render '@radio-button-focus'}}</div>
</div>

```html
{{render '@radio-button-focus'}}
```

### Disabled State

It can be disabled programmatically by setting the "disabled" attribute to the input element.
<div class="element-preview">
  <div class="element-preview__inner">{{render '@radio-button-disabled'}}</div>
</div>

```html
{{render '@radio-button-disabled'}}
```

### Readonly State

In order to use the radio button as read-only, you need to add the following to the input element:
- HTML class <code>"msds-radio-button__readonly"</code>
- <code>"tabindex"</code> attribute and its value set to "-1".
- <code>"checked"</code> attribute (optional).

<div class="element-preview">
  <div class="element-preview__inner">{{render '@radio-button-readonly'}}</div>
</div>

```html
{{render '@radio-button-readonly'}}
```