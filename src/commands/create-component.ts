import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import {writeFile} from 'fs'
import * as mkdirp from 'mkdirp'

import {
  indexJs,
  nameJs,
  nameMdxJs,
  nameTestJs
} from '../file-helpers/create-files-react'

const success = chalk.green('success')

export default class CreateComponent extends Command {
  static aliases = ['cc']
  static description = 'creates a new react class component at the given path'

  static flags = {
    help: flags.help({char: 'h'})
  }

  // parse arguments from their positions into named arguments
  static args = [{name: 'path'}]

  async run() {
    const {args} = this.parse(CreateComponent)

    // Get the path, assume it has the final component name at the end
    const path = args.path

    if (!path) {
      this.error('Please provide a path')
      return
    }
    const pathArr = path.split('/')
    const name = pathArr[pathArr.length - 1]

    mkdirp(`${path}`, err => {
      if (err) {
        this.log(err.message)
      } else {
        // Write index.js file
        writeFile(`${path}/index.js`, indexJs(name), err => {
          if (err) {
            this.log(err.message)
          } else {
            this.log(`${success} - ${path}/index.js`)
          }
        })

        // Write Name.js file
        writeFile(`${path}/${name}.js`, nameJs(name), err => {
          if (err) {
            this.log(err.message)
          } else {
            this.log(`${success} - ${path}/${name}.js`)
          }
        })

        // Write Name.test.js file
        writeFile(`${path}/${name}.test.js`, nameTestJs(name), err => {
          if (err) {
            this.log(err.message)
          } else {
            this.log(`${success} - ${path}/${name}.test.js`)
          }
        })

        // Write Name.mdx
        writeFile(`${path}/${name}.mdx`, nameMdxJs(name), err => {
          if (err) {
            this.log(err.message)
          } else {
            this.log(`${success} - ${path}/${name}.mdx`)
          }
        })
      }
    })
  }
}
