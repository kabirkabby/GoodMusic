import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  EDM: [
    { name: "Alan Walker", rating: "4/5" },
    { name: "Marshmallow", rating: "3.5/5" }
  ],

  Rap: [
    {
      name: "Eminem",
      rating: "5/5"
    },
    {
      name: "G-eazy",
      rating: "4.5/5"
    }
  ],
  Pop: [
    {
      name: "Chris Brown",
      rating: "5/5"
    },
    {
      name: "Charlie Puth",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Pop");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎼 Good Music </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my Singhers. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
