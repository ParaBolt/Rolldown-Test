## Setup
- A simple Vue component has been created with a "style" block.
- [Library Mode](https://vite.dev/guide/build#library-mode) is used to output the final build
- ``LibraryOptions.name`` contains a ".". Eg. ``app.namespace``
- ``LibraryOptions.formats`` is set to ``["iife"]``
- RollupError: Injection point for inlined CSS not found

## The Problem

After running the build with the above setup, the build fails with the following console error :-

````
error during build:
Build failed with 1 error:

[plugin vite:css-post]
RollupError: Injection point for inlined CSS not found
````
