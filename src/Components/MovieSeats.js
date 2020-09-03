import React from 'react';

function MovieSeats(props) {
    return (
        <div className="row">
            <div id={props.seat} className="seat" onClick={props.selectSeat}></div>
            <div id={props.seat + 1} className="seat" onClick={props.selectSeat}></div>
            <div id={props.seat + 2} className="seat" onClick={props.selectSeat}></div>
            <div id={props.seat + 3} className="seat" onClick={props.selectSeat}></div>
            <div id={props.seat + 4} className="seat" onClick={props.selectSeat}></div>
            <div id={props.seat + 5} className="seat" onClick={props.selectSeat}></div>
            <div id={props.seat + 6} className="seat" onClick={props.selectSeat}></div>
            <div id={props.seat + 7} className="seat" onClick={props.selectSeat}></div>
        </div>
    )
}

export default MovieSeats;