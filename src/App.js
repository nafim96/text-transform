import React, { useState } from "react";
import About from "./components/About/About";
import Alert from "./components/Alert/Alert";
import Navbar from "./components/Navbar/Navbar";
import TextForm from "./components/TextForm/TextForm";
function App ()
{
  "use strict";
  const [ mode, setMode ] = useState( "light" )
  const [ btnText, setBtnText ] = useState( "Dark Mode" )
  const [ alert, setAlert ] = useState( null )
  const handleDarkMode = () =>
  {
    if ( mode === "light" )
    {
      setMode( "dark" )
      setBtnText( "Light Mode" )
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert( "Dark Mode is Enable", "success" )

    } else
    {
      setMode( "light" )
      setBtnText( "Dark Mode" )
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert( "Light Mode is Enable", "success" )

    }
  }

  const showAlert = ( message, type ) =>
  {
    setAlert( {
      msg: message,
      type: type,
    } )
    setTimeout( () =>
    {
      setAlert( null )
    }, 2000 );
  }

  return (

    <>
      <Navbar home="Text Utils" mode={ mode } enableDark={ handleDarkMode } btnText={ btnText } />
      <Alert alert={ alert } mode={ mode } />
      <About />
      <TextForm showAlert={ showAlert } mode={ mode } />
    </>
  );
}

export default App;
