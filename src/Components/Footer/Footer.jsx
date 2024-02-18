import { Component } from "react";

import "./Footer.css"

class Footer extends Component {
    state = {  } 
    render() { 
        return (

            <>

            <footer>

                <div className="container">

                    <div className="row d-flex justify-content-center text-center align-items-center flex-column pt-4  ">

                            <h1 className="brand-name">MovieBox</h1>

                        {/* <div className="col-md-6 d-flex justify-content-end  "> */}

                            <ul className="social">

                                <li> <i class="fa-brands fa-facebook-f"></i> </li>
                                <li><i class="fa-brands fa-linkedin"></i></li>
                                <li><i class="fa-brands fa-x-twitter"></i></li>
                                <li><i class="fa-brands fa-instagram"></i></li>

                            </ul>
                        {/* </div> */}

                        <h5 className="text-center mt-1" >@2023 Redline. All Right Reserved.</h5>



                    </div>



                </div>



            </footer>
            
            </>
        );
    }
}
 
export default Footer;