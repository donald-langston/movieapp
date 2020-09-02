import React, { Component } from 'react';

class Watchlist extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        if(localStorage.getItem('watchlist')) {
            this.setState({
                movies: JSON.parse(localStorage.getItem('watchlist'))
            })
        }
    }

    render() {
        return (
            <div>{this.state.movies.map((movie) => {
                return ( 
                    <div className="movie card" style={{width: "18rem"}}>
                        <img src={movie.Poster} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-text">{movie.Year}</p>
                        </div>
                    </div>
                )
            })}</div>
        )
    }
}

    

export default Watchlist;