import React, { useState } from 'react';

const TextForm = ( { mode, showAlert } ) =>
{
    const [ text, setText ] = useState( "" )
    const handleUpClick = () =>
    {
        const newText = text.toUpperCase();
        setText( newText )
        showAlert( "Convert Uppercase", "success" )
    }

    const handleLoClick = () =>
    {
        const newText = text.toLocaleLowerCase();
        setText( newText )
        showAlert( "Convert Lowercase", "success" )
    }

    const handleClearClick = () =>
    {
        const clear = "";
        setText( clear )
        showAlert( "Clear Text Book", "danger" )
    }

    const handleCopy = () =>
    {

        navigator.clipboard.writeText( text )
        document.getSelection().removeAllRanges();
        showAlert( "Data Copped", "success" )

    }

    const handleOnChange = ( event ) =>
    {
        const value = event.target.value;
        setText( value );
    }

    const handleExtraSpace = () =>
    {
        const newText = text.split( /[ ]+/ )
        setText( newText.join( " " ) )
        showAlert( "Remove Extra Space", "success" )
    }

    const myStyle = {
        color: mode === "dark" ? "white" : mode === "light" ? "black" : mode === "primary" ? "white" : mode === "success" ? "black" : mode === "danger" ? "white" : mode === "secondary" ? "white" : mode === "info" ? "black" : mode === "warning" ? "black" : "black",

        backgroundColor: mode === "dark" ? "#212529" : mode === "light" ? "white" : mode === "primary" ? "#0d6efd" : mode === "success" ? "#198754" : mode === "danger" ? "#dc3545" : mode === "secondary" ? "#6c757d" : mode === "info" ? "#0dcaf0" : mode === "warning" ? "#ffc107" : "black",

        buttonBgColor: mode === "dark" ? "white" : mode === "light" ? "black" : mode === "primary" ? "#ffc107" : mode === "success" ? "#dc3545" : mode === "danger" ? "white" : mode === "secondary" ? "#0dcaf0" : mode === "info" ? "#ffc107" : mode === "warning" ? "#198754" : "black",

        buttonColor: mode === "dark" ? "black" : mode === "light" ? "white" : mode === "primary" ? "black" : mode === "success" ? "white" : mode === "danger" ? "black" : mode === "secondary" ? "white" : mode === "info" ? "black" : mode === "warning" ? "black" : "black",
    }

    return (
        <>
            <div className="container mb-3" style={ { color: myStyle.color } }>
                <label htmlFor="area" className="form-label"><h1>Convert Your Text You Want--</h1></label>
                <textarea className="form-control" style={ { backgroundColor: myStyle.backgroundColor, color: myStyle.color } } id="area" value={ text } rows="8" onChange={ handleOnChange }></textarea>
                <button style={ { backgroundColor: myStyle.buttonBgColor, color: myStyle.buttonColor } } disabled={ text.length === 0 } className="btn btn-success mx-3 my-2" onClick={ handleUpClick }>Uppercase</button>
                <button style={ { backgroundColor: myStyle.buttonBgColor, color: myStyle.buttonColor } } disabled={ text.length === 0 } className="btn btn-success mx-3 my-2" onClick={ handleLoClick }>Lowercase</button>
                <button style={ { backgroundColor: myStyle.buttonBgColor, color: myStyle.buttonColor } } disabled={ text.length === 0 } className="btn btn-success mx-3 my-2" onClick={ handleClearClick }>Clear</button>
                <button style={ { backgroundColor: myStyle.buttonBgColor, color: myStyle.buttonColor } } disabled={ text.length === 0 } className="btn btn-success mx-3 my-2" onClick={ handleCopy }>Copy</button>
                <button style={ { backgroundColor: myStyle.buttonBgColor, color: myStyle.buttonColor } } disabled={ text.length === 0 } className="btn btn-success mx-3 my-2" onClick={ handleExtraSpace }>Remove Space</button>
            </div>
            <div style={ { color: myStyle.color } } className="container">
                <h2> <button style={ { background: mode === "info" ? myStyle.buttonBgColor : " " } } className="btn-info">{ text.split( /\s+/ ).filter( element => element.length !== 0 ).length }</button> word type <button style={ { background: mode === "info" ? myStyle.buttonBgColor : " " } } className="btn-info">{ text.value === "" ? 0 : text.length }</button> character type</h2>
                <h3> <button style={ { background: mode === "warning" ? "#0dcaf0" : " " } } className="btn-warning">{ 0.008 * text.split( " " ).filter( element => element.length !== 0 ).length }</button> read minutes</h3>
                <h2>Preview</h2>
                <p>{ text.length > 0 ? text : "Nothing to preview" }</p>
            </div>
        </>
    );
};

export default TextForm;