import React, { Component } from 'react';
import './MovieTickets.css';
import MovieSeats from './MovieSeats';

class MovieTickets extends Component {
    state = {
        occupied: false,
        moviePrice: 0,
        totalSeats: 0
    }

    totalPrice = () => {
        return this.state.totalSeats * this.state.moviePrice;
    }

    selectMovie = (e) => {
        console.log(e.target.value)
        this.setState({
            moviePrice: e.target.value
        })
    }

    selectSeat = (e) => {
        if(e.target.className.indexOf("occupied") !== -1) {
            e.target.className = "seat";
            this.setState({
                occupied: false,
                totalSeats: this.state.totalSeats - 1
            });
        } else {
            e.target.className += ' occupied';
            this.setState({
                occupied: true,
                totalSeats: this.state.totalSeats + 1
            });
        }
        
    }
    render() {
        console.log(this.state.occupied);
        console.log(this.state.moviePrice);
        console.log(this.state.totalSeats);
        console.log(this.totalPrice());
        return (
            <div>
                <div className="movie-container">
                <label>Pick a movie:</label>
                <select id="movie" onChange={this.selectMovie}>
                    <option value="10">Avengers: Endgame($10)</option>
                    <option value="12">Joker ($12)</option>
                    <option value="8">Toy Story 4 ($8)</option>
                    <option value="9">The Lion King ($9)</option>
                </select>
                </div>

                <ul className="showcase">
                    <li>
                        <div className="seat"></div>
                        <small>N/A</small>
                    </li>
                    <li>
                        <div className="seat selected"></div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div className="seat occupied"></div>
                        <small>Occupied</small>
                    </li>
                </ul>

                <div className="container">
                    <div className="screen"></div>
                        <MovieSeats selectSeat={this.selectSeat} />
                        <MovieSeats selectSeat={this.selectSeat} />
                        <MovieSeats selectSeat={this.selectSeat} />
                        <MovieSeats selectSeat={this.selectSeat} />
                        <MovieSeats selectSeat={this.selectSeat} />
                        <MovieSeats selectSeat={this.selectSeat} />
                        <MovieSeats selectSeat={this.selectSeat} />
                        <MovieSeats selectSeat={this.selectSeat} />
                </div>

                <p className="text">You have selected <span id="count">{this.state.totalSeats}</span> seats for a price of $<span id="total">{this.totalPrice()}</span></p>
            </div>
        )
        
    }
}

export default MovieTickets;