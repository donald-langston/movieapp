import React from 'react';

function MovieSeats(props) {
    return (
        <div className="row">
            <div className="seat" onClick={props.selectSeat}></div>
            <div className="seat" onClick={props.selectSeat}></div>
            <div className="seat" onClick={props.selectSeat}></div>
            <div className="seat" onClick={props.selectSeat}></div>
            <div className="seat" onClick={props.selectSeat}></div>
            <div className="seat" onClick={props.selectSeat}></div>
            <div className="seat" onClick={props.selectSeat}></div>
            <div className="seat" onClick={props.selectSeat}></div>
        </div>
    )
}

export default MovieSeats;