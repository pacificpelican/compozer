import { render } from '@redwoodjs/testing/web'

import CompozerPage from './CompozerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CompozerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompozerPage />)
    }).not.toThrow()
  })
})
