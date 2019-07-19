---
title: Spacing
---
<p>Spacing is related to both margin and padding</p> 

<p>The implementation is a configuration of [bootstrap spacing utility](https://getbootstrap.com/docs/4.3/utilities/spacing/).</p>

<h3>Current configuration values are:</h3>

``` SCSS
$spacers: (
  1: 4px,    // 0.25rem
  2: 8px,    // 0.5rem
  3: 12px,   // 0.75rem
  4: 16px,   // 1rem
  5: 20px,   // 1.25rem
  6: 24px,   // 1.5rem
  7: 32px,   // 2rem
  8: 40px,   // 2.5rem
  9: 48px,   // 3rem
  10: 64px,  // 4rem
  11: 80px,  // 5rem
  12: 96px,  // 6rem
  13: 112px, // 7rem
  14: 160px  // 10rem
);
```

<h3>Usage examples - Classes: (*For more details lookup [bootstrap spacing utility](https://getbootstrap.com/docs/4.3/utilities/spacing/)*)</h3>

```<div class="mx-4"></div>``` -- Will add 1rem margin __all around__<br>
```<div class="mr-4"></div>``` -- Will add 1rem margin __right__<br>
```<div class="px-4"></div>``` -- Will add 1rem padding __all around__<br>
```<div class="pt-4"></div>``` -- Will add 1rem padding __top__<br>

<h3>Usage examples: (From code)</h3>
``` SCSS
.test {
	margin: map-get($spacers, 4);
	padding: map-get($spacers, 4) map-get($spacers, 2);
}
```
