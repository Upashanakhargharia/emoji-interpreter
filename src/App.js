import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😑": "annoyance",
  "😃": "Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙃": " Upside-Down Face",
  "😉 ": "Winking Face",
  "😇 ": "Smiling Face with Halo",
  "🥰 ": "Smiling Face with Hearts",
  "😍 ": "Smiling Face with Heart-Eyes",
  "🤩 ": "Star-Struck",
  "🙂": "Slightly Smiling Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": " Thinking Face",
  "🤐 ": "Zipper-Mouth Face",
  "🤨 ": "Face with Raised Eyebrow",
  "😐 ": "Neutral Face",
  "😑 ": "Expressionless Face",
  "😶 ": "Face Without Mouth",
  "😏 ": "Smirking Face",
  "😒 ": "Unamused Face",
  "🙄 ": "Face with Rolling Eyes",
  "😬 ": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry!! doesnot exists in the database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          color: "black",
          backgroundColor: "yellow",
          display: "block",
          border: "solid red 2px",
          padding: "1rem",
          borderRadius: "1rem"
        }}
      >
        How are you feeling right now?
      </h1>
      <input
        placeholder="Search for an Emoji here"
        style={{ width: "70%", padding: "1rem" }}
        onChange={changeEventHandler}
      ></input>
      <h1 style={{ color: "red" }}>{meaning} </h1>

      <h2> We know the following emoji </h2>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              maxWidth: "400px",
              display: "blob",
              padding: "0.5 rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
