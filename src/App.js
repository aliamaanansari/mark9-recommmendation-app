import "./App.css"
import { useState } from "react"

const bookDB = {
  javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      desc: "This book is all about JS programming",
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
      desc: "This book is all about JS programming",
    },
    {
      name: "Javascript the good part",
      rating: "3.5/5",
      desc: "This book is all about JS programming",
    },
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      desc: "This is a story book, you should read",
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      desc: "This is a story book, you should read",
    },
    {
      name: "The Sky is Pink",
      rating: "4.5/5",
      desc: "This is a story book, you should read",
    },
  ],
  business: [
    {
      name: "Never Split the Difference",
      desc: "Best business book out there, talks about negotiation",
      rating: "3.5/5",
    },
    {
      name: "Loonshots",
      rating: "5/5",
      desc: "Best business book out there, talk about business",
    },
    {
      name: "The Power of Habits",
      rating: "5/5",
      desc: "Best business book out there, talk about habit",
    },
  ],
}

export default function App() {
  const [selectedGenre, setGenre] = useState("business")
  function genreClickHandler(genre) {
    setGenre(genre)
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}>
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "1rem" }}> {book.desc} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
