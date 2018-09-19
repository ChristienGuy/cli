import {expect, test} from '@oclif/test'
import {existsSync} from 'fs'

const mock = require('mock-fs')

mock({
  test: {}
})

describe('hello', () => {
  test
    .stdout()
    .command(['create-component test/Navbar'])
    .it('runs create-component', ctx => {
      existsSync('test/NavBar')
    })
})
