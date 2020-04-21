---
title: Contact Cards
---

## The Contact Cards are used everywhere on the website to link between pages
## Below you will find the different definitions and options to create your Contact Cards

### Table of contents
<div class="row">
    <div class="col-12">
        <dl>
            <dt>[Overview](#overview)</dt>
            <dd>[Global Definition](#global-definition)</dd>
            <dd>[Sizes](#sizes)</dd>
        </dl>
        <dl>
            <dt>[Contact Card Default](#default-contact-card)</dt>
            <dd>[Contact Cards Default Large](#default-contact-card-large)</dd>
            <dd>[Contact Cards Default Small](#default-contact-card-small)</dd>
        </dl>
        <dl>
            <dt>[Contact Card Without An Image](#contact-card-without-an-image)</dt>
            <dd>[Contact Cards Without An Image Large](#contact-card-large-without-an-image)</dd>
            <dd>[Contact Cards Without An Image Small](#contact-card-small-without-an-image)</dd>
        </dl>   
        <dl>
            <dt>[Content Card](#content-contact-card)</dt>
        </dl>
    </div>
</div>

## Overview
### Global Definition
Each Contact Card is based on a global CSS class called <code>"msds-contact-card"</code>. It is important to include this class first as it is the main CSS class. Without this HTML class, you cannot utalize component. 
There are 3 types of Contact Cards:

1. The default Contact Card, the <i>default Contact Card</i> is used for lists of contacts
2. The second Contact Card has no image of the contact but has all the other information about the contact. The <i>Contact Card without an image</i> is used for lists of contacts
3. The third is a Content Contact Card has the following:
  - An image of the contact
  - The contacts name
  - A description of the contacts position
  - A button that can be used to forward a user to another page

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact'}}</div>
</div>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact-without-image'}}</div>
</div>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact-content'}}</div>
</div>


### Sizes
Our cards can be rendered in 2 different sizes, large, and small. In order to use small cards, add the following
- <code>"col-md-3"</code> instead of <code>"col-md-4"</code>
- <code>"msds-contact-card\--small"</code> to the same group of classes that has <code>"msds-contact-card"</code>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact'}}</div>
</div>

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact-small'}}</div>
</div>

## Default Contact Card
The default Contact Card has the following elements:
  - A headline for the contacts position
  - An image of the contact
  - The contacts name
  - A description of the contacts position
  - Links to reach the contact

### Default  Contact Card Large 
The default large Contact Card can be used by wrapping your <code>"msds-contact-card"</code> block with a <code>"col-md-4"</code> from Bootstrap.
Below is a example of the Milestone Large Contact Card. 

As mentioned before, these Contact Cards are intended to be used in lists.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact'}}</div>
</div>

```html
{{render '@contact'}}
```

### Default Contact Card Small
Below is a example of the Milestone Small Themed Contact Card. The small cards have reduced element sizes and reduced padding.
- The small cards have preset width based on bootstrap columns <code>"col-md-3"</code> and <code>"msds-contact-card--small"</code> as an extra class at the same level as <code>"msds-contact-card"</code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact-small'}}</div>
</div>

```html
{{render '@contact-small'}}
```

## Contact Card Without An Image
This Contact Card has a different layout to the default Contact Card

The Contact Card without an image has the following elements:
  - A headline for the contacts position
  - The contacts name
  - A description of the contacts position
  - Links to reach the contact

As mentioned before, these Contact Cards are intended to be used in lists.

### Contact Card Large Without An Image
The large Contact Card  without an image can be used by wrapping your <code>"msds-contact-card"</code> block with a <code>"col-md-4"</code> from Bootstrap.
Below is a example of the Milestone Large Contact Card. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact-without-image'}}</div>
</div>

```html
{{render '@contact-without-image'}}
```

### Contact Card Small Without An Image
Below is a example of the Milestone Small Themed Contact Card. The small cards have reduced element sizes and reduced padding.
- The small cards have preset width based on bootstrap columns <code>"col-md-3"</code> and <code>"msds-contact-card--small"</code> as an extra class at the same level as <code>"msds-contact-card"</code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact-without-image-small'}}</div>
</div>

```html
{{render '@contact-without-image-small'}}
```

## Content Contact Card
The Content Contact Card has the following elements:
  - An image of the contact
  - The contacts name
  - A description of the contacts position
  - A button that can be used to forward users to another page

The Content Contact Card can be used by wrapping your adding <code>"msds-contact-card\--content"</code> to the wrapper class containing <code>"msds-contact-card"</code>.

The Content Contact Card is intended to be used when you want to represent an author of a page or article.

Below is a example of the Milestone Large Contact Card. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@contact-content'}}</div>
</div>

```html
{{render '@contact-content'}}
```
