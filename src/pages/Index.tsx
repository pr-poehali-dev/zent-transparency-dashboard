import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const commissionData = [
    { time: 'Jan', value: 45000 },
    { time: 'Feb', value: 62000 },
    { time: 'Mar', value: 78000 },
    { time: 'Apr', value: 95000 },
    { time: 'May', value: 120000 },
    { time: 'Jun', value: 145000 },
  ];

  const distributionData = [
    { name: 'Holders', value: 70, color: '#C9A961' },
    { name: 'Buyback', value: 20, color: '#E8E9EB' },
    { name: 'Partnerships', value: 10, color: '#666' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight text-primary">ZENT</div>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'tokenomics', 'dashboard', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary capitalize ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-foreground">
            ZENT
          </h1>
          <p className="text-xl md:text-2xl text-primary font-light tracking-wide">
            Transparency That Pays
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Revolutionary tokenomics on Solana. 70% of all trading fees distributed to holders.
            Full transparency. Real returns.
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium"
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('dashboard')}
              className="border-border hover:bg-muted px-8 py-6 text-base font-medium"
            >
              Dashboard
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto space-y-16">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">About ZENT</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Zenith Entry Network Token brings unprecedented transparency to cryptocurrency tokenomics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: 'Shield',
                title: 'Full Transparency',
                description: 'Every transaction tracked. Every fee distributed. Complete visibility into fund allocation.',
              },
              {
                icon: 'Zap',
                title: 'Solana Speed',
                description: 'Built on Solana for instant transactions and minimal fees. Maximum efficiency.',
              },
              {
                icon: 'TrendingUp',
                title: 'Holder Rewards',
                description: '70% of all trading fees automatically distributed to token holders. Earn passively.',
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                <Icon name={feature.icon} size={40} className="text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tokenomics" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">Tokenomics</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Fair distribution model designed for sustainable growth and holder benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Card className="p-12 bg-card border-border">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    dataKey="value"
                    strokeWidth={2}
                    stroke="#0A0B0F"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1A1B1F',
                      border: '1px solid #333',
                      borderRadius: '8px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <div className="space-y-6">
              {distributionData.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold"
                    style={{ backgroundColor: item.color + '20', color: item.color }}
                  >
                    {item.value}%
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.name === 'Holders' && 'Automatically distributed to all token holders proportionally'}
                      {item.name === 'Buyback' && 'Used for token buybacks to support price stability'}
                      {item.name === 'Partnerships' && 'Strategic partnerships and ecosystem development'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">Live Dashboard</h2>
            <p className="text-muted-foreground text-lg">Real-time protocol metrics and transparency data</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { label: 'Total Volume', value: '$2.4M', icon: 'DollarSign' },
              { label: 'Holders', value: '8,432', icon: 'Users' },
              { label: 'Distributed', value: '$168K', icon: 'TrendingUp' },
              { label: 'Buyback Fund', value: '$48K', icon: 'ArrowUpCircle' },
            ].map((stat, i) => (
              <Card key={i} className="p-6 bg-card border-border">
                <div className="flex items-start justify-between mb-4">
                  <Icon name={stat.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-light mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card border-border max-w-6xl mx-auto">
            <h3 className="text-2xl font-light mb-8">Fee Distribution History</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={commissionData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C9A961" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#C9A961" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1B1F',
                    border: '1px solid #333',
                    borderRadius: '8px',
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="#C9A961" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-8 bg-card border-border max-w-6xl mx-auto">
            <h3 className="text-2xl font-light mb-8">Monthly Commission Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={commissionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1B1F',
                    border: '1px solid #333',
                    borderRadius: '8px',
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="#C9A961" strokeWidth={3} dot={{ fill: '#C9A961' }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </section>

      <section id="contacts" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto text-center space-y-12 max-w-3xl">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">Join our community and stay updated</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'MessageCircle', label: 'Telegram', link: '#' },
              { icon: 'Twitter', label: 'Twitter', link: '#' },
              { icon: 'Mail', label: 'Email', link: '#' },
            ].map((contact, i) => (
              <Card
                key={i}
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer group"
              >
                <Icon name={contact.icon} size={32} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-medium">{contact.label}</div>
              </Card>
            ))}
          </div>

          <div className="pt-12 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2026 ZENT. Built on Solana. Transparency That Pays.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
