import { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import domtoimage from "dom-to-image-more";

function App() {
    const [text, setText] = useState();
    const inputText = (e) => {
        setText(e.target.value);
    };
    const node = document.getElementById("output");
    const image = document.getElementById("image");

    domtoimage
        .toPng(node)
        .then((dataUrl) => {
            var img = new Image();
            img.src = dataUrl;
            image.innerHTML = "";
            image.appendChild(img);
        })
        .catch((error) => {
            console.error("oops, something went wrong!", error);
        });

    return (
        <>
            <h1>Banner Maker</h1>
            <TextField required id="outlined-required" label="input text" defaultValue="" onChange={inputText} margin="normal" />
            <div id="output">{text}</div>
            <div id="image"></div>
        </>
    );
}

export default App;
