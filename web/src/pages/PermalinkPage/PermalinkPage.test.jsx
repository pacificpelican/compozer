import { render } from '@redwoodjs/testing/web'

import PermalinkPage from './PermalinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PermalinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PermalinkPage />)
    }).not.toThrow()
  })
})
