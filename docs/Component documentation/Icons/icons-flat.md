---
title: Flat Icons
---

#### Format 1:1 SVG (Exported in 128 x 128 px)
Animations done with CSS

<div class="row">
    <div class="col-6">
      <ul class="document__unordered-list">
        <li class="document__unordered-list-item">
          <a  class="msds-link"href="#generic-icons">Generic Icons</a>
        </li>
        <li class="document__unordered-list-item">
          <a  class="msds-link"href="#marketplace-icons">Marketplace Icons</a>
        </li>
      </ul>
    </div>
</div>

### Generic Icons

<div class="element-preview">
  <div class="element-preview__inner">
        {{render '@generic-flat-icons'}}
  </div>
</div>

### Marketplace Icons

<div class="element-preview">
  <div class="element-preview__inner">
        {{render '@marketplace-flat-icons'}}
  </div>
</div>

<script>
  //Iniliazes JS each time a user changes the page - this is for fractle v1.3.0
  dispatchEvent(new Event('load'));
</script>