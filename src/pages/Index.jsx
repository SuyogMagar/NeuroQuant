import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import StatsCard from '../components/StatsCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
              Innovative Investment
              <span className="text-gold"> Strategies</span>
            </h1>
            <p className="text-2xl text-white/70 mb-10">
              Delivering exceptional returns through sophisticated quantitative analysis and strategic market insights
            </p>
            <Button className="!bg-gold !text-navy !hover:bg-gold/90 !text-lg !font-semibold !px-5 !py-2 !rounded-full !shadow-xl">
              Learn More <ArrowRight className="ml-3 h-7 w-7" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-navy to-navy/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard 
              title="Assets Under Management"
              value="$8.5B+"
              description="Trust from institutional investors worldwide"
            />
            <StatsCard 
              title="Annual Return"
              value="21.4%"
              description="Average return over the last 5 years"
            />
            <StatsCard 
              title="Global Presence"
              value="12+"
              description="Countries with active investments"
            />
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Our Investment <span className="text-gold">Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quantitative Analysis",
                description: "Data-driven decision making using advanced algorithms and machine learning"
              },
              {
                title: "Risk Management",
                description: "Sophisticated risk assessment and mitigation strategies"
              },
              {
                title: "Global Perspective",
                description: "Diversified portfolio with exposure to international markets"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10 hover:border-gold/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gold">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
