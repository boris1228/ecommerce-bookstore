

import '../css/CardInfo.css';

export default function CardInfo({movie}){

    return(
        <div className="product-info d-flex flex-column text-light">
            <div className="movie-title">{movie.title}</div>
            <div class="left-align d-flex flex-row">{movie.authors} 
            </div>
            <div className="movie-description overflow-auto">{movie.shortDescription}</div>
        </div>
    )

}