import React from 'react';
import styled from 'styled-components';

const MovieInfo = ({id, imgSrc, title, className}) => {
    return (
        <div className={className}>
            <div class="detail-img">
                <img src={imgSrc} alt="movie poster" />
            </div>
            <div class="detail-content">
                <h2 class="detail-title"><strong>{title}</strong></h2>
                
                <p><strong>Overview</strong></p>
                <p>{overview}</p>
                <p><strong>Genres</strong></p>
                <div class="genres">${genre_ids}</div>
                <p><strong>Rating</strong></p>
                <p>${movieData.vote_average}</p>
                <p><strong>Production companies</strong></p>
                <div class="companyCard">${prodImg()}</div>
        </div>
            
            
        </div>
    )
}

export default styled(MovieInfo)`

`;