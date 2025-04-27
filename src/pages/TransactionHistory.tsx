
import { useState } from 'react';
import DashboardLayout from "../components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, Filter, Search } from "lucide-react";

const TransactionHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  // Mock transaction data
  const transactions = [
    {
      id: "tx-001",
      type: "deposit",
      amount: "$100,000",
      status: "completed",
      date: "Apr 15, 2024",
      description: "Initial deposit"
    },
    {
      id: "tx-002",
      type: "investment",
      amount: "$50,000",
      status: "completed",
      date: "Apr 16, 2024",
      fund: "Quantum AI Fund",
      description: "Investment purchase"
    },
    {
      id: "tx-003",
      type: "investment",
      amount: "$35,000",
      status: "completed",
      date: "Apr 16, 2024",
      fund: "Global Macro Opportunities",
      description: "Investment purchase"
    },
    {
      id: "tx-004",
      type: "dividend",
      amount: "$1,250",
      status: "completed",
      date: "May 1, 2024",
      fund: "Quantum AI Fund",
      description: "Monthly dividend payment"
    },
    {
      id: "tx-005",
      type: "withdrawal",
      amount: "$10,000",
      status: "completed",
      date: "May 5, 2024",
      description: "Withdrawal to bank account"
    },
    {
      id: "tx-006",
      type: "investment",
      amount: "$25,000",
      status: "pending",
      date: "May 15, 2024",
      fund: "Tech Innovation Fund",
      description: "Investment purchase"
    }
  ];

  // Filter transactions based on search term and filter
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (transaction.fund && transaction.fund.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesFilter = filter === 'all' || transaction.type === filter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Transaction History</h1>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>

        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 mb-6">
          <CardContent className="p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white focus:border-gold w-full"
              />
            </div>
            <div className="flex space-x-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                className={filter === 'all' ? 'bg-gold text-navy' : 'border-white/20 text-white'}
                onClick={() => setFilter('all')}
              >
                All
              </Button>
              <Button
                variant={filter === 'deposit' ? 'default' : 'outline'}
                className={filter === 'deposit' ? 'bg-gold text-navy' : 'border-white/20 text-white'}
                onClick={() => setFilter('deposit')}
              >
                Deposits
              </Button>
              <Button
                variant={filter === 'withdrawal' ? 'default' : 'outline'}
                className={filter === 'withdrawal' ? 'bg-gold text-navy' : 'border-white/20 text-white'}
                onClick={() => setFilter('withdrawal')}
              >
                Withdrawals
              </Button>
              <Button
                variant={filter === 'investment' ? 'default' : 'outline'}
                className={filter === 'investment' ? 'bg-gold text-navy' : 'border-white/20 text-white'}
                onClick={() => setFilter('investment')}
              >
                Investments
              </Button>
              <Button
                variant={filter === 'dividend' ? 'default' : 'outline'}
                className={filter === 'dividend' ? 'bg-gold text-navy' : 'border-white/20 text-white'}
                onClick={() => setFilter('dividend')}
              >
                Dividends
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white/70">Date</th>
                    <th className="text-left p-4 text-white/70">Description</th>
                    <th className="text-left p-4 text-white/70">Fund</th>
                    <th className="text-left p-4 text-white/70">Amount</th>
                    <th className="text-left p-4 text-white/70">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="p-4 text-white">{transaction.date}</td>
                        <td className="p-4 text-white">{transaction.description}</td>
                        <td className="p-4 text-white">{transaction.fund || '-'}</td>
                        <td className={`p-4 ${
                          transaction.type === 'withdrawal' ? 'text-red-400' : 
                          (transaction.type === 'deposit' || transaction.type === 'dividend') ? 'text-green-400' : 'text-white'
                        }`}>
                          {transaction.type === 'withdrawal' ? '-' : transaction.type === 'deposit' || transaction.type === 'dividend' ? '+' : ''}
                          {transaction.amount}
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            transaction.status === 'completed' ? 'bg-green-400/20 text-green-400' : 'bg-yellow-400/20 text-yellow-400'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-4 text-center text-white/50">No transactions found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TransactionHistory;
