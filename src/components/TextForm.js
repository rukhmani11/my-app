//import { useState } from "react";
import React, {useState} from "react";



export default function TextForm(props) {

  const  handleUpClick = ()=>{
        //console.log("uppercase click" + text);
        let newText = text.toUpperCase();
        //setText("You have clicked on handleUpChange")
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleClearClick = ()=>{
      let newText = '';
      setText(newText)
    }
    
   const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to ClipBoard", "success");
   }

  const  handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('Enter text here');
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3" style={{color:props.mode==='light'?'white':'#042743'}}>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743' }} id="myBox"  rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>CopyText</button>
      <div disabled={text.length===0} className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        {/* // split.filter for lenght 0 dikhye */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Mintes read</p>
        <h2>Preview</h2>

        <p>{text.length>0?text:"Nothing to Prevics"}</p>
      </div>
    </div>
  );
}
