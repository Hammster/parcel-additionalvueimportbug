const Bundler = require('parcel-bundler')
const path = require('path')

// Entrypoint file location
const file = path.join(__dirname, './src/renderer/index.html')

// Bundler Config
const options = {
  outDir: './dist',
  outFile: 'index',
  publicUrl: './',
  watch: false,
  cache: true,
  minify: false,
  logLevel: 3,
  hmrPort: 0,
  target: 'electron',
  sourceMaps: true,
  hmr: true,
  detailedReport: true
}

const bundler = new Bundler(file, options)
bundler.bundle()
