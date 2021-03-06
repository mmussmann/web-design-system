const path = require('path')
const fractal = (module.exports = require('@frctl/fractal').create())

// Project title
fractal.set('project.title', 'Milestone Web Design System')

/*
 * Components config
 */
fractal.components.set('path', path.join(__dirname, 'components'))

/*
 * Docs config
 */
fractal.docs.set('path', path.join(__dirname, 'docs'))

/*
 * Web config
 */
fractal.web.set('static.path', path.join(__dirname, 'public'))
fractal.web.set('builder.dest', path.join(__dirname, '/build'))
fractal.web.set('server.sync', true)
fractal.web.set('server.syncOptions', {
  watchOptions: {
    ignored: path.resolve('src/scss/rich-icons.scss'),
  }
})

/*
 * Theming
 */
const customTheme = require('@frctl/mandelbrot')({
  favicon: '/src/demo-img/favicon.ico',
  nav: ['components', 'docs'],
  panels: ['html', 'view', 'context', 'info', 'notes'],
  styles: ['default', '/rich-icons-bundle.css', '/theme-overrides/styles.css', '/main.css'],
  scripts: ['default', '/design-system.js']
})
customTheme.addLoadPath(path.join(__dirname, '/theme-overrides'))
fractal.web.theme(customTheme)