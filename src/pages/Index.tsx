import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart } from 'recharts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState(new Date());
  const [typedText, setTypedText] = useState('');
  const [hexScroll, setHexScroll] = useState('');

  const fullText = 'TRANSPARENCY_THAT_PAYS.EXE';

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const generateHex = () => {
      const hex = Array.from({ length: 100 }, () => 
        Math.random().toString(16).substring(2, 6).toUpperCase()
      ).join(' ');
      setHexScroll(hex);
    };
    generateHex();
    const hexInterval = setInterval(generateHex, 3000);
    return () => clearInterval(hexInterval);
  }, []);

  const commissionData = [
    { time: 'JAN', value: 45000, block: 2341 },
    { time: 'FEB', value: 62000, block: 4782 },
    { time: 'MAR', value: 78000, block: 7123 },
    { time: 'APR', value: 95000, block: 9564 },
    { time: 'MAY', value: 120000, block: 12005 },
    { time: 'JUN', value: 145000, block: 14346 },
  ];

  const distributionData = [
    { name: 'HOLDERS', value: 70, hex: '0x70', color: '#00ff41' },
    { name: 'BUYBACK', value: 20, hex: '0x20', color: '#00ffff' },
    { name: 'PARTNERS', value: 10, hex: '0x10', color: '#ffff00' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `matrix-fall ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Math.random().toString(16).substring(2, 10)}
          </div>
        ))}
      </div>

      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b-2 border-primary/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-black text-primary tracking-widest animate-pulse-green">
                [ZENT]
              </div>
              <div className="hidden md:block text-xs text-primary/60 font-mono">
                {time.toISOString().split('T')[1].split('.')[0]} UTC
              </div>
            </div>
            <div className="hidden md:flex gap-1">
              {['HOME', 'ABOUT', 'TOKENOMICS', 'DASHBOARD', 'CONTACT'].map((section, i) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`px-4 py-2 font-bold text-xs transition-all border ${
                    activeSection === section.toLowerCase()
                      ? 'bg-primary text-black border-primary'
                      : 'bg-black/50 text-primary border-primary/30 hover:border-primary hover:bg-primary/10'
                  }`}
                >
                  [{`0x${i.toString(16).toUpperCase()}`}] {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
        <div className="container mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="text-xs text-primary/60 font-mono mb-4">
              {'>'} INITIALIZING PROTOCOL...
            </div>
            <pre className="text-primary/80 text-xs md:text-sm font-mono mb-8 leading-tight">
{`
 ████████╗███████╗███╗   ██╗████████╗
 ╚══██╔══╝██╔════╝████╗  ██║╚══██╔══╝
    ██║   █████╗  ██╔██╗ ██║   ██║   
    ██║   ██╔══╝  ██║╚██╗██║   ██║   
    ██║   ███████╗██║ ╚████║   ██║   
    ╚═╝   ╚══════╝╚═╝  ╚═══╝   ╚═╝   
`}
            </pre>
            <div className="inline-block border-2 border-primary/50 bg-black/80 px-8 py-4">
              <p className="text-xl md:text-2xl font-bold tracking-widest text-primary font-mono">
                &gt; {typedText}<span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="border-l-4 border-primary/50 pl-6 text-left">
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                {'>'} PROTOCOL: SOLANA BLOCKCHAIN<br/>
                {'>'} DISTRIBUTION: 70% → HOLDERS | 20% → BUYBACK | 10% → PARTNERS<br/>
                {'>'} STATUS: ACTIVE | TRANSPARENT | IMMUTABLE
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center pt-10">
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-primary hover:bg-primary/80 text-black font-bold px-10 py-6 text-base border-2 border-primary relative overflow-hidden group"
            >
              <span className="relative z-10">[LEARN_MORE]</span>
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('dashboard')}
              className="border-2 border-secondary bg-black hover:bg-secondary/10 text-secondary font-bold px-10 py-6 text-base"
            >
              [ACCESS_DASHBOARD]
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'BLOCKS', value: '14.3K' },
              { label: 'TX/SEC', value: '65K' },
              { label: 'NODES', value: '2.1K' },
            ].map((stat, i) => (
              <div key={i} className="border border-primary/30 bg-black/80 p-4">
                <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-xs text-primary/60 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="container mx-auto space-y-16">
          <div className="text-center space-y-6">
            <div className="text-xs text-primary/60 font-mono">{'>'} PROTOCOL_INFO.SYS</div>
            <h2 className="text-6xl md:text-7xl font-black text-primary">
              [ABOUT_ZENT]
            </h2>
            <div className="max-w-4xl mx-auto border-l-4 border-primary/50 pl-6 text-left">
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                ZENITH ENTRY NETWORK TOKEN // BLOCKCHAIN-NATIVE TRANSPARENCY PROTOCOL // 
                AUTOMATED DISTRIBUTION SYSTEM // SOLANA INFRASTRUCTURE
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Shield',
                title: 'FULL_TRANSPARENCY',
                hex: '0xA1',
                description: 'EVERY TX TRACKED // EVERY FEE DISTRIBUTED // COMPLETE VISIBILITY',
              },
              {
                icon: 'Zap',
                title: 'SOLANA_SPEED',
                hex: '0xB2',
                description: 'INSTANT TRANSACTIONS // MINIMAL FEES // MAXIMUM EFFICIENCY',
              },
              {
                icon: 'TrendingUp',
                title: 'HOLDER_REWARDS',
                hex: '0xC3',
                description: '70% AUTO DISTRIBUTION // PROPORTIONAL ALLOCATION // PASSIVE INCOME',
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="group p-8 bg-black border-2 border-primary/30 hover:border-primary transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 border-2 border-primary bg-primary/10 flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-xs text-primary/60 font-mono">{feature.hex}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground font-mono text-xs leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tokenomics" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="container mx-auto space-y-16">
          <div className="text-center space-y-6">
            <div className="text-xs text-primary/60 font-mono">{'>'} DISTRIBUTION_MODEL.HEX</div>
            <h2 className="text-6xl md:text-7xl font-black text-primary">
              [TOKENOMICS]
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {distributionData.map((item, i) => (
              <Card
                key={i}
                className="group p-10 bg-black border-2 border-primary/30 hover:border-primary transition-all relative overflow-hidden scan-line"
              >
                <div className="absolute top-4 right-4 text-xs text-primary/40 font-mono">{item.hex}</div>
                <div className="space-y-6">
                  <div className="flex items-baseline gap-2">
                    <div className="text-7xl font-black text-primary font-mono">{item.value}</div>
                    <div className="text-3xl font-bold text-primary/60">%</div>
                  </div>
                  <div className="h-2 bg-primary/20 relative overflow-hidden">
                    <div 
                      className="h-full bg-primary absolute left-0 top-0 transition-all duration-1000 group-hover:w-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{item.name}</h3>
                  <p className="text-muted-foreground font-mono text-xs leading-relaxed">
                    {item.name === 'HOLDERS' && '>> AUTO_DISTRIBUTION // PROPORTIONAL_ALLOCATION // INSTANT_SETTLEMENT'}
                    {item.name === 'BUYBACK' && '>> PRICE_STABILITY // STRATEGIC_ACQUISITION // MARKET_SUPPORT'}
                    {item.name === 'PARTNERS' && '>> ECOSYSTEM_GROWTH // STRATEGIC_ALLIANCES // DEVELOPMENT_FUND'}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboard" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="container mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="text-xs text-primary/60 font-mono">{'>'} REAL_TIME_METRICS.DB</div>
            <h2 className="text-6xl md:text-7xl font-black text-primary">
              [LIVE_DASHBOARD]
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { label: 'TOTAL_VOLUME', value: '$2.4M', hex: '0x2400000', icon: 'DollarSign' },
              { label: 'HOLDERS', value: '8,432', hex: '0x20E8', icon: 'Users' },
              { label: 'DISTRIBUTED', value: '$168K', hex: '0x29040', icon: 'TrendingUp' },
              { label: 'BUYBACK_FUND', value: '$48K', hex: '0xBB80', icon: 'ArrowUpCircle' },
            ].map((stat, i) => (
              <Card key={i} className="p-6 bg-black border-2 border-primary/30 hover:border-primary transition-all scan-line group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 border-2 border-primary bg-primary/10 flex items-center justify-center">
                    <Icon name={stat.icon} size={20} className="text-primary" />
                  </div>
                  <div className="text-xs text-primary/40 font-mono">{stat.hex}</div>
                </div>
                <div className="text-3xl font-black mb-2 text-primary font-mono">{stat.value}</div>
                <div className="text-xs text-primary/60 font-mono uppercase tracking-wider">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-black border-2 border-primary/30 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary">
                [FEE_DISTRIBUTION_HISTORY]
              </h3>
              <div className="text-xs text-primary/60 font-mono">BLOCK_HEIGHT: 14,346</div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={commissionData}>
                <defs>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ff41" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00ff41" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#00ff4130" />
                <XAxis dataKey="time" stroke="#00ff41" style={{ fontSize: '12px', fontFamily: 'monospace' }} />
                <YAxis stroke="#00ff41" style={{ fontSize: '12px', fontFamily: 'monospace' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '2px solid #00ff41',
                    fontFamily: 'monospace',
                    fontSize: '12px'
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="#00ff41" strokeWidth={2} fillOpacity={1} fill="url(#greenGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-8 bg-black border-2 border-secondary/30 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-secondary">
                [COMMISSION_GROWTH_RATE]
              </h3>
              <div className="text-xs text-secondary/60 font-mono">UPDATE: LIVE</div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={commissionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#00ffff30" />
                <XAxis dataKey="time" stroke="#00ffff" style={{ fontSize: '12px', fontFamily: 'monospace' }} />
                <YAxis stroke="#00ffff" style={{ fontSize: '12px', fontFamily: 'monospace' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '2px solid #00ffff',
                    fontFamily: 'monospace',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="value" fill="#00ffff" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="container mx-auto text-center space-y-16 max-w-5xl">
          <div className="space-y-6">
            <div className="text-xs text-primary/60 font-mono">{'>'} COMMUNICATION_CHANNELS.NET</div>
            <h2 className="text-6xl md:text-7xl font-black text-primary">
              [CONNECT]
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'MessageCircle', label: 'TELEGRAM', hex: '0xTG', color: 'primary' },
              { icon: 'Twitter', label: 'TWITTER', hex: '0xTW', color: 'secondary' },
              { icon: 'Mail', label: 'EMAIL', hex: '0xML', color: 'primary' },
            ].map((contact, i) => (
              <Card
                key={i}
                className="group p-10 bg-black border-2 border-primary/30 hover:border-primary transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                <div className="text-xs text-primary/40 font-mono mb-6">{contact.hex}</div>
                <div className="w-16 h-16 border-2 border-primary bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={contact.icon} size={32} className="text-primary" />
                </div>
                <div className="text-xl font-bold text-primary">{contact.label}</div>
              </Card>
            ))}
          </div>

          <div className="pt-16 border-t-2 border-primary/30 space-y-4">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-[scroll_20s_linear_infinite] font-mono text-xs text-primary/40">
                {hexScroll} {hexScroll}
              </div>
            </div>
            <div className="font-mono text-xs text-primary/60 space-y-2">
              <div>© 2026 ZENT PROTOCOL // SOLANA BLOCKCHAIN</div>
              <div>TRANSPARENCY_THAT_PAYS.EXE // ALL SYSTEMS OPERATIONAL</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;