
import React from 'react';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import { Movie } from '../data/movies';

interface HeroProps {
  movie: Movie;
  onPlayClick: (movie: Movie) => void;
  onDetailsClick: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ movie, onPlayClick, onDetailsClick }) => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-2xl ml-0 lg:ml-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {movie.title}
        </h1>
        
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-red-600 text-white px-2 py-1 text-sm font-semibold rounded">
            {Math.round(movie.voteAverage * 10)}% Match
          </span>
          <span className="text-white/80">{movie.releaseDate}</span>
          <span className="border border-white/40 text-white/80 px-2 py-1 text-sm rounded">
            {movie.maturity}
          </span>
          <span className="text-white/80">{movie.duration}</span>
        </div>

        <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed drop-shadow">
          {movie.overview}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onPlayClick(movie)}
            className="flex items-center justify-center bg-white text-black px-8 py-3 rounded font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2 fill-current" />
            Play
          </button>
          
          <button
            onClick={() => onDetailsClick(movie)}
            className="flex items-center justify-center bg-gray-500/70 text-white px-8 py-3 rounded font-semibold hover:bg-gray-500/90 transition-all transform hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
