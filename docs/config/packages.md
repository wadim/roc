# `packages`

Defined in the [Roc configuration object](/docs/config/README.md), often referred to as `roc.config.js`, and contains what packages to use.

By default will Roc search through the `dependencies` and `devDependencies` within the project `package.json` and find every dependency that matches `roc-package-*` and use that for the application. The order of them will be based on the order within `package.json` and is not guaranteed. External factors like `npm` can modify this.

If a specific order is needed, a subset of the Roc packages should be used or if some packages do not match the pattern mentioned above one can define exactly what should be used and in what order using `packages`. This should be an array with names to installed modules. Roc will expect that these modules have a default export that exposes at least an object named `roc`.
