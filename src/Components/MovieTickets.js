import React, { Component } from 'react';
import './MovieTickets.css';
import MovieSeats from './MovieSeats';

class MovieTickets extends Component {
    state = {
        occupied: false,
        moviePrice: 15,
        totalPrice: 0,
        totalSeats: 0,
        adultSeats: 0,
        childSeats: 0,
        chosenSeats: []
    }

    selectMovie = (e) => {
        this.setState({
            moviePrice: parseInt(e.target.value)
        })
    }

    selectSeat = (e) => {
        // this runs if seat is deselected
        if(e.target.className.indexOf("occupied") !== -1) {
            e.target.className = "seat";
            const pickedSeat = this.state.chosenSeats.find((seat) => {
                return seat.seat === e.target.id;
            });
            if(pickedSeat.type === "child") {
                this.setState({
                    childSeats: this.state.childSeats - 1,
                    occupied: false,
                    totalSeats: this.state.totalSeats - 1,
                    totalPrice: this.state.totalPrice - 10,
                    chosenSeats: this.state.chosenSeats.filter((seat) => {
                        return seat.seat !== e.target.id;
                    })
                })
            } else if(pickedSeat.type === "adult") {
                this.setState({
                    adultSeats: this.state.adultSeats - 1,
                    occupied: false,
                    totalSeats: this.state.totalSeats - 1,
                    totalPrice: this.state.totalPrice - 15,
                    chosenSeats: this.state.chosenSeats.filter((seat) => {
                        return seat.seat !== e.target.id;
                    })
                })
            }
            // this runs if seat is selected
        } else {
            e.target.className += ' occupied';
            if(this.state.moviePrice === 15) {
                this.setState({
                    occupied: true,
                    adultSeats: this.state.adultSeats + 1,
                    totalSeats: this.state.totalSeats + 1,
                    totalPrice: this.state.totalPrice + this.state.moviePrice,
                    chosenSeats: this.state.chosenSeats.concat({seat: e.target.id, type: "adult"})
                });
            } else if(this.state.moviePrice === 10) {
                this.setState({
                    occupied: true,
                    childSeats: this.state.childSeats + 1,
                    totalSeats: this.state.totalSeats + 1,
                    totalPrice: this.state.totalPrice + this.state.moviePrice,
                    chosenSeats: this.state.chosenSeats.concat({seat: e.target.id, type: "child"})
                });
            }
        }
    }

    render() {
        return (
            <div className="movieticket-container">
                <div className="movie-container">
                <label>Pick a movie:</label>
                <select id="movie" value={this.state.moviePrice} onChange={this.selectMovie}>
                    <option value="15">{this.props.location.state.currentMovie.Title} (Adult $15)</option>
                    <option value="10">{this.props.location.state.currentMovie.Title} (Child $10)</option>
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
                        <MovieSeats seat={1} selectSeat={this.selectSeat} />
                        <MovieSeats seat={9} selectSeat={this.selectSeat} />
                        <MovieSeats seat={17} selectSeat={this.selectSeat} />
                        <MovieSeats seat={25} selectSeat={this.selectSeat} />
                        <MovieSeats seat={33} selectSeat={this.selectSeat} />
                        <MovieSeats seat={41} selectSeat={this.selectSeat} />
                        <MovieSeats seat={49} selectSeat={this.selectSeat} />
                        <MovieSeats seat={57} selectSeat={this.selectSeat} />
                </div>

                <p className="text">You have selected <span id="count">{this.state.totalSeats}</span> seats for a price of $<span id="total">{this.state.totalPrice}</span></p>
            </div>
        )
    }
}

export default MovieTickets;