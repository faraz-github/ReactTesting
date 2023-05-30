import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { Users } from './users'
import { server } from '../mocks/server'

// Now we will learn how to mock the api http requests

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  // Now we test using msw

  test('renders a list of users', async () => {
    render(<Users />)

    const users = await screen.findAllByRole('listitem')

    // A good alternative would be to create mock array in diffrent file to used where needed and so the array.length
    expect(users).toHaveLength(3)
  })

  // How to render errors using msw api mocks
  // For diffrent handlers

  test('renders error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typeicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )

    render(<Users />)

    const error = await screen.findByText('Error fetching users')

    expect(error).toBeInTheDocument()
  })
})
