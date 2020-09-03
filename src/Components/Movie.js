import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';

class Movie extends Component {
    state = {
        moviesArray: []
    }

    selectedMovie = (e) => {
        console.log(e.target);
    }

    saveToWatchlist = (movie) => {
        const movies = this.state.moviesArray;
        movies.push(movie);
        this.setState({
            moviesArray: movies
        });
        console.log(JSON.stringify(movies));
        localStorage.setItem('watchlist', JSON.stringify(movies));
        /* var movie = movieData.find(function(currentMovie) {
            return currentMovie.imdbID == imdbID;
        });
        
        console.log(movie);
        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);
    
        if(watchlist == null) {
            watchlist = [];
        }
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON); */
    }

    renderMovies = () => {
        let renderedMovies = this.props.movies.map((currentMovie, index) => {

            return ( 
                <div key={index} className="movie card" style={{width: "18rem"}}>
                    <img src={currentMovie.Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{currentMovie.Title}</h5>
                        <p className="card-text">{currentMovie.Year}</p>
                        <a href="#" className="btn btn-primary" onClick={() => {this.saveToWatchlist(currentMovie)}}>Add to Watchlist</a>
                        <Link className="btn btn-primary" to={{pathname: "/movietickets", state: {currentMovie}}}>Purchase Ticket</Link>
                    </div>
                </div>
            )
        });
        return renderedMovies
    }
    render() {
        return (
            <div>
                {this.renderMovies()}
            </div>
        )
    }
}



export default Movie;