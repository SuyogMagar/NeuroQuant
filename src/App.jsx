
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AvailableFunds from "./pages/AvailableFunds";
import InvestmentDetails from "./pages/InvestmentDetails";
import MyInvestments from "./pages/MyInvestments";
import TransactionHistory from "./pages/TransactionHistory";
import ProfileSettings from "./pages/ProfileSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes (will add authentication later) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/funds" element={<AvailableFunds />} />
          <Route path="/funds/:fundId" element={<InvestmentDetails />} />
          <Route path="/my-investments" element={<MyInvestments />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/profile" element={<ProfileSettings />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
