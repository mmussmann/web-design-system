---
title: Pop Over
---

## On this page we will go through our Pop Over component 

This component should be easy to integrate in our implementations. 

### Table of contents
<div class="row">
    <div class="col-4">
      <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                 <!-- <a class="msds-link" href="#overview">Overview</a> -->
                <ul class="document__unordered-list">
                      <li class="document__unordered-list-item">
                        <!-- <a class="msds-link" href="#global-definition">Global Definition</a> -->
                      </li>
                      <li class="document__unordered-list-item">
                        <!-- <a class="msds-link" href="#sizes">Sizes</a> -->
                      </li>
                </ul>
            </li>
            <li class="document__unordered-list-item">
                 <!-- <a class="msds-link" href="#features">Features</a> -->
            </li>
            <li class="document__unordered-list-item">
                  <!-- <a class="msds-link" href="#light-version">Light version</a> -->
            </li>
            <li class="document__unordered-list-item">
                  <!-- <a class="msds-link" href="#dark-version">Dark version</a> -->
            </li>
        </ul>      
    </div>    
</div>

## Overview
### Global Definition
Each Pop Over component is based on a global CSS class called "msds-pop-over". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@pop-over-global-definition'}}</div>
</div>

```html
{{render '@pop-over-global-definition'}}
```
#### Pop over positioning
The Pop over element can be positioned on top, left, right or on the bottom its hover element by extenting the class with its corrosponding extending class.  msds-popover--top, msds-popover--left, msds-popover--right, msds-popover--bottom. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@pop-over-top'}}</div>
</div>

```html
{{render '@pop-over-top'}}
```

<div class="element-preview d-flex flex-row-reverse">
  <div class="element-preview__inner">{{render '@pop-over-left'}}</div>
</div>

```html
{{render '@pop-over-left'}}
```

<div class="element-preview">
  <div class="element-preview__inner">{{render '@pop-over-bottom'}}</div>
</div>

```html
{{render '@pop-over-bottom'}}
```