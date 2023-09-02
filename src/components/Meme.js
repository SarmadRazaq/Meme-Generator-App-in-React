import React from "react";
import memesText from "../memesData.js";

const Meme = () => {
  function getMemeImage() {
    let memesArray = memesText.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
    console.log(randomNumber);
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" />
        <input type="text" className="form--input" />

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
    </main>
  );
};

export default Meme;
