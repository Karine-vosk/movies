'use client';
import { Movie } from '@/app/types/movie';
import { Button, Flex, Space, Typography } from 'antd';
import React from 'react';
import './FeaturedMovie.css';

const { Text, Title  } = Typography;

interface Props {
  movie: Movie;
  videoActive: boolean;
}

const FeaturedMovie = ({ movie, videoActive }: Props) => {
  if (!movie) return null;

 return (
  <Flex className="featured-section" align="center">
    
    <div
      className="featured-background" 
      style={{ backgroundImage: `url(/movies/${movie.CoverImage})` }}
    />

  
    <div className="featured-overlay" />

   
    <div className="featured-content">
      <Space direction="vertical" size="middle">
        <Text>{movie.Category}</Text>
        <Title level={2}>{movie.Title}</Title>
        <Text>
          {movie.ReleaseYear} | {movie.MpaRating} |{' '}
          {Math.floor(Number(movie.Duration) / 60)} min
        </Text>
        <Text>{movie.Description}</Text>
        <div className="buttons">
          <Space size="middle">
            <Button type="primary" size="large">
              ▶ Play
            </Button>
            <Button size="large">More Info</Button>
          </Space>
        </div>
      </Space>
    </div>
  </Flex>
);

};

export default FeaturedMovie;
