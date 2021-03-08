const { readFileSync, writeFileSync, mkdirSync } = require('fs')
const { basename, dirname, resolve } = require('path')

require = require('esm')(module)

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es6',
    jsx: 'react',
    importHelpers: true,
    moduleResolution: 'node'
  },
  transpileOnly: true
})

global.XMLHttpRequest = class {}
global.XDomainRequest = class {}
global.localStorage = {
  getItem() {
    return undefined
  },
  setItem() {}
}
global.document = {
  title: 'sample',
  querySelector() {
    return {
      getAttribute() {
        return ''
      }
    }
  }
}

const React = require('react')
const { MemoryRouter } = require('react-router')
const { renderToString } = require('react-dom/server')

React.lazy = () => () => React.createElement('div', undefined, 'Loading ...')
React.Suspense = ({ children }) => React.createElement(React.Fragment, undefined, children)
React.useLayoutEffect = () => {}

function setupExtensions(files) {
  ['.png', '.svg', '.jpg', '.jpeg', '.mp4', '.mp3', '.woff', '.tiff', '.tif', '.xml'].forEach(extension => {
    require.extensions[extension] = (module, file) => {
      const parts = basename(file).split('.')
      const ext = parts.pop()
      const front = parts.join('.')
      const ref = files.filter(m => m.startsWith(front) && m.endsWith(ext)).pop() || ''
      module.exports = '/' + ref
    }
  })

  require.extensions['.codegen'] = (module, file) => {
    const content = readFileSync(file, 'utf8')
    module._compile(content, file)
    const code = module.exports()
    module._compile(code, file)
  }
}

function renderApp(source, target, dist) {
  const sourceModule = require(source)
  const route = (sourceModule.route || target).substring(1)
  const Page = sourceModule.default
  const Layout = require('./Layout').default
  const element = React.createElement(
    MemoryRouter,
    undefined,
    React.createElement(Layout, undefined, React.createElement(Page))
  )
  return {
    content: renderToString(element),
    outPath: resolve(dist, route, 'index.html')
  }
}

function makePage(outPath, html, content) {
  const outDir = dirname(outPath)
  const file = html.replace(/<div id="app">(.*)<\/div>/, `<div id="app">${content}</div>`)

  mkdirSync(outDir, { recursive: true })
  writeFileSync(outPath, file, 'utf8')
}

process.on('message', msg => {
  const { source, target, files, html, dist } = msg
  setupExtensions(files)

  setTimeout(() => {
    const { content, outPath } = renderApp(source, target, dist)
    makePage(outPath, html, content)
    process.send({ content })
  }, 100)
})