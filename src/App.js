import "./styles.css";
import React, { useState } from "react";

let booksLibrary = {
  Science: [
    ["A Brief History of Time - Stephen Hawking", 4.5],
    ["The Grand Design - Stephen Hawking", 4.3],
    ["Data Structures - Seymour Lipschutz", 4.3],
    ["You don't know js - Kyle Simpson", 4.7]
  ],
  Suspense: [
    ["The Murder of Roger Ackroyd - Agatha Christie", 4.8],
    ["Murder on the Orient Express - Agatha Christie", 4.6],
    ["The Mystery of the Blue Train - Agatha Christie", 4.4],
    ["Death on the Nile - Agatha Christie", 4.5]
  ],
  Philosophy: [
    ["Man's Search For Meaning - Viktor Frankl", 4.9],
    [
      "Thus Spoke Zarathustra: A Book for All and None - Friedrich Nietzsche",
      4.9
    ],
    ["The Gulag Archipelago - Aleksandr Solzhenitsyn", 4.7],
    ["The Stranger - Albert Camus", 4.5]
  ],
  Fiction: [
    ["Harry Potter - J.K. Rowling", 4.8],
    ["Percy Jackson - Rick Riordan", 4.5],
    ["Angels & Demons - Dan Brown", 4.6],
    ["Goosebumps - R.L. Stine", 4.3]
  ]
};

export default function App() {
  const [book1, setBook1] = useState(
    "A Brief History of Time - Stephen Hawking"
  );
  const [book2, setBook2] = useState("The Grand Design - Stephen Hawking");
  const [book3, setBook3] = useState("Data Structures - Seymour Lipschutz");
  const [book4, setBook4] = useState("You don't know js - Kyle Simpson");

  const [book1Rating, setBook1Rating] = useState(4.5);
  const [book2Rating, setBook2Rating] = useState(4.3);
  const [book3Rating, setBook3Rating] = useState(4.3);
  const [book4Rating, setBook4Rating] = useState(4.7);

  function onGenreClickHandler(event) {
    let genre = event.target.innerText;

    if (genre !== undefined) {
      setBook1(booksLibrary[genre][0][0]);
      setBook1Rating(booksLibrary[genre][0][1]);
      setBook2(booksLibrary[genre][1][0]);
      setBook2Rating(booksLibrary[genre][1][1]);
      setBook3(booksLibrary[genre][2][0]);
      setBook3Rating(booksLibrary[genre][2][1]);
      setBook4(booksLibrary[genre][3][0]);
      setBook4Rating(booksLibrary[genre][3][1]);
    }
  }

  return (
    <div className="App">
      <h1>Book Recommendations</h1>
      <h3>Check my book recommendations by selecting genre of your interest</h3>
      <hr />
      <div>
        <button onClick={onGenreClickHandler}>Science</button>
        <button onClick={onGenreClickHandler}>Suspense</button>
        <button onClick={onGenreClickHandler}>Philosophy</button>
        <button onClick={onGenreClickHandler}>Fiction</button>
      </div>
      <div className="container">
        <div className="container-recommendations">
          <div className="recommendations">
            <h4>Book : {book1}</h4>
            <h4>Rating : {book1Rating}</h4>
          </div>
        </div>
        <div className="container-recommendations">
          <div className="recommendations">
            <h4>Book : {book2}</h4>
            <h4>Rating : {book2Rating}</h4>
          </div>
        </div>
        <div className="container-recommendations">
          <div className="recommendations">
            <h4>Book : {book3}</h4>
            <h4>Rating : {book3Rating}</h4>
          </div>
        </div>
        <div className="container-recommendations">
          <div className="recommendations">
            <h4>Book : {book4}</h4>
            <h4>Rating : {book4Rating}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
