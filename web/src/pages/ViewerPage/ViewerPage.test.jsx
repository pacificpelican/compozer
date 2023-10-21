import { render } from '@redwoodjs/testing/web'

import ViewerPage from './ViewerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ViewerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewerPage />)
    }).not.toThrow()
  })
})
