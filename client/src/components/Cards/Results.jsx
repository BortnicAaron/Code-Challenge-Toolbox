import React from 'react'
import Card from './Card.jsx'

export default function Results ({ texts }) {
  return (
    <div class='d-flex justify-content-center' style={{ padding: '20px' }}>
      <div
        class='d-flex justify-content-center bg-light'
        style={{ width: '80%', padding: '18px', 'flex-direction': 'column' }}
      >
        <h3 class='mb-auto p-3 bd-highlight'>Results:</h3>
        <Card texts={texts} />
      </div>
    </div>
  )
}
