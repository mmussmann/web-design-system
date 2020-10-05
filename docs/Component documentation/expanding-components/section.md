---
title: Section
---

## The expanding sections are used when you wanted to show users limited information until the user expands a section
## Below you will find the different definitions and options to create an expanding section component

### Table of contents
<div class="row">
    <div class="col-12">
      <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                 <a class="msds-link" href="#overview">Overview</a>
                <ul class="document__unordered-list">
                      <li class="document__unordered-list-item">
                        <a class="msds-link" href="#global-definition">Global Definition</a>
                      </li>
                </ul>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#section-using-checkboxes">Section Using Checkboxes</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#section-using-radio-buttons">Section Using Radio Buttons</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#section-with-nested-components">Section With Nested Components</a>
            </li>
            <li class="document__unordered-list-item">
                  <a class="msds-link" href="#section-dark-theme">Section Dark Theme</a>
            </li>
        </ul>
    </div>
</div>

## Overview
### Global Definition
Expanding Sections are setup to take up the full width of a bootstrap column, and to contain other components inside.

Each expanding component is based on a global CSS class called <code>"msds-expanding-section"</code>. It is important to include this class first as this is the main HTML class of the component. Without this HTML class, you cannot utilize component.
 
Ensure that each section element <code>input</code> has an id and that the label for for that element has a matching <code>for</code> attribute

#### Input
```html
{{render '@accordion-input'}}
```

#### Label

```html
{{render '@accordion-label'}}
```

There are 2 implementations of Expanding Sections, a light themed component a dark themed component.
Each implementation can be setup to use checkboxes or radio buttons, based on the desired behavior.

#### The Default Expanding Sections
- Expanding Sections using checkboxes – the checkboxes allow multiple expanding section elements to be open at any time.
- Expanding Sections using radio buttons – the radio buttons only allow one expanding section element to be open at any time.

### Section using checkboxes
To use "expanding section" you need to add the following HTML class: <code>"msds-section"</code>. 
The Section with checkboxes can have multiple sections open at once.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@section-checkbox'}}</div>
</div>

Below is an example of the Milestone Default Expanding Section that you can copy into your solution to utilize the component. 

```html
{{render '@section-checkbox'}}
```

### Section using radio buttons
To make use of expanding sections that can only have one element open at any time, change all the input types from checkbox to radio, and add a name property to the input tag. Ensure that all inputs have the same name <code>type=”checkbox”</code> to <code>type=”radio” name=”section”</code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@section-radio'}}</div>
</div>

Below is an example of the Milestone Expanding Section with radio buttons that you can copy into your solution to utilize the component. 

```html
{{render '@section-radio'}}
```

### Section dark theme
To use "dark themed section" you need to add the following CCS class: <code>" msds-section\--dark"</code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@section-radio-dark'}}</div>
</div>

Below is an example of the Milestone Dark Themed Expanding Section that you can copy into your solution to utilize the component. 

```html
{{render '@section-radio-dark'}}
```

### Section with nested components
Components can be nested inside of Expanding sections by putting your desired components markup inside of an expanding section.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@section-radio-nested-accordion'}}</div>
</div>

Below is an example below to get an overview of nesting components inside an expanding section

```html
{{render '@section-radio-nested-accordion'}}
```