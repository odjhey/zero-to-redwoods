import { render } from '@redwoodjs/testing/web'

import BannerMessage from './BannerMessage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BannerMessage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BannerMessage />)
    }).not.toThrow()
  })
})
