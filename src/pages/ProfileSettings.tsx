
import { useState } from 'react';
import DashboardLayout from "../components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, Upload, Eye, EyeOff } from "lucide-react";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [personalForm, setPersonalForm] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (will be implemented later)
    console.log('Personal form submitted:', personalForm);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (will be implemented later)
    console.log('Password form submitted:', passwordForm);
  };

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Profile Settings</h1>

        <div className="flex mb-6 border-b border-white/10">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'personal' ? 'text-gold border-b-2 border-gold' : 'text-white/70'}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Information
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'security' ? 'text-gold border-b-2 border-gold' : 'text-white/70'}`}
            onClick={() => setActiveTab('security')}
          >
            Security & Password
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'documents' ? 'text-gold border-b-2 border-gold' : 'text-white/70'}`}
            onClick={() => setActiveTab('documents')}
          >
            KYC Documents
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'notifications' ? 'text-gold border-b-2 border-gold' : 'text-white/70'}`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
        </div>

        {activeTab === 'personal' && (
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePersonalSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-white/70">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={personalForm.firstName}
                      onChange={handlePersonalChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-white/70">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={personalForm.lastName}
                      onChange={handlePersonalChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={personalForm.email}
                      onChange={handlePersonalChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white/70">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={personalForm.phone}
                      onChange={handlePersonalChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium text-white/70">
                    Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={personalForm.address}
                    onChange={handlePersonalChange}
                    className="bg-white/10 border-white/20 text-white focus:border-gold"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium text-white/70">
                      City
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={personalForm.city}
                      onChange={handlePersonalChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="state" className="text-sm font-medium text-white/70">
                      State/Province
                    </label>
                    <Input
                      id="state"
                      name="state"
                      value={personalForm.state}
                      onChange={handlePersonalChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="zipCode" className="text-sm font-medium text-white/70">
                      ZIP/Postal Code
                    </label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={personalForm.zipCode}
                      onChange={handlePersonalChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium text-white/70">
                    Country
                  </label>
                  <Input
                    id="country"
                    name="country"
                    value={personalForm.country}
                    onChange={handlePersonalChange}
                    className="bg-white/10 border-white/20 text-white focus:border-gold"
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-gold text-navy hover:bg-gold/90 flex items-center">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === 'security' && (
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Change Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="currentPassword" className="text-sm font-medium text-white/70">
                    Current Password
                  </label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      name="currentPassword"
                      type={showPassword.current ? "text" : "password"}
                      value={passwordForm.currentPassword}
                      onChange={handlePasswordChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50"
                      onClick={() => togglePasswordVisibility('current')}
                    >
                      {showPassword.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="newPassword" className="text-sm font-medium text-white/70">
                    New Password
                  </label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type={showPassword.new ? "text" : "password"}
                      value={passwordForm.newPassword}
                      onChange={handlePasswordChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50"
                      onClick={() => togglePasswordVisibility('new')}
                    >
                      {showPassword.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-white/50">Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-white/70">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword.confirm ? "text" : "password"}
                      value={passwordForm.confirmPassword}
                      onChange={handlePasswordChange}
                      className="bg-white/10 border-white/20 text-white focus:border-gold pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50"
                      onClick={() => togglePasswordVisibility('confirm')}
                    >
                      {showPassword.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-gold text-navy hover:bg-gold/90">
                    Update Password
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === 'documents' && (
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">KYC Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-6">Please upload the required documents to complete your KYC verification.</p>
              
              <div className="space-y-6">
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2">Proof of Identity</h3>
                  <p className="text-white/50 text-sm mb-4">Please upload a valid government-issued photo ID (passport, driver's license, etc).</p>
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <div className="text-white/70">passport.jpg</div>
                      <div className="text-white/50 text-xs">Uploaded on Apr 15, 2024</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 flex items-center">
                        <Upload className="mr-1 h-3 w-3" />
                        Replace
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2">Proof of Address</h3>
                  <p className="text-white/50 text-sm mb-4">Please upload a recent utility bill or bank statement (not older than 3 months).</p>
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <div className="text-white/70">utility_bill.pdf</div>
                      <div className="text-white/50 text-xs">Uploaded on Apr 15, 2024</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 flex items-center">
                        <Upload className="mr-1 h-3 w-3" />
                        Replace
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border border-dashed border-white/20 rounded-lg p-8 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-white/50 mb-2" />
                  <h3 className="font-medium text-white mb-1">Financial Statement</h3>
                  <p className="text-white/50 text-sm text-center mb-4">Please upload a recent financial statement or tax return.</p>
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy flex items-center">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Document
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {activeTab === 'notifications' && (
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-6">Configure how and when you receive notifications from NextQuant.</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <div>
                    <h3 className="font-medium text-white">Investment Updates</h3>
                    <p className="text-white/50 text-sm">Receive notifications about your investment performance</p>
                  </div>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" checked className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">Email</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" checked className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">SMS</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <div>
                    <h3 className="font-medium text-white">New Investment Opportunities</h3>
                    <p className="text-white/50 text-sm">Notifications about new funds or investment options</p>
                  </div>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" checked className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">Email</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">SMS</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <div>
                    <h3 className="font-medium text-white">Account Activity</h3>
                    <p className="text-white/50 text-sm">Login attempts, password changes, and security alerts</p>
                  </div>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" checked className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">Email</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" checked className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">SMS</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <div>
                    <h3 className="font-medium text-white">Transaction Updates</h3>
                    <p className="text-white/50 text-sm">Deposits, withdrawals, and investment transactions</p>
                  </div>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" checked className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">Email</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" checked className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">SMS</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="font-medium text-white">Marketing and Newsletter</h3>
                    <p className="text-white/50 text-sm">Updates about NextQuant products, services, and events</p>
                  </div>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">Email</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-gold focus:ring-gold" />
                      <span className="text-white/70">SMS</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button className="bg-gold text-navy hover:bg-gold/90 flex items-center">
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProfileSettings;
