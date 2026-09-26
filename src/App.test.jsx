import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import '@testing-library/jest-dom/vitest'
import App from './App'

afterEach(() => {
  cleanup()
})

test('renders the App component', () => {
  render(<App />)

  const headingElement = screen.getByRole('heading', { 
    level: 1,
    name: /Vite \+ React/i 
  });
  expect(headingElement).toBeInTheDocument()
});