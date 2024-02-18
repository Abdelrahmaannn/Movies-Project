import { Component } from "react";

import "./NavBar.css";
import { Link } from "react-router-dom";



class Navbar extends Component {
  state = {};

  render() {
    return <>
    
    <nav class="navbar navbar-expand-lg my-nav">
  <div class="container">
    <a class="navbar-brand brand" href="#"> MovieBox </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item pe-2 ">
          <Link class="nav-link my-links"to={'popular'} >Popular</Link>
        </li>
        <li class="nav-item pe-2 ">
        <Link class="nav-link my-links"to={'toprated'} >Top Rated</Link>
        </li>
        <li class="nav-item pe-2 ">
        <Link class="nav-link my-links"to={'tvshows'} >TV Shows</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    
    
    
    </>;
  }
}

export default Navbar;
