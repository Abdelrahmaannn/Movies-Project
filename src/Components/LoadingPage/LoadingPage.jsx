import { Component } from "react";

import "./LoadingPage.css"

class LoadingPage extends Component {
    state = {  } 
    render() { 
        return (
            <>
            
            <div className="loading d-flex justify-content-center align-items-center ">


            <i class="fa-solid fa-spinner"></i>


            </div>
            
            
            </>
        );
    }
}
 
export default LoadingPage;