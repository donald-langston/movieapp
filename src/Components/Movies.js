import React, { Component } from 'react';
import axios from 'axios';
import './Movies.css';
import Movie from './Movie';
import { Link } from 'react-router-dom';

class Movies extends Component {
    state = {
        movieTitle: "",
        movies: []
    }

    componentDidMount() {
        
    }

    getMovies = (e) => {
        e.preventDefault();
        var searchString = this.state.movieTitle;
        var urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get("http://www.omdbapi.com/?apikey=d5b538&s=" + urlEncodedSearchString).then((response) => {
            this.setState({
                movies: response.data.Search
            })
            /* document.getElementsByClassName("movies-container")[0].innerHTML = renderMovies(response.data.Search); */
        });
    }

    getMovieName = (e) => {
        this.setState({
            movieTitle: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 header text-center">
                        <h2 className="display-2">Movie App</h2>
                        <p>Search for movies you want to watch.</p>
                        <p>Save them to your list</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 search">
                        <form id="search-form" onSubmit={this.getMovies}>
                            <div className="input-group input-group-lg">
                                <input className="form-control search-bar" placeholder="Search for a movie..." onChange={this.getMovieName} />
                                <button className="btn btn-primary input-group-btn" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 results">
                        <Link to="/watchlist">Go to my watchlist</Link>
                        <div className="movies-container">
                            <Movie movies={this.state.movies} />
                            {/*<div className="movie card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">title</h5>
                                <p className="card-text"></p>
                                <a href="/" class="btn btn-primary">Add</a>
                                </div>
                            </div>
                            <div className="movie card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">title</h5>
                                <p className="card-text"></p>
                                <a href="/" className="btn btn-primary">Add</a>
                                </div>
                            </div> 
                            <div className="movie card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">title</h5>
                                <p className="card-text"></p>
                                <a href="/" className="btn btn-primary">Add</a>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies;