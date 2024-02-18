import { Component } from "react";

// import "./Cards.css"

class Cards extends Component {
 

  
  render() {

    const  {title, vote_average, poster_path}  = this.props.movies;

    // AllMovies  vote_average

    // this.props.movies.title
    //this.props.movies.vote_average
    //this.props.movies.

    return (
      <>
        <div className="inner col-md-3">
          <div className="my-card ">
            <img className="w-75" src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt="" />
          </div>
          <h5 className="pt-3">{ title }</h5>
          <h5>Rating : { vote_average}</h5>
        </div>
      </>
    );
  }
}

export default Cards;
