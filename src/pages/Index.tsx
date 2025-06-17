
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { movies, categories } from '../data/movies';
import { Movie } from '../data/movies';

// Components
import AuthScreen from '../components/AuthScreen';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import MovieModal from '../components/MovieModal';
import VideoPlayer from '../components/VideoPlayer';

const Index: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [heroMovie, setHeroMovie] = useState<Movie>(movies[0]);

  // Filter movies based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())) ||
        movie.cast.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  }, [searchQuery]);

  // Rotate hero movie every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroMovie(movies[Math.floor(Math.random() * movies.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsPlayerOpen(true);
  };

  const handleDetailsClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedMovie(null);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      {/* Main Content */}
      <main className="pt-16">
        {!searchQuery ? (
          <>
            {/* Hero Section */}
            <Hero 
              movie={heroMovie}
              onPlayClick={handlePlayClick}
              onDetailsClick={handleDetailsClick}
            />

            {/* Movie Rows */}
            <div className="py-8 space-y-8">
              <MovieRow
                title="Trending Now"
                movies={categories.trending}
                onPlay={handlePlayClick}
                onDetails={handleDetailsClick}
              />
              
              <MovieRow
                title="Top Picks for You"
                movies={categories.topPicks}
                onPlay={handlePlayClick}
                onDetails={handleDetailsClick}
              />
              
              <MovieRow
                title="Continue Watching"
                movies={categories.continueWatching}
                onPlay={handlePlayClick}
                onDetails={handleDetailsClick}
              />
              
              <MovieRow
                title="New Releases"
                movies={categories.newReleases}
                onPlay={handlePlayClick}
                onDetails={handleDetailsClick}
              />
              
              <MovieRow
                title="Action & Adventure"
                movies={categories.action}
                onPlay={handlePlayClick}
                onDetails={handleDetailsClick}
              />
              
              <MovieRow
                title="Dramas"
                movies={categories.drama}
                onPlay={handlePlayClick}
                onDetails={handleDetailsClick}
              />
              
              <MovieRow
                title="Sci-Fi Movies"
                movies={categories.sciFi}
                onPlay={handlePlayClick}
                onDetails={handleDetailsClick}
              />
            </div>
          </>
        ) : (
          // Search Results
          <div className="pt-8">
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-white text-2xl font-semibold mb-6">
                Search results for "{searchQuery}"
              </h2>
              
              {filteredMovies.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {filteredMovies.map((movie) => (
                    <div
                      key={movie.id}
                      className="cursor-pointer transform hover:scale-105 transition-transform"
                      onClick={() => handleDetailsClick(movie)}
                    >
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full h-auto rounded-md"
                      />
                      <h3 className="text-white text-sm mt-2 line-clamp-2">{movie.title}</h3>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-lg">No results found for "{searchQuery}"</p>
                  <p className="text-gray-500 text-sm mt-2">Try different keywords or browse our collection</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onPlay={handlePlayClick}
      />
      
      <VideoPlayer
        movie={selectedMovie}
        isOpen={isPlayerOpen}
        onClose={handleClosePlayer}
      />
    </div>
  );
};

export default Index;
