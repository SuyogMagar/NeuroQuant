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
    <div className="min-h-screen bg-navy flex flex-col md:flex-row">
      {/* Mobile navbar */}
      <div className="md:hidden bg-navy/90 backdrop-blur-md sticky top-0 z-10 flex justify-between items-center p-4 border-b border-white/10">
        <Link to="/dashboard" className="text-xl font-semibold text-white">
          Neuro<span className="text-gold">Quant</span>
        </Link>
        <Button variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Sidebar for desktop and mobile */}
      <div 
        className={cn(
          "bg-white/5 backdrop-blur-lg h-screen fixed inset-y-0 left-0 z-20 w-64 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:static md:inset-y-auto md:left-auto md:z-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-6 py-8 border-b border-white/10 hidden md:block">
            <Link to="/" className="text-xl font-semibold text-white">
              Neuro<span className="text-gold">Quant</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg transition-colors",
                  location.pathname === item.href 
                    ? "bg-gold text-navy" 
                    : "text-white hover:bg-white/10"
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.text}
              </Link>
            ))}
          </nav>

          {/* User profile and logout */}
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center px-4 py-3">
              <div className="h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-medium">
                JD
              </div>
              <div className="ml-3">
                <p className="text-white font-medium">John Doe</p>
                <p className="text-white/50 text-sm">john@example.com</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="mt-2 w-full flex items-center px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 overflow-y-auto md:ml-64">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
