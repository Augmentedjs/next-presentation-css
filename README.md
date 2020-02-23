# next-presentation-css
Augmented.js Presentation SASS/CSS Module

# What this is
Augmented.js Presentation is a custom implementation of Google's Material Design. See [Material Design](https://material.io). The difference from other libraries is the idea it could be used everywhere regardless of framework.  Also, the animation are *pure* css vs javascript, so some things will not be 100% but more performant with less footprint.

# Versions
Presentation CSS comes in versions 2+.  Version 1 is built-in to Augmented.js 1.x.x

* 2.x.x is for older CSS design systems (Material 1.x)
- Use with older Augmented Next projects
* 3.x.x is fully SASS-based (Material 1.x) and for newer projects with a SASS build system
- Does include a compiled CSS for non-SASS projects
* 4.x.x is fully SASS-based (Material 2.x) and for newer projects with a SASS build system  
- Does include a compiled CSS for non-SASS projects

# Install
Install using NPM
> `npm install presentation-css`

## Specific version install
> `npm install presentation-css@2`

# Usage

## Use source sass
For use in a project, import directly.

> `import sass from "presentation-css";`
> `import "presentation-css";`

## Use compiled css

> `import css from "./node_modules/presentation-css/src/material-generic.css";`
> `import "./node_modules/presentation-css/src/material-generic.css";`
