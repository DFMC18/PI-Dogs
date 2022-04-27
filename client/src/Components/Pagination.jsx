import React from "react";

export default function Pagination({ dogsPerPage, allDogs, pagination }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumber &&
          pageNumber.map((num) => (
            <ul key={num}>
              <button onClick={() => pagination(num)}>
                <strong>{num}</strong>
              </button>
            </ul>
          ))}
      </ul>
    </nav>
  );
}
