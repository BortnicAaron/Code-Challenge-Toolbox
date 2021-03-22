import React, { useState } from 'react'

export default function Nav ({ onSubmit }) {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(text)
    setText('')
  }

  return (
    <nav className='navbar navbar-light bg-danger text-white'>
      <div className='container-fluid justify-content-center'>
        <form className='d-flex' onSubmit={(e) => handleSubmit(e)}>
          <input
            value={text}
            className='form-control me-4'
            type='search'
            placeholder='Insert Text'
            aria-label='Search'
            onChange={onChange}
          />
          <button
            className='btn btn-outline-success bg-primary text-white'
            type='submit'
            style={{ 'margin-left': '5%' }}
          >Send
          </button>
        </form>
      </div>
    </nav>
  )
}
