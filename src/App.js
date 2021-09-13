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

  const removeBG = () =>
  {
    document.body.classList.remove( "bg-primary" )
    document.body.classList.remove( "bg-secondary" )
    document.body.classList.remove( "bg-info" )
    document.body.classList.remove( "bg-success" )
    document.body.classList.remove( "bg-warning" )
    document.body.classList.remove( "bg-danger" )
    document.body.classList.remove( "bg-light" )
    document.body.classList.remove( "bg-dark" )
  }


  const handleBgMode = ( cls ) =>
  {
    removeBG();
    document.body.classList.add( "bg-" + cls )
    if ( mode === cls )
    {
      setMode( cls )
      setBtnText( "Light Mode" )
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.title = "TextUtils - Dark Mode"
      showAlert( "Dark Mode is Enable", "success" )
    } else
    {
      setMode( cls )
      setBtnText( "Dark Mode" )
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = "TextUtils - Light Mode"
      showAlert( `${ cls } Mode is Enable`, "success" )

    }
  }



  return (
    <Router>
      <>
        <Navbar home="Text Utils" mode={ mode } handleBgMode={ handleBgMode } btnText={ btnText } />
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
    </Router >
  );
}

export default App;
