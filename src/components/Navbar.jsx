import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/user/me", { withCredentials: true })
      .then(res => {
        if (res.data && res.data.name) setUser(res.data);
        else setUser(null);
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <nav className="fixed w-full bg-navy/90 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-white">
          Neuro<span className="text-gold">Quant</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/80 hover:text-gold transition-colors">Home</Link>
          <a href="#about" className="text-white/80 hover:text-gold transition-colors">About</a>
          <a href="#strategies" className="text-white/80 hover:text-gold transition-colors">Strategies</a>
          {user ? (
            <div className="flex items-center space-x-3">
              <img src={user.picture} alt={user.name} className="h-8 w-8 rounded-full border-2 border-gold" />
              <span className="text-white font-semibold">{user.name}</span>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-white/80 hover:text-gold transition-colors">Login</Link>
              <Link to="/register">
                <Button variant="outline" className="!border-gold !text-gold !hover:bg-gold !hover:text-navy !text-lg !font-semibold !px-5 !py-2 !rounded-full !shadow-xl">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-md md:hidden py-4">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/" className="text-white/80 hover:text-gold transition-colors">Home</Link>
              <a href="#about" className="text-white/80 hover:text-gold transition-colors">About</a>
              <a href="#strategies" className="text-white/80 hover:text-gold transition-colors">Strategies</a>
              {user ? (
                <div className="flex flex-col items-center space-y-2">
                  <img src={user.picture} alt={user.name} className="h-8 w-8 rounded-full border-2 border-gold" />
                  <span className="text-white font-semibold">{user.name}</span>
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-white/80 hover:text-gold transition-colors">Login</Link>
                  <Link to="/register">
                    <Button variant="outline" className="!border-gold !text-gold !hover:bg-gold !hover:text-navy !text-lg !font-semibold !px-5 !py-2 !rounded-full !shadow-xl">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
