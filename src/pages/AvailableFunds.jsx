
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";

const AvailableFunds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock funds data
  const funds = [
    {
      id: "quantum-ai",
      name: "Quantum AI Fund",
      description: "Leveraging artificial intelligence to identify market inefficiencies and generate alpha.",
      risk: "Medium-High",
      category: "Quantitative",
      minInvestment: "$100,000",
      aum: "$1.2B",
      returns: { "1y": "+18.5%", "3y": "+52.7%", "5y": "+97.3%" },
      trending: "up"
    },
    {
      id: "global-macro",
      name: "Global Macro Opportunities",
      description: "Diversified strategy focusing on macroeconomic trends across global markets.",
      risk: "Medium",
      category: "Macro",
      minInvestment: "$250,000",
      aum: "$3.8B",
      returns: { "1y": "+12.3%", "3y": "+38.1%", "5y": "+72.5%" },
      trending: "up"
    },
    {
      id: "tech-innovation",
      name: "Tech Innovation Fund",
      description: "Focused on emerging technologies and disruptive innovation in the tech sector.",
      risk: "High",
      category: "Sector",
      minInvestment: "$150,000",
      aum: "$780M",
      returns: { "1y": "+22.7%", "3y": "+68.9%", "5y": "+115.2%" },
      trending: "up"
    },
    {
      id: "sustainable-future",
      name: "Sustainable Future",
      description: "Environmentally and socially responsible investments with strong growth potential.",
      risk: "Medium-Low",
      category: "ESG",
      minInvestment: "$50,000",
      aum: "$620M",
      returns: { "1y": "+9.8%", "3y": "+29.5%", "5y": "+61.4%" },
      trending: "down"
    },
    {
      id: "emerging-markets",
      name: "Emerging Markets Fund",
      description: "Diversified exposure to high-growth emerging economies across various sectors.",
      risk: "High",
      category: "Regional",
      minInvestment: "$100,000",
      aum: "$950M",
      returns: { "1y": "+16.2%", "3y": "+43.8%", "5y": "+79.1%" },
      trending: "up"
    }
  ];

  // Filter funds based on search term
  const filteredFunds = funds.filter(fund => 
    fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fund.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fund.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">Available Investment Funds</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
            <Input
              placeholder="Search funds..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white focus:border-gold w-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredFunds.map((fund) => (
            <Card key={fund.id} className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-gold/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between">
                  <CardTitle className="text-xl text-white">{fund.name}</CardTitle>
                  {fund.trending === "up" ? (
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-400" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">{fund.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-white/50 text-sm">Risk Level</p>
                    <p className="text-white font-medium">{fund.risk}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Category</p>
                    <p className="text-white font-medium">{fund.category}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Min. Investment</p>
                    <p className="text-white font-medium">{fund.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Assets Under Management</p>
                    <p className="text-white font-medium">{fund.aum}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="flex space-x-6">
                    <div>
                      <p className="text-white/50 text-sm">1Y Return</p>
                      <p className={`font-medium ${fund.returns["1y"].startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {fund.returns["1y"]}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">3Y Return</p>
                      <p className={`font-medium ${fund.returns["3y"].startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {fund.returns["3y"]}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">5Y Return</p>
                      <p className={`font-medium ${fund.returns["5y"].startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {fund.returns["5y"]}
                      </p>
                    </div>
                  </div>
                  
                  <Link to={`/funds/${fund.id}`}>
                    <Button className="bg-gold text-navy hover:bg-gold/90 flex items-center">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AvailableFunds;
