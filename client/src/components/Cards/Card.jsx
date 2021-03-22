import React from 'react'

export default function Card ({ texts }) {
  console.log(texts)
  return (
    <div class='d-flex justify-content-center'>
      <div class='card' style={{ width: '50%' }}>
        <ul class='list-group list-group-flush flex-column-reverse'>
          {texts.map((r) => {
            return (
              <li class='list-group-item d-flex justify-content-between' key={r.idText}>
                {r.data.text}
                <span class='badge bg-primary'>
                  {r.data.palindrome && 'Palindrome'}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
