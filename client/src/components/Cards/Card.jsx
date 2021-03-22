import React, { useState, useEffect } from "react";

export default function Card({ textSumbit }) {
  return (
    <div class="d-flex justify-content-center" style={{ padding: "20px"}}>
      <div
        class="d-flex justify-content-center bg-light"
        style={{ width: "80%", padding: "18px", "flex-direction": "column"  }}
      >
        <h3 class="mb-auto p-3 bd-highlight">Results:</h3>
        <div class="d-flex justify-content-center">
        <div class="card" style={{ width: "50%" }}>
          <ul class="list-group list-group-flush flex-column-reverse">
            {textSumbit.map((r) => {
              return (
                <li class="list-group-item d-flex justify-content-between" >
                  {r.data.text}
                  <span class="badge bg-primary">
                    {r.data.palindrome && "Palindrome"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
