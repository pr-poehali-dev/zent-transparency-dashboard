import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const commissionData = [
    { time: 'Jan', value: 45000 },
    { time: 'Feb', value: 62000 },
    { time: 'Mar', value: 78000 },
    { time: 'Apr', value: 95000 },
    { time: 'May', value: 120000 },
    { time: 'Jun', value: 145000 },
  ];

  const distributionData = [
    { name: 'Holders', value: 70, gradient: 'from-purple-500 to-pink-500' },
    { name: 'Buyback', value: 20, gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Partnerships', value: 10, gradient: 'from-violet-500 to-purple-500' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
      <div className="fixed top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '3s' }} />

      <nav className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-2xl border-b border-border/50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ZENT
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'tokenomics', 'dashboard', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all hover:text-primary capitalize relative group ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-transform origin-left ${
                    activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
        <div className="container mx-auto text-center space-y-10 relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              ZENT
            </h1>
            <div className="relative inline-block">
              <p className="text-2xl md:text-3xl font-light tracking-wide text-foreground/90 relative z-10">
                Transparency That Pays
              </p>
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-500/50 to-cyan-500/50 animate-glow" />
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            Revolutionary tokenomics on Solana blockchain. 70% of all trading fees automatically distributed to holders.
            Experience full transparency with real returns.
          </p>
          
          <div className="flex gap-5 justify-center pt-10">
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-7 text-lg font-semibold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105"
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('dashboard')}
              className="border-2 border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 backdrop-blur-xl px-10 py-7 text-lg font-semibold rounded-2xl transition-all hover:scale-105 hover:border-cyan-400"
            >
              Dashboard
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="container mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About ZENT
            </h2>
            <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
              Zenith Entry Network Token brings unprecedented transparency to cryptocurrency tokenomics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Full Transparency',
                description: 'Every transaction tracked. Every fee distributed. Complete visibility into fund allocation.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'Zap',
                title: 'Solana Speed',
                description: 'Built on Solana for instant transactions and minimal fees. Maximum efficiency.',
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                icon: 'TrendingUp',
                title: 'Holder Rewards',
                description: '70% of all trading fees automatically distributed to token holders. Earn passively.',
                gradient: 'from-violet-500 to-purple-500'
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="group p-10 bg-card/50 backdrop-blur-xl border-border/50 hover:border-transparent transition-all duration-500 relative overflow-hidden hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tokenomics" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="container mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tokenomics
            </h2>
            <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
              Fair distribution model designed for sustainable growth and holder benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {distributionData.map((item, i) => (
              <Card
                key={i}
                className="group p-10 bg-card/50 backdrop-blur-xl border-border/50 hover:border-transparent transition-all duration-500 relative overflow-hidden hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`text-7xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent mb-6`}>
                    {item.value}%
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.name === 'Holders' && 'Automatically distributed to all token holders proportionally based on holdings'}
                    {item.name === 'Buyback' && 'Strategic token buybacks to support price stability and long-term growth'}
                    {item.name === 'Partnerships' && 'Ecosystem development and strategic partnership initiatives'}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboard" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="container mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Live Dashboard
            </h2>
            <p className="text-muted-foreground text-xl">Real-time protocol metrics and transparency data</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { label: 'Total Volume', value: '$2.4M', icon: 'DollarSign', gradient: 'from-purple-500 to-pink-500' },
              { label: 'Holders', value: '8,432', icon: 'Users', gradient: 'from-cyan-500 to-blue-500' },
              { label: 'Distributed', value: '$168K', icon: 'TrendingUp', gradient: 'from-violet-500 to-purple-500' },
              { label: 'Buyback Fund', value: '$48K', icon: 'ArrowUpCircle', gradient: 'from-pink-500 to-rose-500' },
            ].map((stat, i) => (
              <Card key={i} className="group p-8 bg-card/50 backdrop-blur-xl border-border/50 hover:border-transparent transition-all duration-500 relative overflow-hidden hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6`}>
                    <Icon name={stat.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-10 bg-card/50 backdrop-blur-xl border-border/50 max-w-7xl mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Fee Distribution History
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={commissionData}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="time" stroke="#888" style={{ fontSize: '14px' }} />
                  <YAxis stroke="#888" style={{ fontSize: '14px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f0f14',
                      border: '1px solid #a855f740',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(168, 85, 247, 0.2)'
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-10 bg-card/50 backdrop-blur-xl border-border/50 max-w-7xl mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Monthly Commission Growth
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={commissionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="time" stroke="#888" style={{ fontSize: '14px' }} />
                  <YAxis stroke="#888" style={{ fontSize: '14px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f0f14',
                      border: '1px solid #06b6d440',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="url(#lineGradient)" 
                    strokeWidth={4} 
                    dot={{ fill: '#06b6d4', r: 6, strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 8, strokeWidth: 3 }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="container mx-auto text-center space-y-16 max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-xl">Join our community and stay updated with latest developments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'MessageCircle', label: 'Telegram', link: '#', gradient: 'from-blue-500 to-cyan-500' },
              { icon: 'Twitter', label: 'Twitter', link: '#', gradient: 'from-purple-500 to-pink-500' },
              { icon: 'Mail', label: 'Email', link: '#', gradient: 'from-violet-500 to-purple-500' },
            ].map((contact, i) => (
              <Card
                key={i}
                className="group p-12 bg-card/50 backdrop-blur-xl border-border/50 hover:border-transparent transition-all duration-500 cursor-pointer relative overflow-hidden hover:scale-110"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={contact.icon} size={32} className="text-white" />
                  </div>
                  <div className="text-xl font-bold">{contact.label}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="pt-16 border-t border-border/50">
            <p className="text-muted-foreground">
              © 2026 ZENT. Built on Solana. Transparency That Pays.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
