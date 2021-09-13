import React, { useState } from "react";
import About from "./components/About/About";
import Alert from "./components/Alert/Alert";
import Navbar from "./components/Navbar/Navbar";
import TextForm from "./components/TextForm/TextForm";
import
{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App ()
{

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
      document.title = "TextUtils - Dark Mode"

      // setInterval( () =>
      // {
      //   document.title = "TextUtils - Dark Mode"
      // }, 2000 );
      // setInterval( () =>
      // {
      //   document.title = "Install - TextUtils"
      // }, 1500 );

    } else
    {
      setMode( "light" )
      setBtnText( "Dark Mode" )
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert( "Light Mode is Enable", "success" )
      document.title = "TextUtils - Light Mode"

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
    <Router>
      <>
        <Navbar home="Text Utils" mode={ mode } enableDark={ handleDarkMode } btnText={ btnText } />
        <Alert alert={ alert } mode={ mode } />
        <Switch>
          <Route path="/about">
            <About mode={ mode } />
          </Route>
          <Route path="/home">
            <TextForm showAlert={ showAlert } mode={ mode } />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={ showAlert } mode={ mode } />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
