import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";

function Movie(props){
    return (<div class="movie">
        <img src={props.poster} alt={props.title} title={props.title} />
        <div class="movie__data">
        <h3 class="movie__title">{props.title}</h3>
        <h5 class="movie__year">{props.year}</h5>
        <ul className="movie__genres">{props.genres.map((genre,index) => (
           <li  key = {index} className ="movie__genres__genre">{genre}</li>))}        
        </ul>
        <p class="movie__summary">{props.summary.slice(0,140)}...</p>  
        </div>
    </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, //medium 
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;