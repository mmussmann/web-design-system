---
title: Links
---

## In this section, we are going to give you an overview of how Milestone Systems website links are defined.

### Table of contents
<div class="row">    
    <div class="col-md-6">
      <ul class="document__unordered-list">
        <li class="document__unordered-list-item"><a class="msds-link" href="#overview">Overview</a></li>
        <li class="document__unordered-list-item">
          <a class="msds-link" href="#primary">Primary Links</a>
          <ul class="document__unordered-list">        
            <li class="document__unordered-list-item"><a class="msds-link" href="#primary-link-overview">Overview</a></li>
            <li class="document__unordered-list-item">
              <a class="msds-link" href="#on-light-background-colors">On Light background Colors</a>
            </li>  
            <li class="document__unordered-list-item">
              <a class="msds-link" href="#on-dark-background-colors">On Dark background Colors</a>
            </li>         
          </ul> 
        </li>
        <li class="document__unordered-list-item">
          <a class="msds-link" href="#primary">Secondry Links</a>          
        </li>               
      </ul>     
    </div>
</div>

## Overview 
Milestone links have been defined in three types, primary, secondary and custom links. 

The custom links are specific to a context (block or sections) such as header, footer, cards etc... Their definition will overwrite the primary link definition.

Therefore on this page we will focus on the primary and secondary link definitions based on light or dark background.


## Primary Links 

### Primary Link Overview
The primary links are our default and don't require any specific CSS class. The styling will be applied automatically on any links. The definition will be overwritten if the link is of type secondary or custom link.

We have designed different links based on the background color used on the page/block. Based on the background selection in the block/page property, the links will automatically get the correct styling. No need to add extra CSS classes. Therefore we are not adding the HTML code under the primary link representation.


### On Light background Colors
Below is the styling of Milestone primary links used on light background colors. The representation is showing the primary links on each of what is considered light background colors.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography-links-light-theme'}}</div>
</div>

### On Dark background Colors
Below is the styling of Milestone primary links used on dark background colors. The representation is showing the primary links on each of what is considered dark background colors.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography-links-dark-theme'}}</div>
</div>

## Secondary Links 
The secondary links are used for specific cases where we would like to avoid to highlight the link. For that reason, the link will keep the current text color in which it belongs.

To perform this styling, we need to apply a specific CSS class called "msds-link--secondary". 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography-links-secondary'}}</div>
</div>

```html
{{render '@typography-links-secondary'}}
```
