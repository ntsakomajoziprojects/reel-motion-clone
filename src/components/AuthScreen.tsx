
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const AuthScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login, register, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(email, password, name);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1489599516861-42049c166115?w=1920&h=1080&fit=crop)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-md p-8">
        {/* Netflix Logo */}
        <div className="text-center mb-8">
          <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
        </div>

        {/* Auth Form */}
        <div className="bg-black/75 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-white text-3xl font-semibold mb-6">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700 text-white p-4 rounded border border-gray-600 focus:border-white focus:outline-none"
                required
              />
            )}
            
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 text-white p-4 rounded border border-gray-600 focus:border-white focus:outline-none"
              required
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 text-white p-4 rounded border border-gray-600 focus:border-white focus:outline-none"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 text-white p-4 rounded font-semibold hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : (isLogin ? 'Sign In' : 'Sign Up')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isLogin ? "New to Netflix?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white hover:underline ml-2"
              >
                {isLogin ? 'Sign up now' : 'Sign in'}
              </button>
            </p>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
              <a href="#" className="text-blue-500 hover:underline">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
