import React, { useState } from 'react'

export default function Nav({ onSubmit }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value)
  }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      onSubmit(text)
  }

  return (
    <nav class="navbar navbar-light bg-danger text-white">
      <div class="container-fluid justify-content-center">
        <form class="d-flex center" onSubmit={(e) => handleSubmit(e)}>
          <input
            value={text}
            class="form-control me-4"
            type="search"
            placeholder="Insert Text"
            aria-label="Search"
            onChange={onChange}
          />
          <button
            class="btn btn-outline-success bg-primary text-white"
            type="submit"
          >Send
          </button>
        </form>
      </div>
    </nav>
  );
}
