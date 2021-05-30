ES5,ES6,some ES7
ES means ECMAScript

compare two ways that import .js code

```html
<script type="module">
import * as THREE from './resources/threejs/r127/build/three.module.js';
 
...

</script>
```

```html
<script src="./resources/threejs/r127/build/three.js"></script>
```

in the upper one, you imported ```.js``` file as a module, in which you used ES6, and the lower one, you imported a .js file as a file, not a module!
take a look at two names ```three.module.js``` ```three.js``` , the first added /module inside it.

