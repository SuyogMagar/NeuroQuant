
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  PieChart,
  TrendingUp,
  Wallet,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard = () => {
  // Mock data for the dashboard
  const portfolioValue = "$1,250,000";
  const portfolioChange = "+5.7%";
  const totalInvestments = 3;
  const totalReturn = "+12.4%";

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <Button className="bg-gold text-navy hover:bg-gold/90">
            New Investment
          </Button>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white/70">Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{portfolioValue}</div>
              <p className="text-sm text-green-400 flex items-center">
                {portfolioChange}
                <TrendingUp className="h-4 w-4 ml-1" />
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white/70">Total Investments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalInvestments}</div>
              <p className="text-sm text-white/50">Active funds</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white/70">Total Return</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{totalReturn}</div>
              <p className="text-sm text-white/50">Last 12 months</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white/70">Available Cash</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$105,000</div>
              <p className="text-sm text-white/50">Ready to invest</p>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Performance and Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-medium text-white">Portfolio Performance</CardTitle>
                <BarChart className="h-5 w-5 text-white/70" />
              </div>
            </CardHeader>
            <CardContent>
              {/* We'll add charts later */}
              <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
                <p className="text-white/50">Performance Chart Will Be Displayed Here</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-medium text-white">Asset Allocation</CardTitle>
                <PieChart className="h-5 w-5 text-white/70" />
              </div>
            </CardHeader>
            <CardContent>
              {/* We'll add charts later */}
              <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
                <p className="text-white/50">Allocation Chart Will Be Displayed Here</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investments and Market Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-medium text-white">Your Investments</CardTitle>
                <Link to="/my-investments" className="text-gold hover:text-gold/80 text-sm flex items-center">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Quantum AI Fund", value: "$500,000", return: "+8.5%", allocation: "40%" },
                  { name: "Global Macro Opportunities", value: "$450,000", return: "+15.2%", allocation: "36%" },
                  { name: "Tech Innovation Fund", value: "$300,000", return: "+10.9%", allocation: "24%" }
                ].map((fund, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors">
                    <div>
                      <h3 className="font-medium text-white">{fund.name}</h3>
                      <p className="text-sm text-white/50">{fund.allocation} of portfolio</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-white">{fund.value}</p>
                      <p className="text-sm text-green-400">{fund.return}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-medium text-white">Recommended Funds</CardTitle>
                <Link to="/funds" className="text-gold hover:text-gold/80 text-sm flex items-center">
                  Browse All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Emerging Markets Fund", risk: "High", return: "18.7% (1yr)", min: "$100,000" },
                  { name: "Sustainable Future", risk: "Medium", return: "12.3% (1yr)", min: "$50,000" }
                ].map((fund, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors">
                    <div>
                      <h3 className="font-medium text-white">{fund.name}</h3>
                      <p className="text-sm text-white/50">Risk: {fund.risk} | Min: {fund.min}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-green-400 mr-3">{fund.return}</span>
                      <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-navy">
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
