import { render } from '@redwoodjs/testing/web'

import Samurai from './Samurai'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const samurai = {
  id: 'asdlkfj',
  name: 'name1',
  age: 1,
}

describe('Samurai', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Samurai {...samurai} />)
    }).not.toThrow()
  })
})
