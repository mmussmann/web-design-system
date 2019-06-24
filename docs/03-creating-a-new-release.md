---
title: Creating a new release guidelines
---
### We should try to follow [semantic versioning](https://semver.org/)
* **MAJOR** version when you make incompatible API changes<br>
_E.g. Adding new none prefixed bootstrap classes	<br><br>_
* **MINOR** version when you add functionality in a backwards-compatible manner<br>
_E.g. Adding a new msds-* prefixed class <br><br>_
* **PATCH** version when you make backwards-compatible bug fixes.<br>
_E.g. Fixing a bug in existing code without changing API(Classes etc..)_

### Steps to follow.
Go to github repository under (releases)[https://github.com/milestone-sys/web-design-system/releases], add your new tag and save. 

This will trigger a automated travis-ci deploy to the (package on npm)[https://www.npmjs.com/package/@milestone-sys/web-design-system]