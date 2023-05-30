import { render, screen } from '../../test-utils' // Now we have a custom render with providers
import { MuiMode } from './mui-mode'

// Now we will try testing components with providers
// As they share information passed through providers
// Some tests can fail

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')

    expect(headingElement).toHaveTextContent('dark mode')
  })
})
