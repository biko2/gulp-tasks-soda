# GULP TASKS for Drupal __soda__ theme
![by Biko2](https://raw.githubusercontent.com/biko2/biko-repo-bagdes/master/png/biko-bagge-pill.png)
![GitHub last commit](https://img.shields.io/github/last-commit/biko2/gulp-tasks-soda.svg?style=plastic)
![npm](https://img.shields.io/npm/v/gulp-tasks-soda.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)



## Install
```
npm install gulp-tasks-soda --save
```

## Tasks

## Default paths
```javascript
var paths = {
    styles: {
      source: 'src/templates/',
      destination: 'assets/css/'
    },
    scripts: {
      source: 'src/templates/',
      destination: 'assets/js',

    },
    scriptsVendorFiles: [
      'node_modules/bootstrap/dist/js/bootstrap.js',
    ],
    images: {
      source: 'src/media/images/',
      destination: 'assets/images/'
    },
    fonts: {
      source: 'src/fonts/',
      destination: 'assets/fonts/'
    },
    styleGuide: 'styleguide',
    twigPages: {
      src: 'src/templates/' ,
      componentsSrc: 'src/templates/01-components/' ,
      componentBlocksSrc: 'src/templates/02-component-blocks/' ,
      pagesSrc: 'src/templates/03-pages/' ,
      destination: 'assets/pages/',
      componentsDestination:'assets/pages/01-components',
      componentBlocksDestination:'assets/pages/02-component-blocks',
      pagesDestination:'assets/pages/03-pages',
      componentTemplateSrc: 'src/templates/component-template.twig',
      componentBlockTemplateSrc: 'src/templates/component-block-template.twig'
    },
    svg : {
      source: 'src/media/svgs',
      destination: 'assets/svg',
      prefix: {
        dev: '',
        pro: '/svg/sprite'
      }
    }
  };

```

## Default options
```javascript
var options = {
    drupalLibraries: {
      destination:'./generated.libraries.yml'
    },
    // ----- Browsersync ----- //
    browserSync: {
      server: {baseDir: ['assets']},
      startPath: "/pages",
      port: 3005,
      online: false,

      open: true,
      logConnections: true,
    },

    // ----- CSS ----- //

    css: {
      files: path.join(paths.styles.destination, '**/*.css'),
      file: path.join(paths.styles.destination, '/styles.css'),
      destination: path.join(paths.styles.destination)
    },

    // ----- Sass ----- //

    sass: {
      files: path.join(paths.styles.source, '/**/*.scss'),
      file: path.join(paths.styles.source, 'styles.scss'),
      destination: path.join(paths.styles.destination),
      AUTOPREFIXER_BROWSERS: [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 9',
        'opera >= 23',
        'ios >= 8',
        'android >= 4.4',
        'bb >= 10'
      ]
    },

    // ----- JS ----- //
    js: {
      files: path.join(paths.scripts.source, '**/*.js'),
      compiledFiles: path.join(paths.scripts.destination, '**/*.js'),
      vendorFiles: paths.scriptsVendorFiles,
      destination: path.join(paths.scripts.destination),
      vendorDestination: path.join(paths.scripts.destination,'vendors')
    },

    // ----- eslint ----- //
    jsLinting: {
      files: {
        theme: [
          paths.scripts.source + '**/*.js',
          '!' + paths.scripts.source + '**/*.min.js'
        ],
        gulp: [
          'gulpfile.js',
          'gulp-tasks/**/*'
        ]
      }

    },
    // ----- Fonts ----- //
    fonts: {
      files: paths.fonts.source + '**/*.{ttf,woff,otf,eot,svg,woff2}',
      destination: paths.fonts.destination
    },
    // ----- Images ----- //
    images: {
      files: paths.images.source + '**/*.{png,gif,jpg,svg,xml,webmanifest}',
      destination: paths.images.destination
    },
    // ----- TWIG pages ---- //
    twigPages: {
      baseSrc: path.join(paths.twigPages.src),
      src: path.join(paths.twigPages.src, '/*.twig'),
      componentsSrc: path.join(paths.twigPages.componentsSrc, '/**/*.twig'),
      componentBlocksSrc: path.join(paths.twigPages.componentBlocksSrc, '/**/*.twig'),
      pagesSrc: path.join(paths.twigPages.pagesSrc, '/**/*.twig'),
      allSrc: path.join(paths.twigPages.src, '/**/*'), //Needed for watch task
      destination: path.join(paths.twigPages.destination),
      componentsDestination: path.join(paths.twigPages.componentsDestination),
      componentBlocksDestination: path.join(paths.twigPages.componentBlocksDestination),
      pagesDestination: path.join(paths.twigPages.pagesDestination),
      componentTemplateSrc: path.join(paths.twigPages.componentTemplateSrc),
      componentBlockTemplateSrc: path.join(paths.twigPages.componentBlockTemplateSrc)
    },

    svg: {
      files: path.join(paths.svg.source, '**/*.svg'),
      destination: path.join(paths.svg.destination),
      mode: {
        symbol: { // symbol mode to build the SVG
          render: {
            css: true, // CSS output option for icon sizing
            scss: true // SCSS output option for icon sizing
          },
          dest: 'sprite', // destination folder
          prefix: '.svg--%s', // BEM-style prefix if styles rendered
          sprite: 'sprite.svg', //generated sprite name
          example: true // Build a sample page, please!
        }
      },
      prefix: paths.svg.prefix
    },

  }

```
## Example `gulpfile.js` for a `Drupal theme`

```javascript

var customPaths = {};
var customOptions = {};

var gulp = require('gulp');
var fs = require('fs');

if (fs.existsSync('./gulpfile.custom.paths.js')) {
  customPaths = require('./gulpfile.custom.paths.js');
}
if (fs.existsSync('./gulpfile.custom.options.js')) {
  customOptions = require('./gulpfile.custom.options.js');
}

require('gulp-tasks-soda')(gulp,customPaths,customOptions);

```