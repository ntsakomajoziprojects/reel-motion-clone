
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieCardProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onDetails: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPlay, onDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative min-w-[200px] sm:min-w-[250px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="movie-card-hover">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-[280px] sm:h-[350px] object-cover rounded-md"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/80 rounded-md flex flex-col justify-end p-4 animate-fade-in">
            <h3 className="text-white font-semibold text-lg mb-2">{movie.title}</h3>
            
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                {Math.round(movie.voteAverage * 10)}% Match
              </span>
              <span className="text-white/80 text-sm">{movie.releaseDate}</span>
              <span className="border border-white/40 text-white/80 px-1 py-0.5 text-xs rounded">
                {movie.maturity}
              </span>
            </div>

            <p className="text-white/90 text-sm mb-4 line-clamp-3">
              {movie.overview}
            </p>

            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlay(movie);
                }}
                className="bg-white text-black p-2 rounded-full hover:bg-white/90 transition-colors"
              >
                <Play className="w-4 h-4 fill-current" />
              </button>
              
              <button className="bg-gray-600/70 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              
              <button className="bg-gray-600/70 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                <ThumbsUp className="w-4 h-4" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDetails(movie);
                }}
                className="bg-gray-600/70 text-white p-2 rounded-full hover:bg-gray-600 transition-colors ml-auto"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
