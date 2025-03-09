const fs = require('fs')
const path = require('path')

const copies = [
  {
    source: path.join(__dirname, 'package.json'),
    dest: path.join(__dirname, 'dist', 'package.json')
  },
  {
    source: path.join(__dirname, 'settings.ini'),
    dest: path.join(__dirname, 'dist', 'settings.ini')
  },
  {
    source: path.join(__dirname, 'setup.sh'),
    dest: path.join(__dirname, 'dist', 'setup.sh')
  }
]

copies.forEach(copy => {
  // Files will be overwritten by default
  const { source, dest } = copy
  fs.copyFile(source, dest, (err) => {
    if (err) {
      throw err
    } else {
      console.debug(`${source} was copied to ${dest}`)
    }
  })
})
