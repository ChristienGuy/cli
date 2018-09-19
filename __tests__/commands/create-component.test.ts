// tslint-env jest
// import {test} from '@oclif/test'

const mockFs = require('mock-fs')

afterAll(() => {
  mockFs.restore()
})

describe('create-component', () => {
  mockFs({
    testFolder: {}
  })

  it('runs tests', () => {
    console.log('test')
  })
  // test
  //   .stdout()
  //   .command(['create-component', 'testFolder/NavBar'])
  //   .it('runs create-component', () => {
  //     console.log('run')

  //     // expect(existsSync('test/NavBar')).to.equal(true)
  //   })
  mockFs.restore()
})
