const path = require('path')
const fractal = module.exports = require('@frctl/fractal').create()

// Project title
fractal.set('project.title', 'Milestone Web Design System')

/*
 * Components config
 */
fractal.components.set('path', path.join(__dirname, 'components'))
// fractal.components.set('default.preview', '@preview');

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
  open: true
})
