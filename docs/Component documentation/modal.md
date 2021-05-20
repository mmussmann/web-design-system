---
title: Modals
---

## The modals are used everywhere on the website to notify users about promotions or issues
Below you will find the different definitions and options to modals

### Table of contents
<div class="row">
    <div class="col-12">
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#overview">Overview</a>
            </li>
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#display-modal-on-load">Display modal on load</a>
            </li>
             <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#display-modal-on-click-event">Display modal on click event</a>
            </li>
        </ul>
    </div>
</div>

## Overview
Modals are visible, until the user closes the modal

Modals can be setup to display information, contain a form or contain a video. Modals do not have any Javascript functionality setup with cookies so developers would have to build that themselves. 


## Display modal on load
Modals can be displayed on page load

<div class="element-preview">
  <div class="element-preview__inner">{{render '@modal-on-load-demo'}}</div>
</div>

```html
{{render '@modal-on-load'}}
```

```javascript
    //Initialize the modal on page load
    if (document.querySelector('#modalOnLoad')) {
        const modalOnLoad = new msdsModal('modalOnLoad', {})
        modalOnLoad.showModal()
    }

```

## Display modal on click event
Modals can be displayed on click events

<div class="element-preview">
  <div class="element-preview__inner">{{render '@modal-on-click'}}</div>
</div>

```html
{{render '@modal-on-click'}}
```

```javascript
    //Initialize the modal on click events
    if (document.querySelector('#modalOnClick')) {
        const modalOnClick = new msdsModal('modalOnClick', {
        linkElementClass: 'show-modal'
        })
    }

```

<script>
    //Iniliazes JS each time a user changes the page - this is for fractle v1.3.0
    dispatchEvent(new Event('load'));
</script>