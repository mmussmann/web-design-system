---
title: CSS & SCSS Guidelines
---
### Build on bootstrap
This project is build on top of bootstrap which means we are forced to use bootstrap class names. e.g. '.cards', this also means that when adding new bootstrap components to the project it should be considered a breaking change and version number increased in line with [Semantic Versioning](https://semver.org/)

To see a list of parts imported from bootstrap go to the code and read _**src/scss/bootstrapImport.scss**_

### Class prefix
When adding custom classes not releated to bootstrap they should always be prefixed with **msds-***

### BEM
All custom classes should be written with [BEM syntax](http://getbem.com/introduction/)
