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

        const text = document.getElementById( "area" )
        if ( text.value === "" || text.value === " " )
        {
            showAlert( "You don't type any data!!", "Warning" )
        } else
        {
            text.select()
            navigator.clipboard.writeText( text.value )
            showAlert( "Data Copped", "success" )

        }

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

    return (
        <>
            <div className="container mb-3">
                <label htmlFor="area" className="form-label"><h1>Check Your Speed</h1></label>
                <textarea className="form-control" style={ { backgroundColor: mode === "dark" ? "black" : "white", color: mode === "dark" ? "white" : "black" } } id="area" value={ text } rows="8" onChange={ handleOnChange }></textarea>
                <button className="btn btn-success mx-3" onClick={ handleUpClick }>Uppercase</button>
                <button className="btn btn-success mx-3" onClick={ handleLoClick }>Lowercase</button>
                <button className="btn btn-success mx-3" onClick={ handleClearClick }>Clear</button>
                <button className="btn btn-success mx-3" onClick={ handleCopy }>Copy</button>
                <button className="btn btn-success mx-3" onClick={ handleExtraSpace }>Remove Space</button>
            </div>
            <div className="container">
                <h2> <button className="btn-info">{ text === "" ? 0 : text.split( " " ).length }</button> word type <button className="btn-info">{ text.length }</button> character type</h2>
                <h3> <button className="btn-warning">{ 0.008 * text.split( " " ).length }</button> read minutes</h3>
                <h2>Preview</h2>
                <p>{ text.length > 0 ? text : "Please type text & see Preview" }</p>
            </div>
        </>
    );
};

export default TextForm;