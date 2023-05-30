import { render, screen } from '@testing-library/react'
import { CounterTwo } from './counter-two'
import user from '@testing-library/user-event'

// Now we learn how to mock in certain scenerios
// for eg. mocking a function that has to be passed in a component

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    const textElement = screen.getByText('Counter Two')
    expect(textElement).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    user.setup()

    // Here we try to pass incrementHandler and decrementHandlers in props which
    // accepts () => void; as the type
    // so to mock
    const incrementHandler = jest.fn() // this creates mock function
    const decrementHandler = jest.fn()

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    )

    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })

    await user.click(incrementButton)
    await user.click(decrementButton)

    // we check if the two mock fucntions have been used

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
