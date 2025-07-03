import { useState } from "react"
import React from 'react'

const TextArea = ({heading}) => {
    const [text,setText]=useState("");
    const [bold,setBold]=useState("");
    const handleUpClick=()=>{
        setText(text.toUpperCase());
        setBold(text.toUpperCase());
    }
     const handlelowClick=()=>{
        setText(text.toLowerCase());
        setBold(text.toLowerCase())
    }
     const handleboldClick=()=>{
        setBold(`<b>${text}</b>`);
    }
    const handleItalicClick=()=>{
        setBold(`<i>${text}</i>`);
    }
     const handleClear=()=>{
        setText("");
        setBold("");
    }
    const onchange=(event)=>{
        console.log("onChange is called");
        setText(event.target.value);
        setBold(event.target.value);
    }
    return (
    <>
    <div>
        <h1 className='mt-5'>{heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" rows="8" value={text} onChange={onchange}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Change to uppercase</button>
         <button className='btn btn-danger mx-1' onClick={handlelowClick}>Change to lowercase</button>
         <button className='btn btn-dark mx-1' onClick={handleboldClick}>Change to bold</button>
         <button className='btn btn-info mx-1' onClick={handleItalicClick}>Change to Italic</button>
         <button className='btn btn-warning mx-1' onClick={handleClear}>Clear</button>
    </div>
    <div className="container-fluid mt-5" >
        <h2 className="mt-4" >Preview</h2>
        <div className="display" style={{backgroundColor:"#DCDCDC", width:"100%", height:"200px"}} dangerouslySetInnerHTML={{ __html: bold }} ></div>
    </div>
    </>
  )
}

export default TextArea