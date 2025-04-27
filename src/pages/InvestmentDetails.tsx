
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, PieChart, TrendingUp, ArrowLeft, Download, FileText } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";

const InvestmentDetails = () => {
  const { fundId } = useParams<{ fundId: string }>();
  const [fund, setFund] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate loading and use mock data
    setLoading(true);
    setTimeout(() => {
      // Mock funds data - in a real app this would come from an API
      const fundData = {
        id: fundId,
        name: fundId === "quantum-ai" ? "Quantum AI Fund" : "Global Macro Opportunities",
        description: fundId === "quantum-ai" 
          ? "Leveraging artificial intelligence to identify market inefficiencies and generate alpha."
          : "Diversified strategy focusing on macroeconomic trends across global markets.",
        risk: fundId === "quantum-ai" ? "Medium-High" : "Medium",
        category: fundId === "quantum-ai" ? "Quantitative" : "Macro",
        minInvestment: fundId === "quantum-ai" ? "$100,000" : "$250,000",
        managementFee: "1.5%",
        performanceFee: "20% of profits",
        aum: fundId === "quantum-ai" ? "$1.2B" : "$3.8B",
        returns: fundId === "quantum-ai" 
          ? { "1y": "+18.5%", "3y": "+52.7%", "5y": "+97.3%" }
          : { "1y": "+12.3%", "3y": "+38.1%", "5y": "+72.5%" },
        strategy: fundId === "quantum-ai" 
          ? "The Quantum AI Fund employs a sophisticated algorithmic trading strategy that leverages machine learning to identify market inefficiencies. Our proprietary AI models analyze vast datasets across global markets to identify patterns and opportunities that human traders might miss. The fund maintains a diversified portfolio across multiple asset classes including equities, fixed income, commodities, and currencies."
          : "The Global Macro Opportunities Fund takes a top-down approach to investing, analyzing macroeconomic trends, monetary policy, and geopolitical events to identify opportunities across global markets. The fund employs both directional and relative value strategies across multiple asset classes, maintaining tactical flexibility to adapt to changing market conditions.",
        managers: [
          {
            name: fundId === "quantum-ai" ? "Dr. Sarah Chen" : "Michael Rodriguez",
            title: fundId === "quantum-ai" ? "Chief Investment Officer" : "Portfolio Manager",
            bio: fundId === "quantum-ai" 
              ? "Ph.D. in Computer Science from MIT, with 15+ years of experience in quantitative trading."
              : "20+ years of experience in global markets, previously at Goldman Sachs and BlackRock."
          },
          {
            name: fundId === "quantum-ai" ? "David Park" : "Jennifer Liu",
            title: fundId === "quantum-ai" ? "Lead Quant Strategist" : "Senior Economist",
            bio: fundId === "quantum-ai" 
              ? "Former head of algorithmic trading at a major investment bank with expertise in AI applications."
              : "Ph.D. in Economics from Harvard, specializing in monetary policy and global economic trends."
          }
        ]
      };
      setFund(fundData);
      setLoading(false);
    }, 500);
  }, [fundId]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 flex justify-center items-center h-full">
          <div className="text-white">Loading fund details...</div>
        </div>
      </DashboardLayout>
    );
  }

  if (!fund) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <div className="text-white">Fund not found</div>
          <Link to="/funds" className="text-gold hover:underline mt-2 inline-block">
            Back to Available Funds
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link to="/funds" className="text-gold hover:text-gold/80 mr-4">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold text-white">{fund.name}</h1>
        </div>

        {/* Fund Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="col-span-2 bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle className="text-lg text-white">Fund Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-6">{fund.description}</p>
              <p className="text-white/70 mb-6">{fund.strategy}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
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
                  <p className="text-white/50 text-sm">Management Fee</p>
                  <p className="text-white font-medium">{fund.managementFee}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm">Performance Fee</p>
                  <p className="text-white font-medium">{fund.performanceFee}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm">Assets Under Management</p>
                  <p className="text-white font-medium">{fund.aum}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-gold text-navy hover:bg-gold/90 w-full sm:w-auto">
                  Invest Now
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 flex items-center justify-center w-full sm:w-auto">
                  <FileText className="mr-2 h-4 w-4" />
                  Fund Prospectus
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 flex items-center justify-center w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle className="text-lg text-white">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">1 Year Return</span>
                    <span className="text-green-400 font-medium">{fund.returns["1y"]}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${parseFloat(fund.returns["1y"]) * 4}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">3 Year Return</span>
                    <span className="text-green-400 font-medium">{fund.returns["3y"]}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${parseFloat(fund.returns["3y"]) * 1.5}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">5 Year Return</span>
                    <span className="text-green-400 font-medium">{fund.returns["5y"]}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${parseFloat(fund.returns["5y"]) * 0.8}%` }}></div>
                  </div>
                </div>
              </div>
              
              {/* We'll add real charts later */}
              <div className="bg-white/10 rounded-lg h-40 flex items-center justify-center mb-4">
                <p className="text-white/50">Performance Chart Will Be Displayed Here</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg text-white">Historical Performance</CardTitle>
                <BarChart className="h-5 w-5 text-white/70" />
              </div>
            </CardHeader>
            <CardContent>
              {/* We'll add real charts later */}
              <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
                <p className="text-white/50">Historical Chart Will Be Displayed Here</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg text-white">Asset Allocation</CardTitle>
                <PieChart className="h-5 w-5 text-white/70" />
              </div>
            </CardHeader>
            <CardContent>
              {/* We'll add real charts later */}
              <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
                <p className="text-white/50">Allocation Chart Will Be Displayed Here</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fund Management Team */}
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-white">Fund Management Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fund.managers.map((manager: any, index: number) => (
                <div key={index} className="flex items-start p-4 bg-white/10 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-gold text-navy flex items-center justify-center font-medium text-lg">
                    {manager.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-white">{manager.name}</h3>
                    <p className="text-gold text-sm">{manager.title}</p>
                    <p className="text-white/70 text-sm mt-2">{manager.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InvestmentDetails;
