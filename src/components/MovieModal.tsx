
import React from 'react';
import { X, Play, Plus, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
  onPlay: (movie: Movie) => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose, onPlay }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] overflow-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Section */}
        <div className="relative">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-64 sm:h-80 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent rounded-t-lg" />
          
          <div className="absolute bottom-6 left-6 right-16">
            <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
              {movie.title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => onPlay(movie)}
                className="flex items-center bg-white text-black px-6 py-2 rounded font-semibold hover:bg-white/90 transition-colors"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Play
              </button>
              
              <button className="bg-gray-600/70 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                <Plus className="w-6 h-6" />
              </button>
              
              <button className="bg-gray-600/70 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                <ThumbsUp className="w-6 h-6" />
              </button>
              
              <button className="bg-gray-600/70 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                <ThumbsDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded">
                  {Math.round(movie.voteAverage * 10)}% Match
                </span>
                <span className="text-white">{movie.releaseDate}</span>
                <span className="border border-gray-500 text-white px-2 py-1 text-sm rounded">
                  {movie.maturity}
                </span>
                <span className="text-white">{movie.duration}</span>
              </div>

              <p className="text-white text-lg mb-6 leading-relaxed">
                {movie.overview}
              </p>
            </div>

            {/* Sidebar Info */}
            <div className="text-gray-300 space-y-4">
              <div>
                <span className="text-gray-400">Cast: </span>
                <span>{movie.cast.join(', ')}</span>
              </div>
              
              <div>
                <span className="text-gray-400">Director: </span>
                <span>{movie.director}</span>
              </div>
              
              <div>
                <span className="text-gray-400">Genres: </span>
                <span>{movie.genre.join(', ')}</span>
              </div>
              
              {movie.seasons && (
                <div>
                  <span className="text-gray-400">Seasons: </span>
                  <span>{movie.seasons}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
