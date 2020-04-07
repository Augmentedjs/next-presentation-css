# next-presentation-css
Augmented.js Presentation SASS/CSS Module

# What this is
Augmented.js Presentation CSS is a custom implementation of Google's Material Design. See [Material Design](https://material.io). The difference from other libraries is the idea it could be used everywhere regardless of framework.  Also, the animations are *pure* css vs javascript, so some things will not be 100% but more performant with less footprint.

# Versions
Presentation CSS comes in versions 2+.  
* 1.x.x is built-in to Augmented.js Presentation as an included CSS (Not for use with Augmented Next)
* 2.x.x is for older CSS design systems (Material 1.x)
- Use with older Augmented Next apps
* 3.x.x is fully SASS-based (Material 1.x) and for newer apps with a SASS build system
- Does include a compiled CSS for non-SASS apps
* 4.x.x is fully SASS-based (Material 2.x) and for newer apps with a SASS build system  
- Does include a compiled CSS for non-SASS apps
- Includes a Dark Mode Theme under /src/dark

# Install
Install using NPM
> `npm install presentation-css`

## Specific version install
> `npm install presentation-css@2`

# Usage

## Use source sass
For use in a project, import directly.

> `import sass from "presentation-css";`
- or -
> `import "presentation-css";`

## Use compiled css

> `import css from "./node_modules/presentation-css/src/material-generic.css";`
or
> `import "./node_modules/presentation-css/src/material-generic.css";`

## Dark Mode

> `import dark from "./node_modules/presentation-css/src/dark/darkmode.scss";`
or
> `import "./node_modules/presentation-css/src/dark/darkmode.scss";`
