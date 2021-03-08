const path = require('path')
const { readFileSync, readdirSync } = require('fs')
const { fork } = require('child_process')
const { getPages } = require('./helpers')

function generatePage(page, files, html, dist) {
  const modPath = path.resolve(__dirname, 'ssg-kernel.js')

  console.log(`Processing page "${page.name}" ...`)

  return new Promise((resolve, reject) => {
    const ps = fork(modPath, [], {
      cwd: process.cwd(),
      stdio: 'ignore',
      detached: true
    })

    ps.on('message', () => {
      console.log(`Finished processing page "${page.name}".`)
      resolve()
    })

    ps.on('error', () => reject(`Failed to process page "${page.name}".`))

    ps.send({
      source: page.path,
      target: page.route,
      files,
      html,
      dist
    })
  })
}

function generatePages() {
  const dist = path.resolve(__dirname, '..', '..', 'dist')
  const index = path.resolve(dist, 'index.html')
  const files = readdirSync(dist)
  const html = readFileSync(index, 'utf8')
  const pages = getPages()
  return Promise.all(pages.map(page => generatePage(page, files, html, dist)))
}

if (require.main === module) {
  generatePages()
    .then(() => 0, () => 1)
    .then(process.exit)
} else {
  module.exports = {
    generatePage,
    generatePages,
  }
}