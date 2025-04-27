import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (will be implemented later with authentication)
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-navy flex flex-col justify-center items-center px-4 py-12">
      <Link to="/" className="text-3xl font-bold text-white mb-8">
        Neuro<span className="text-gold">Quant</span>
      </Link>
      
      <Card className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-white">Sign In</CardTitle>
          <CardDescription className="text-center text-white/70">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white/70">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="bg-white/10 border-white/20 text-white focus:border-gold"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-white/70">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-white/10 border-white/20 text-white focus:border-gold pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-gold hover:underline">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/90">
              Sign In
            </Button>
          </form>
          <div className="my-6 flex items-center justify-center">
            <span className="h-px w-16 bg-white/20" />
            <span className="mx-4 text-white/50 text-sm">or</span>
            <span className="h-px w-16 bg-white/20" />
          </div>
          <a href="http://localhost:8080/oauth2/authorization/google" className="w-full block">
            <Button type="button" className="w-full flex items-center justify-center gap-2 bg-white text-navy border border-gold hover:bg-gold hover:text-navy font-semibold py-2 rounded-full shadow-md transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="h-5 w-5" />
              Sign in with Google
            </Button>
          </a>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-white/70">
            Don't have an account?{' '}
            <Link to="/register" className="text-gold hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
