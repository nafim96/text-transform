import React from 'react';

const About = ( { mode } ) =>
{
    // const [ myStyle, setMyStyle ] = useState( {
    //     color: "black",
    //     backgroundColor: 'white',
    // } )
    // const [ btnText, setBtnText ] = useState( "Enable Dark Mode" )

    const myStyle = {
        color: mode === "dark" ? "white" : mode === "light" ? "black" : mode === "primary" ? "white" : mode === "success" ? "black" : mode === "danger" ? "white" : mode === "secondary" ? "white" : mode === "info" ? "black" : mode === "warning" ? "black" : "black",
        backgroundColor: mode === "dark" ? "#212529" : mode === "light" ? "white" : mode === "primary" ? "#0d6efd" : mode === "success" ? "#198754" : mode === "danger" ? "#dc3545" : mode === "secondary" ? "#6c757d" : mode === "info" ? "#0dcaf0" : mode === "warning" ? "#ffc107" : "black",

        border: mode === "light" ? " " : mode === "dark" ? "1px solid #042743" : mode === "danger" ? "1px solid #042743" : mode === "warning" ? "1px solid #042743" : mode === "success" ? "1px solid #042743" : mode === "info" ? "1px solid #042743" : mode === "secondary" ? "1px solid #042743" : mode === "primary" ? "1px solid #042743" : " ",


    }

    // const handleDarkMode = () =>
    // {
    //     if ( myStyle.color === "black" )
    //     {
    //         setMyStyle( {
    //             color: "white",
    //             backgroundColor: 'black',
    //         } )
    //         setBtnText( "Enable Light Mode" )
    //     } else
    //     {
    //         setMyStyle( {
    //             color: "black",
    //             backgroundColor: 'white',
    //         } )
    //         setBtnText( "Enable Dark Mode" )
    //     }
    // }
    return (
        <div className="container" style={ { color: myStyle.color } }>
            <h1>About</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={ myStyle }>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={ myStyle }>
                            Accordion Item 1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={ myStyle }>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={ myStyle } >
                            Accordion Item 2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to use each element.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={ myStyle } >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={ myStyle }>
                            Accordion Item 3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to use each element.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" className={ `btn btn-primary bg-${ mode === "light" ? "dark" : "danger" }` } onClick={ handleDarkMode }>{ btnText }</button>
            </div> */}
        </div>
    );
};

export default About;