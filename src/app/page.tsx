'use client';

import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import { Content } from 'antd/es/layout/layout';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import TrendingNow from './components/TrendingNow/TrendingNow';
import { Movie } from './types/movie';
import data from './data/movie';

import './page.css';

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [featured, setFeatured] = useState<Movie>(data.Featured);
  const [videoActive, setVideoActive] = useState(false);

  // Set featured from sessionStorage (last seen movie)
  useEffect(() => {
    const seenId = sessionStorage.getItem('lastSeen');
    if (seenId) {
      const seenMovie = data.TendingNow.find((m) => m.Id === seenId);
      if (seenMovie) {
        setFeatured(seenMovie);
      }
    }
  }, []);

  // Handle movie card click
  const handleMovieClick = (movie: Movie) => {
    setVideoActive(false); // Reset video
    setFeatured(movie);
    sessionStorage.setItem('lastSeen', movie.Id);
    setTimeout(() => {
      setVideoActive(true); // Activate video after 2 seconds
    }, 2000);
  };

  return (
    <Layout
     className={`main-layout ${
            !isSidebarCollapsed ? 'main-layout-mrg' : ''
          }`}>
      <SidebarMenu onToggle={setIsSidebarCollapsed} />
      <Layout>
        <Content
          className={`main-content ${
            !isSidebarCollapsed ? 'content-overlay' : ''
          }`}>
          {/* Featured section */}
          <FeaturedMovie movie={featured} videoActive={videoActive} />

          {/* Trending Now carousel */}
          <TrendingNow onMovieClick={handleMovieClick} />
        </Content>
      </Layout>
    </Layout>
  );
}

