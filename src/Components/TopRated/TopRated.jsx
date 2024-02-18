import { Component } from "react";

import "./TopRated.css"
import TopRatedCard from './../TopRatedCard/TopRatedCard';
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";

class TopRated extends Component {


  state = {  
    allMovies: [],
} 

async getTopRated() {
    try {
        const res = await axios.get('https://api.themoviedb.org/3/tv/top_rated', {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTIyNjk4ZWFmMGE0MDdiMmZmYTg3NWZjMGUwODI3NSIsInN1YiI6IjY1ZDEwODBhNDFlZWUxMDE3YzA4NDYzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaP7pbtrgIdVH_ITtMAEYcSm3fH93UoF2S8Rf1iv5JQ' },
        });

        const finalResult = res.data.results;

        // Update state using callback function
        this.setState({ allMovies: finalResult }, () => {
            console.log(this.state.allMovies);
        });
    } catch (error) {
        console.error("Error fetching popular movies:", error);
    }
}

componentDidMount() {
    this.getTopRated();
}


  render() {
    return (
      <>
        <div className="main ">
          <h1>Top Rated</h1>

          <div className="container">
            <div className="row gx-2 gy-3  ">

              {/* card component here */}

              {/* <TopRatedCard/> */}

              {this.state.allMovies.length > 0 ? this.state.allMovies.map(function(movie) {return <TopRatedCard key={movie.id} movies={movie} />;}) : <LoadingPage />}


            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopRated;
