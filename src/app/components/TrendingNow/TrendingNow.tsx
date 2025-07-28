'use client';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { Movie } from '@/app/types/movie';
import data from '@/app/data/movie';

interface Props {
  onMovieClick: (movie: Movie) => void;
}

const TrendingNow = ({ onMovieClick }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const seenId = sessionStorage.getItem('lastSeen');
    let trending = [...data.TendingNow];
    if (seenId) {
      const seenMovie = trending.find((m) => m.Id === seenId);
      if (seenMovie) {
        trending = [seenMovie, ...trending.filter((m) => m.Id !== seenId)];
      }
    }
    setMovies(trending.slice(0, 50));
  }, []);

  useEffect(()=> {

  })

  return (
    <div className='trending-now'>
      <Carousel dots={false} slidesToShow={8} slidesToScroll={1} draggable>
        {movies.map((movie) => (
          <div
            key={movie.Id}
            className='carousel-item'
            onClick={() => onMovieClick(movie)}>
            <img src={'/movies/' + movie.CoverImage} alt={movie.Title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TrendingNow;
