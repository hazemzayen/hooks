import React from 'react';
import "./moviecard.css"
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {


 return (
  <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img
        className="locandina"
        src={movie.posterURL}
      />
      <h1>{movie.title}</h1>
      <h4>{ movie.rating}</h4>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
        
        /> <br/>
      <span className="minutes">117 min</span>
      <p className="type"></p>
    </div>
    <div className="movie_desc">
      <p className="text">
        {movie.description}
      </p>
    </div>
    
    <div className="movie_social">
      <ul>
        <li>
          <i className="material-icons">share</i>
        </li>
        <li>
          <i className="material-icons"></i>
        </li>
        <li>
          <i className="material-icons">chat_bubble</i>
        </li>
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back" />
</div>

 );
}

export default MovieCard;