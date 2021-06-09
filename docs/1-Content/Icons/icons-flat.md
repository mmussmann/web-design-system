---
title: Flat Icons
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
Here is how to use and render Flat Icon in our implementation. We have categorized them in 2, the generic and Marketplace flat icons. Here is the source

```
<svg title="flat-icon">
    <use href="/msds-spritemap.svg#name-of-flat-icon"></use>
</svg>
```

## Generic Icons
The generic icons are the common Flat icons used on the entire website.
<div class="element-preview">
  <div class="element-preview__inner">
        {{render '@generic-flat-icons'}}
  </div>
</div>

## Marketplace Icons
The Marketplace Flat icons are mostly used on Marketplace.
<div class="element-preview">
  <div class="element-preview__inner">
        {{render '@marketplace-flat-icons'}}
  </div>
</div>

<script>
  //Iniliazes JS each time a user changes the page - this is for fractle v1.3.0
  dispatchEvent(new Event('load'));
</script>