

var pkg = require('../package.json');
var conf = module.exports = {};


//  FOLDERS  //
conf.folders = {
  src: './resources/assets',
  dest: './public',
  components: './resources/assets/components',
  modules: './node_modules'
};
//  FOLDERS  //


//  SCSS  //
conf.scss = {
  src: [
    conf.folders.src + '/scss/main.scss',
  ],
  base: conf.folders.src + '/scss/',
  dest: conf.folders.dest + '/css/',
  watch: [
    conf.folders.src + '/scss/**/*.scss',
  ],
  filter: '**/*.css'
};
//  SCSS  //


//  PHP  //
conf.php = {
  watch: [
    './resources/views/**/*.php',
    './app/**/*.php',
  ],
  filter: '**/*.php'
};
//  PHP  //


//  SCRIPTS  //
conf.scripts = {
  src: [
    conf.folders.src + '/js/*.js',
  ],
  base: conf.folders.src + '/js/',
  dest: conf.folders.dest + '/js/',
  watch: [
    conf.folders.src + '/js/**/*.js',
  ],
  filter: '**/*.js'
}
//  SCRIPTS  //


//  IMAGES  //
conf.images = {
  src: [
    conf.folders.src + '/img/**/*.{jpg,png,gif,svg}',
  ],
  base: conf.folders.src + '/img/',
  dest: conf.folders.dest + '/img/',
  watch: [
    conf.folders.src + '/img/**/*.{jpg,png,gif,svg}',
  ],
  filter: '**/*.{jpg,png,gif,svg}'
}
//  IMAGES  //


//  COPY  //
conf.copy = {
  media: {
    src: [
      conf.folders.src + '/media/**/*.{mp4,mp3}',
    ],
    base: conf.folders.src + '/media/',
    dest: conf.folders.dest + '/media/',
    watch: [
      conf.folders.src + '/media/**/*.{mp4,mp3}',
    ],
    filter: '**/*.{mp4,mp3}'
  },
  pdf: {
    src: [
      conf.folders.src + '/pdf/**/*.pdf',
    ],
    base: conf.folders.src + '/pdf/',
    dest: conf.folders.dest + '/pdf/',
    watch: [
      conf.folders.src + '/pdf/**/*.{pdf}',
    ],
    filter: '**/*.{pdf}'
  },
}
//  COPY  //

//  FONTS  //
conf.fonts = {
  src: [
    conf.folders.src + '/fonts/**/*',
  ],
  base: conf.folders.src + '/fonts/',
  dest: conf.folders.dest + '/fonts/',
  filter: ['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.otf']
}
//  FONTS  //


//  BOWER  //
conf.bower = {
  watch: [
    conf.folders.components,
    ' ./bower.json'
  ] ,
  overrides: {
    bootstrap: {
      main: ['./dist/js/bootstrap.js', './dist/css/bootstrap.css', './dist/fonts/*.*']
    },
    vegas: {
      main: ['./dist/vegas.js', './dist/vegas.css',]
    },
    lightbox2: {
      main: ['./dist/js/lightbox.js', './dist/css/lightbox.css']
    },
    swiper: {
      main: ['./dist/js/swiper.js', './dist/css/swiper.css']
    },
    parsleyjs: {
      main: ['./dist/parsley.js', './dist/i18n/es.js']
    },
    dropzone: {
      main: ['./dist/dropzone.css', './dist/dropzone.js']
    },
    selectize: {
      main: ['./dist/css/selectize.css', './dist/js/selectize.js']
    }
  }
};
//  BOWER  //


