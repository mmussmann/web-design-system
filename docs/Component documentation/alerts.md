---
title: Alerts
---

## The alerts are used everywhere on the website to notify users about promotions or issues
Below you will find the different definitions and options to alerts

### Table of contents
<div class="row">
    <div class="col-12">
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#overview">Overview</a>
            </li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                  <a class="msds-link"href="#global-definition">Global Definition</a>
                </li>
                <li class="document__unordered-list-item"> 
                    <a class="msds-link"href="#alerts-with-a-badge-and-state">Alerts with a badge and state</a>
                </li>
                <li class="document__unordered-list-item"> 
                    <a class="msds-link"href="#alerts-without-an-image">Alerts without an image</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link"href="#alerts-with-extra-attention">Alerts with extra attention button</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link"href="#alerts-that-are-visible-after-refreshing-the-page">Alerts that are visible after refreshing the page</a>
                </li>
                <li class="document__unordered-list-item">
                  <a class="msds-link"href="#alerts-that-are-visible-again-after-30-days-or-until-cookies-are-cleared">Alerts that are visible again after 30 days or until cookies are cleared</a>
                </li>
                <ul class="document__unordered-list">
                    <li class="document__unordered-list-item">
                    <a class="msds-link"href="#alerts-can-have-an-option-to-be-hidden-for-30-days-based-on-user-interaction">Alerts can have an option to be hidden for 30 days based on user interaction</a>
                    </li>
                </ul>
            </ul>
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#themes">Themes</a>
            </li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item"> 
                    <a class="msds-link"href="#light-theme-left-border">Light Theme Left Border</a>
                </li>
                <ul class="document__unordered-list">
                    <li class="document__unordered-list-item">
                       <a class="msds-link"href="#red-border-light">Red Border</a>
                    </li>
                    <li class="document__unordered-list-item">
                        <a class="msds-link"href="#blue-border-light">Blue Border</a>
                    </li>
                    <li class="document__unordered-list-item">
                        <a class="msds-link"href="#green-border-light">Green Border</a>
                    </li>
                </ul>
                <li class="document__unordered-list-item"> 
                    <a class="msds-link"href="#dark-theme-left-border">Dark Theme Left Border</a>
                </li>
                <ul class="document__unordered-list">
                    <li class="document__unordered-list-item">
                        <a class="msds-link"href="#yellow-border-dark">Yellow Border</a>
                    </li>
                    <li class="document__unordered-list-item">
                        <a class="msds-link"href="#green-border-dark">Green Border</a>
                    </li>
                </ul>
            </ul>
        </ul>
    </div>
</div>

## Overview
### Global Definition
Alerts can be setup to be visible again after a page refresh, or after 30 days.

Alerts left borders can be changed using modifier classes, the modifiers depend on the theme that is being used for the specific alert.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-default'}}</div>
</div>

### Alerts with a badge and state
Alerts can be setup with a badge and additional information, to do this add the "<code>msds-alert__alert-badge</code>" element or the state element "<code>msds-alert__header-state</code>"

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-default-solution-with-badge-and-ready-state'}}</div>
</div>

```html
{{render '@alert-default-solution-with-badge-and-ready-state'}}
```

### Alerts without an image
Alerts can be setup without an image/icon by removing the image container"<code>msds-alert__image</code>"

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-default-without-image'}}</div>
</div>

```html
{{render '@alert-default-without-image'}}
```

### Alerts with extra attention
Alerts can have an additional button by adding a second "<code>msds-btn</code>" with your desired styling eg:"<code>msds-btn--gray</code>" inside the "<code>msds-alert__action-container</code>" element.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-default-extra-attention'}}</div>
</div>

```html
{{render '@alert-default-extra-attention'}}
```


### Alerts that are visible after refreshing the page
To use an alert that will be visible after page refresh, use the standard markup for an alert

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-visible-after-refresh'}}</div>
</div>

```html
{{render '@alert-visible-after-refresh'}}
```

### Alerts that are visible again after 30
To use an alert that will remain hidden for 30 days, use the standard markup for alerts and add "<code>msds-alert--stay-hidden</code>" to the main HTML element.

This version of the alerts does use cookies, so please ensure GDPR compliance when using alerts that need to remain hidden.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-hidden-after-refresh'}}</div>
</div>

```html
{{render '@alert-hidden-after-refresh'}}
```

#### Alerts can have an option to be hidden for 30 days based on user interaction
The alert can setup to have an option, where the user can choose to see the alert again by using a checkbox.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-hidden-after-refresh-checkbox'}}</div>
</div>

```html
{{render '@alert-hidden-after-refresh-checkbox'}}
```

### Themes
The light theme is applied by default to alerts, to utilize the dark themed alert, use "<code>msds-alert--dark-theme</code>" CSS class
#### Light Theme Left Border
Light themed alerts have three different options:
- Red - Indicates warnings, the red border is used by default
- Blue - Indicates generic notifications
- Green - Indicates success notifications

###### Red Border Light
To use a left banner that is red use "<code>msds-alert</code>"

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-default'}}</div>
</div>

```html
{{render '@alert-default'}}
```

###### Blue Border Light
To use a left banner that is blue use "<code>msds-alert--generic</code>"

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-default-generic'}}</div>
</div>

```html
{{render '@alert-default-generic'}}
```

###### Green Border Light
To use a left banner that is green use "<code>msds-alert--solution</code>"

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-default-solution'}}</div>
</div>

```html
{{render '@alert-default-solution'}}
```

#### Dark Theme Left Border
To use a Dark Themed alert use "<code>msds-alert--dark-theme</code>"
themed alerts have three different options:
- Yellow - Indicates warnings, the yellow border is used by default
- Green - Indicates success notifications

###### Yellow Border Dark
To use a left banner that is blue use "<code>msds-alert--dark-theme</code>"

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-dark-theme-default'}}</div>
</div>

```html
{{render '@alert-dark-theme-default'}}
```

###### Green Border Dark
To use a left banner that is green use "<code>msds-alert--dark-theme msds-alert--solution</code>"

The alerts have multiple customization options that will be listed below

<div class="element-preview">
  <div class="element-preview__inner">{{render '@alert-dark-theme-solution'}}</div>
</div>

```html
{{render '@alert-dark-theme-solution'}}
```