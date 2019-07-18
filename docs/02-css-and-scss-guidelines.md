---
title: CSS & SCSS Guidelines
---
### Build on bootstrap
<p>This project is build on top of bootstrap grid and utilities, which means that classes from those areas will not be prefixed with msds-* and can cause potential conflicts.<p>
<p>Before using this project read below documentation and try to get an overview of whether or not this would cause an issue.</p>

Overview of classnames from bootstrap:
[Utilities documentation](https://getbootstrap.com/docs/4.3/utilities/borders/)
[Grid documentation](https://getbootstrap.com/docs/4.3/layout/grid/)

### Class prefix
When adding custom classes not releated to bootstrap they should always be prefixed with **msds-***

### BEM
All custom classes should be written with [BEM syntax](http://getbem.com/introduction/)
