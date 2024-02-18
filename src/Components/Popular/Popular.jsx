import { Component } from "react";

import "./Popular.css"

import Cards from "../Cards/Cards";
import axios from "axios";
import ErrorPage from './../ErrorPage/ErrorPage';
import LoadingPage from './../LoadingPage/LoadingPage';

class Popular extends Component {


    state = {  
        allMovies: [],
    } 
    
    async getPopularMovies() {
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/popular', {
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
        this.getPopularMovies();
    }
    



    render() { 
        return (

            <>

            <div className="main ">

                <h1>Popular Movies</h1>

                <div className="container">

                    <div className="row gx-1 gy-3  ">
                        

                        {/* card component here */}

                        {this.state.allMovies.length > 0 ? this.state.allMovies.map(function(movie) {return <Cards key={movie.id} movies={movie} />;}) : <LoadingPage />}

                    </div>

                   
                </div>
                
            </div>
            
            
            
            
            </>
        );
    }
}
 
export default Popular;