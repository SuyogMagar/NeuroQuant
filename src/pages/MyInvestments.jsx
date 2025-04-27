
import DashboardLayout from "../components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const MyInvestments = () => {
  // Mock data for investments
  const investments = [
    {
      id: "quantum-ai",
      fundName: "Quantum AI Fund",
      investedAmount: "$500,000",
      currentValue: "$542,500",
      return: "+8.5%",
      returnTrend: "up",
      allocationPercentage: "40%",
      investmentDate: "Jan 15, 2024"
    },
    {
      id: "global-macro",
      fundName: "Global Macro Opportunities",
      investedAmount: "$450,000",
      currentValue: "$518,400",
      return: "+15.2%",
      returnTrend: "up",
      allocationPercentage: "36%",
      investmentDate: "Nov 3, 2023"
    },
    {
      id: "tech-innovation",
      fundName: "Tech Innovation Fund",
      investedAmount: "$300,000",
      currentValue: "$332,700",
      return: "+10.9%",
      returnTrend: "up",
      allocationPercentage: "24%",
      investmentDate: "Mar 22, 2024"
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">My Investments</h1>
          <Button className="bg-gold text-navy hover:bg-gold/90">
            New Investment
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white/70">Total Invested</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$1,250,000</div>
              <p className="text-sm text-white/50">Across 3 funds</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white/70">Current Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$1,393,600</div>
              <p className="text-sm text-green-400 flex items-center">
                +$143,600 (+11.5%)
                <TrendingUp className="h-4 w-4 ml-1" />
              </p>
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

        <h2 className="text-xl font-semibold text-white mb-4">Current Investments</h2>
        
        <div className="space-y-6">
          {investments.map((investment) => (
            <Card key={investment.id} className="bg-white/5 backdrop-blur-lg border border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{investment.fundName}</h3>
                    <p className="text-white/50 text-sm">Invested on {investment.investmentDate}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    {investment.returnTrend === "up" ? (
                      <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-red-400 mr-2" />
                    )}
                    <span className={`font-medium ${investment.returnTrend === "up" ? 'text-green-400' : 'text-red-400'}`}>
                      {investment.return}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-white/50 text-sm">Invested Amount</p>
                    <p className="text-white font-medium">{investment.investedAmount}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Current Value</p>
                    <p className="text-white font-medium">{investment.currentValue}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Portfolio Allocation</p>
                    <p className="text-white font-medium">{investment.allocationPercentage}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Profit/Loss</p>
                    <p className={`font-medium ${investment.returnTrend === "up" ? 'text-green-400' : 'text-red-400'}`}>
                      {investment.returnTrend === "up" ? '+' : '-'}
                      ${Math.abs(parseFloat(investment.currentValue.replace(/[^0-9.-]+/g, "")) - 
                      parseFloat(investment.investedAmount.replace(/[^0-9.-]+/g, ""))).toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link to={`/funds/${investment.id}`}>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">
                      Fund Details
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Withdraw
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Add Investment
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyInvestments;
