---
title: Checkbox 
---
## On this page we will go through our Checkbox component 

Checkboxes allow the user to select one or more options from a set of items.
They can be used in forms, filters, lists etc.

### Table of contents
<div class="row">
    <div class="col-4">
        <ul class="document__unordered-list">
             <li class="document__unordered-list-item">
                 <a class="msds-link" href="#overview">Overview</a>
             </li>   
              <li class="document__unordered-list-item">
                 <a class="msds-link" href="#states">States</a>
             </li>          
             <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                    <a class="msds-link" href="#hover-state">Hover State</a>
                </li>             
                <li class="document__unordered-list-item">
                    <a class="msds-link" href="#checked-state">Checked State</a>
                </li>
                <li class="document__unordered-list-item">
                    <a class="msds-link" href="#focus-state">Focus State</a>
                </li>             
                <li class="document__unordered-list-item">
                    <a class="msds-link" href="#disabled-state">Disabled State</a>
                </li>
                <li class="document__unordered-list-item">
                    <a class="msds-link" href="#readonly-state">Readonly State</a>
                </li>
            </ul>             
         </ul>    
    </div>    
</div>

## Overview
Each checkbox component is based on a global CSS class called "msds-checkbox". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work.

The checkbox makes use of custom styling by replacing the default input element with a pseudo-element selector, yet it keeps the native "checked" boolean property to toggle its state on/off (or checked/unchecked).

<div class="element-preview">
  <div class="element-preview__inner">{{render '@checkbox-global-definition'}}</div>
</div>

```html
{{render '@checkbox-global-definition'}}
```


## States
The styling of states are defined in the CSS file. Some of the states can be triggered programmatically by setting the relative property to the input element. 

### Hover State

State of the hovered checkbox.
<div class="element-preview">
  <div class="element-preview__inner">{{render '@checkbox-hover'}}</div>
</div>

### Checked State

It can be checked programmatically by setting the "checked" property to the input element.
<div class="element-preview">
  <div class="element-preview__inner">{{render '@checkbox-checked'}}</div>
</div>

```html
{{render '@checkbox-checked'}}
```

### Focus State

State of the focused checkbox
<div class="element-preview">
  <div class="element-preview__inner">{{render '@checkbox-focus'}}</div>
</div>


### Disabled State

It can be disabled programmatically by setting the "disabled" attribute to the input element.
<div class="element-preview">
  <div class="element-preview__inner">{{render '@checkbox-disabled'}}</div>
</div>

```html
{{render '@checkbox-disabled'}}
```

### Readonly State

In order to use the checkbox as read-only, you need to add the following to the input element:
- HTML class <code>"msds-checkbox__readonly"</code>
- <code>"tabindex"</code> attribute and its value set to "-1".
- <code>"checked"</code> attribute (optional).

<div class="element-preview">
  <div class="element-preview__inner">{{render '@checkbox-readonly'}}</div>
</div>

```html
{{render '@checkbox-readonly'}}
```