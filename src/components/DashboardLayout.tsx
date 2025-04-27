import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  BarChart,
  LogOut,
  Menu,
  PieChart,
  Settings,
  User,
  Wallet,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { icon: BarChart, text: 'Dashboard', href: '/dashboard' },
    { icon: PieChart, text: 'Available Funds', href: '/funds' },
    { icon: Wallet, text: 'My Investments', href: '/my-investments' },
    { icon: FileText, text: 'Transaction History', href: '/transactions' },
    { icon: User, text: 'Profile Settings', href: '/profile' },
  ];

  const handleLogout = () => {
    // Will implement logout logic later
    console.log('Logging out');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-navy flex flex-col">
      {/* Horizontal Navbar */}
      <nav className="w-full bg-white/5 backdrop-blur-lg flex items-center justify-between px-6 py-4 border-b border-white/10">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-white mr-8">
          Neuro<span className="text-gold">Quant</span>
        </Link>
        {/* Navigation Items */}
        <div className="flex space-x-4">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center px-4 py-2 rounded-lg transition-colors",
                location.pathname === item.href 
                  ? "bg-gold text-navy" 
                  : "text-white hover:bg-white/10"
              )}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.text}
            </Link>
          ))}
        </div>
        {/* User profile and logout */}
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-medium">
            JD
          </div>
          <div className="hidden md:block text-right">
            <p className="text-white font-medium">John Doe</p>
            <p className="text-white/50 text-sm">john@example.com</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign out
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto md:ml-64">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
