import { Component } from "react";

import "./TvShows.css";

import TvShowsCard from "../TvShowsCard/TvShowsCard";
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";

class TvShows extends Component {


  state = {  
    allMovies: [],
} 

async getTvShows() {
    try {
        const res = await axios.get('https://api.themoviedb.org/3/tv/popular', {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTIyNjk4ZWFmMGE0MDdiMmZmYTg3NWZjMGUwODI3NSIsInN1YiI6IjY1ZDEwODBhNDFlZWUxMDE3YzA4NDYzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaP7pbtrgIdVH_ITtMAEYcSm3fH93UoF2S8Rf1iv5JQ' },
        });

        const finalResult = res.data.results;

        // Update state using callback function
        this.setState({ allMovies: finalResult }, () => {
            // console.log(this.state.allMovies);
        });
    } catch (error) {
        console.error("Error fetching popular movies:", error);
    }
}

componentDidMount() {
    this.getTvShows();
}


  render() {
    return (
      <>
        <div className="main ">
          <h1>Tv Shows</h1>

          <div className="container">
            <div className="row gx-0 gy-3  ">
              {/* card component here */}

              {this.state.allMovies.length > 0 ? this.state.allMovies.map(function(movie) {return <TvShowsCard key={movie.id} movies={movie} />;}) : <LoadingPage />}
              {/* <TvShowsCard/> */}
              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TvShows;
