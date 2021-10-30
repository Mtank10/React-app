import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("convert to upper case","success");

    }
    const handleLoClick = ()=>{
        console.log("lower was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("convert to lower case","success");
    }
    const handleOnChange = (event)=>{
        console.log("on Click");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //setText("new Text");// Correct way to change the state.
    return (
        <>
        <div className="container">
            <h1 className="my-2">About Us</h1>
         <div>
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
         </div>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charachters</p>
            <p>{0.08 *text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}