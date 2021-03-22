import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Nav from '../components/Nav/Nav.jsx'

describe('Nav', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    act(() => {
      render(<Nav/>, container)
    })
  })

  it('input --- button', async () => {
    const input = container.querySelector('input')
    const button = container.querySelector('button')
    expect(!!input).toBe(true)
    expect(input.placeholder).toBe('Insert Text')
    expect(!!button).toBe(true)
    expect(button.innerHTML).toBe('Send')
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })
})
