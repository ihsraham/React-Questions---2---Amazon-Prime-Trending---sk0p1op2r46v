import React, { useState } from "react";

function Slides(props) {
  const [page, setPage] = useState(0);
  return (
    <>
      <h1 data-testid="title">{props.slides[page].title}</h1>
      <p data-testid="text">{props.slides[page].text}</p>
      <button
        data-testid="button-next"
        onClick={() => setPage(page + 1)}
        disabled={page === props.slides.length - 1}
      >
        Next
      </button>
      <button
        data-testid="button-prev"
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
      >
        Previous
      </button>
      <button
        data-testid="button-restart"
        onClick={() => setPage(0)}
        disabled={page === 0}
      >
        Restart
      </button>
    </>
  );
}

export default Slides;
