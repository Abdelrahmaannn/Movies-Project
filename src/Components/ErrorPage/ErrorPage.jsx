import { Component } from "react";

import "./ErrorPage.css"

import errorImge from "../../Assets/business-3d-robot-assistant-sad.png" 


class ErrorPage extends Component {
    state = {  } 
    render() { 
        return (

            <>


            <div className="Error-Page">


            <img src= {errorImge} alt="error" />

            <div>
            <h2>404</h2>
            <h3>Sorry, we were unable to find that page</h3>

            </div>


            </div>
            
            </>
        );
    }
}
 
export default ErrorPage;