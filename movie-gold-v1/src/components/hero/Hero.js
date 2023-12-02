import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({ movies }) => {

    const navigate = useNavigate();

    function reviews(movieId){
        navigate(`/Reviews/${movieId}`);

    }

    return (
        <div className='movie-carousel-container'>
            {/* component carousel */}
            <Carousel>
                {/* Mapping through the movies array */}
                {movies?.map((movie) => (
                    // Paper component with a unique key for each movie
                    <Paper key={movie.id}>
                        {/* Container for the movie card */}
                        <div className='movie-card-container'>
                             {/* Movie card element*/}
                            <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                 {/* Movie details */}
                                <div className='movie-detail'>
                                    {/* Movie poster */}
                                    <div className='movie-poster'>
                                        {/* Image tag with the movie poster */}
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    {/* Movie title */}
                                    <div className='movie-title'>
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className='movie-buttons-container'>
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length-11)}`}>
                                            <div className='play-button-icon-container'>
                                                <FontAwesomeIcon className='play-button-icon'
                                                    icon ={faCirclePlay}
                                                />
                                            </div>
                                        </Link>
                                        <div className='movie-review-button-container'>
                                            <Button variant='info' onClick={()=>reviews(movie.imdbId)} >Reviews</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                ))}
            </Carousel>
        </div>
    );
};

export default Hero