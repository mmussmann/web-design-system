---
title: Rich Icons
---

#### Format 1:1 SVG (Exported in 128 x 128 px)
Animations done with CSS

### Table of contents
<div class="row">    
    <div class="col-md-6">
      <ul class="document__unordered-list">
        <li class="document__unordered-list-item"><a  class="msds-link"href="#overview">Overview</a></li>
        <li class="document__unordered-list-item"><a  class="msds-link"href="#generic-icons">Generic Icons</a></li>
        <li class="document__unordered-list-item"><a  class="msds-link"href="#marketplace-icons">Marketplace Icons</a></li>
      </ul>     
    </div>
</div>

## Overview
Here is how to use and render Rich Icon in our implementations. We have categorized them in 2, the generic and Marketplace rich icons. Here is the source.

As a class
```
<div class="name-of-rich-icon"></div>
```

Or as embedded image
```
<img src="path/to/svg/name-of-rich-icon-file.svg" alt=""/>
```

## Generic Icons
The generic icons are the common Rich icons used on our website.

<div class="element-preview">
  <div class="element-preview__inner">
        {{render '@generic-rich-icons'}}
  </div>
</div>

## Marketplace Icons
The Marketplace rich icons are mostly used on Marketplace.
<div class="element-preview">
  <div class="element-preview__inner">
        {{render '@marketplace-rich-icons'}}
  </div>
</div>

<script>
  //Iniliazes JS each time a user changes the page - this is for fractle v1.3.0
  dispatchEvent(new Event('load'));
</script>