---
title: Select input 
---
## On this page we will go through our Select input component 

We have defined two different select inputs. One default which is the large version and one small. Below you will find the way to integrate our select element component into your implementations.

## Overview
### Global Definition
Each select input component is based on a global CSS class called "msds-select-input". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work. You can find mainly 2 types of select inputs, the default select inputs which is the large version and a smaller version.

In order the select inputs to work, you need to create a variable from the window.msds.select-input object defined in our select-input.js then call the init function specifying the id of element it is linked to which represents the instance of the select input well. The options represents the different values availble in the select dropdown, validationMsg is a string that should be shown if the component is not validated. placeholder represents the placeholder in the initial load of the component and finally the isRequired is a boolean that determins whether or not the component is required to be filled out.

Also, note that the select inputs width is adaptive which means that it is based on the parent placeholder width.


### Table of contents
<div class="row">
    <div class="col-4">   
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item">
                <a class="msds-link" href="#overview">Overview</a>
                <ul class="document__unordered-list"> 
                   <li class="document__unordered-list-item"> 
                        <a class="msds-link" href="#global-definition">Global Definition</a>
                    </li>
                   <li class="document__unordered-list-item"> 
                        <a class="msds-link" href="#sizes">Sizes</a>
                   </li>
                   <li class="document__unordered-list-item"> 
                        <a class="msds-link" href="#features">Features</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>    
</div>

## Overview
### Global Definition

<div class="element-preview">
  <div class="element-preview__inner">{{render '@select-input-global-definition'}}</div>
</div>

```html
{{render '@select-input-global-definition'}}
```

```javascript

    //Initialize the select input with the element id, an object of countries, a validation message, a place holder and required is true.
    const input = new SelectInput('input-1',{ dk: 'Denmark', en: 'England', po: 'Poland' },'validationMsg','Select Country',true)
    input.init()
```

 ### Sizes

Our select input can be rendered in 2 different sizes, large (default) and small.

<div class="element-preview">
    <div class="element-preview__inner container">
        <div class="row">
            {{render '@select-input-default'}}
            {{render '@select-input-small'}}
        </div>
    </div>
</div>

```html
{{render '@select-input-default'}}
```
```html
{{render '@select-input-small'}}
```

### Features
By default our select input is not set to requried. However, its possible to set the required flag when creating the object.
The required input is resembled by adding a star to the placeholder
<div class="element-preview">
    <div class="element-preview__inner">
        <h3>required </h3>
        {{render '@select-input-required'}}
    </div>
    <br>
    <div class="element-preview__inner">
        <h3>  Not required </h3>
        {{render '@select-input-not-required'}}
    </div>
</div>

#### Validation
<div class="element-preview">
    <div class="element-preview__inner">
        {{render '@select-input-error'}}
    </div>
</div>

```javascript
    //Initialize the select input with the element id, an object of countries, a validation message, a place holder and required is true.
    const input = new SelectInput('input-1',{ dk: 'Denmark', en: 'England', po: 'Poland' },'Error message','Select Country',true)
    input.init()
    input.isValid()
```

<script>
  //Iniliazes JS each time a user changes the page - this is for fractle v1.3.0
  dispatchEvent(new Event('load'));
</script>