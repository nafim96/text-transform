import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ( props ) =>
{
    const { mode, home, handleBgMode, } = props;
    const myStyle = {
        color: mode === "dark" ? "white" : mode === "light" ? "black" : mode === "primary" ? "white" : mode === "success" ? "black" : mode === "danger" ? "white" : mode === "secondary" ? "white" : mode === "info" ? "black" : mode === "warning" ? "black" : "black",
    }

    return (
        <>
            <nav className={ `navbar navbar-expand-lg navbar-${ mode } bg-${ mode }` }>
                <div style={ { color: myStyle.color } } className="container-fluid">
                    <Link style={ { color: myStyle.color } } className="navbar-brand" to="/">{ home }</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link style={ { color: myStyle.color } } className="nav-item nav-link" to="/home">
                                Home
                            </Link>
                            <Link style={ { color: myStyle.color } } className="nav-item nav-link" to="/about">
                                About
                            </Link>
                        </ul>

                    </div>
                    <div className="d-flex">                        <div style={ { height: "30px", width: "30px", cursor: "pointer", border: "1px solid black" } } className="bg-primary mx-2 rounded" onClick={ () => handleBgMode( "primary" ) }></div>
                        <div style={ { height: "30px", width: "30px", cursor: "pointer", border: "1px solid black" } } className="bg-secondary mx-2 rounded" onClick={ () => handleBgMode( "secondary" ) }></div>
                        <div style={ { height: "30px", width: "30px", cursor: "pointer", border: "1px solid black" } } className="bg-success mx-2 rounded" onClick={ () => handleBgMode( "success" ) }></div>
                        <div style={ { height: "30px", width: "30px", cursor: "pointer", border: "1px solid black" } } className="bg-info mx-2 rounded" onClick={ () => handleBgMode( "info" ) }></div>
                        <div style={ { height: "30px", width: "30px", cursor: "pointer", border: "1px solid black" } } className="bg-warning mx-2 rounded" onClick={ () => handleBgMode( "warning" ) }></div>
                        <div style={ { height: "30px", width: "30px", cursor: "pointer", border: "1px solid white" } } className="bg-danger mx-2 rounded" onClick={ () => handleBgMode( "danger" ) }></div>
                        <div style={ { height: "30px", width: "30px", cursor: "pointer", border: "1px solid black" } } className="bg-light mx-2 rounded" onClick={ () => handleBgMode( "light" ) }></div>
                        <div style={ { height: "30px", width: "30px", cursor: "pointer", border: "1px solid white" } } className="bg-dark mx-2 rounded" onClick={ () => handleBgMode( "dark" ) }></div>
                    </div>

                    {/* <div className={ `form-check form-switch text-${ mode === "light" ? "dark" : "light" }` }>
                        <input className={ `form-check-input bg-${ mode === "light" ? "dark" : "light" }` } type="checkbox" id="switch-box" onClick={ () => handleBgMode( "hello" ) } />
                        <label htmlFor="switch-box">{ btnText }</label>
                    </div> */}
                </div>

            </nav>
        </>
    );
};

export default Navbar;