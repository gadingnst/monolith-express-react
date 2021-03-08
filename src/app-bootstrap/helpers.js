const { join, relative, basename, dirname } = require('path')
const { readdirSync, statSync, readFileSync } = require('fs')

function getAllFiles(dir) {
  const files = []

  readdirSync(dir)
    .map((m) => join(dir, m))
    .forEach((m) => {
      if (statSync(m).isDirectory()) {
        files.push(...getAllFiles(m))
      } else if (statSync(m).isFile() && m.endsWith('.tsx')) {
        files.push(m)
      }
    })

  return files
}

function getPages() {
  const dir = join(__dirname, '..', 'pages')
  const pageDetails = getAllFiles(dir).map((m) => {
    const content = readFileSync(m, 'utf8')
    const defaultRoute = `/${relative(dir, m).replace(/\.tsx$/, '').toLowerCase()}`
    const route = /export const route = '(.*)'/.exec(content)[1]

    return {
      path: m,
      modified: statSync(m).mtime,
      route: route || defaultRoute,
      folder: relative(__dirname, dirname(m)),
      name: basename(m).replace(/\.tsx$/, ''),
      content
    }
  })
  return pageDetails
}

module.exports = {
  getAllFiles,
  getPages
}