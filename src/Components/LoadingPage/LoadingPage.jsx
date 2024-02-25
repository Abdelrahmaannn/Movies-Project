import { Component } from "react";

import "./LoadingPage.css";
import { Bars } from "react-loader-spinner";

class LoadingPage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="loading d-flex justify-content-center align-items-center ">
          {/* <i class="fa-solid fa-spinner"></i> */}

          <Bars
            height="80"
            width="80"
            color="#9B2819"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </>
    );
  }
}

export default LoadingPage;
