import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, Star, MessageCircle, Shield, Zap, Settings, Users, Code, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { detectUserCurrency, formatCurrency, CURRENCIES, getCurrencyInfo } from "@/utils/currency";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface ServicePackage {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  features: string[];
  category: "one-time" | "monthly";
  popular?: boolean;
  icon: any;
  color: string;
}

export default function Services() {
  const [userCurrency, setUserCurrency] = useState<string>("USD");

  // Detect user location and set currency
  useEffect(() => {
    const detectedCurrency = detectUserCurrency();
    setUserCurrency(detectedCurrency);
  }, []);

  const servicePackages: ServicePackage[] = [
    {
      id: 1,
      title: "Custom Setup",
      description: "Fully customized server setup tailored to your specific requirements",
      price: 15,
      currency: "USD",
      features: [
        "Complete custom configuration",
        "Tailored plugin setup",
        "Custom optimization",
        "Security implementation",
        "Performance tuning",
        "Ongoing support included"
      ],
      category: "one-time",
      icon: Settings,
      color: "#22c55e"
    },
    {
      id: 2,
      title: "Premade Setup",
      description: "Pre-configured server setup with proven configurations",
      price: 10,
      currency: "USD",
      features: [
        "Pre-tested configurations",
        "Standard optimization",
        "Security setup",
        "Plugin configurations",
        "Performance optimization",
        "Setup documentation"
      ],
      category: "one-time",
      icon: Zap,
      color: "#3b82f6"
    },
    {
      id: 3,
      title: "Server Optimization",
      description: "Complete server performance optimization and monitoring setup",
      price: 3,
      currency: "USD",
      features: [
        "Performance analysis & tuning",
        "Memory optimization",
        "Plugin performance audit",
        "Custom optimization configs",
        "Performance monitoring setup"
      ],
      category: "monthly",
      icon: Zap,
      color: "#f59e0b"
    },
    {
      id: 4,
      title: "Skript Development",
      description: "Custom Skript programming for your specific needs",
      price: 2.5,
      currency: "USD",
      features: [
        "Custom Skript creation",
        "Advanced command systems",
        "GUI integrations",
        "Database connections",
        "Error handling & debugging"
      ],
      category: "monthly",
      icon: Code,
      color: "#3b82f6"
    },
    {
      id: 5,
      title: "Security & Anti-cheat",
      description: "Comprehensive security setup with advanced anti-cheat configurations",
      price: 4,
      currency: "USD",
      features: [
        "Anti-cheat configuration",
        "Security audit",
        "DDoS protection setup",
        "Firewall configuration",
        "Monitoring system setup"
      ],
      category: "monthly",
      icon: Shield,
      color: "#ef4444"
    },
    {
      id: 6,
      title: "Configuration Package",
      description: "Complete plugin and GUI configuration service",
      price: 3.5,
      currency: "USD",
      features: [
        "Plugin configuration",
        "GUI design & setup",
        "Permission system setup",
        "Database configuration",
        "Integration testing"
      ],
      category: "monthly",
      icon: Settings,
      color: "#8b5cf6"
    },
    {
      id: 5,
      title: "Server Management",
      description: "Monthly server management and maintenance service",
      price: 20,
      currency: "USD",
      features: [
        "24/7 server monitoring",
        "Regular performance optimization",
        "Plugin updates & maintenance",
        "Security monitoring",
        "Monthly performance reports",
        "Priority support"
      ],
      category: "monthly",
      popular: true,
      icon: Users,
      color: "#22c55e"
    },
    {
      id: 6,
      title: "Developer Package",
      description: "Monthly development support and custom solutions",
      price: 18,
      currency: "USD",
      features: [
        "Custom plugin development",
        "Skript programming",
        "Bug fixes & optimization",
        "Feature implementations",
        "Code reviews",
        "Technical consultation"
      ],
      category: "monthly",
      icon: Code,
      color: "#06b6d4"
    },
    {
      id: 7,
      title: "Complete Solution",
      description: "All-in-one monthly package for full server management",
      price: 35,
      originalPrice: 45,
      currency: "USD",
      features: [
        "Everything from Server Management",
        "Everything from Developer Package",
        "Marketing consultation",
        "Network architecture planning",
        "Custom branding & design",
        "Business strategy advice"
      ],
      category: "monthly",
      popular: true,
      icon: Globe,
      color: "#ec4899"
    }
  ];

  const formatPrice = (price: number) => {
    return formatCurrency(price, userCurrency);
  };

  const handleBuyService = (serviceTitle: string) => {
    // Redirect to Discord DMs
    const discordMessage = encodeURIComponent(`Hi! I'm interested in the ${serviceTitle} service. Can we discuss the details?`);
    window.open(`https://discord.com/channels/@me/kiro.java`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div className="pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Comprehensive Minecraft server solutions with competitive pricing and professional quality.
          </p>
          
          {/* Currency Selector */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-slate-400">Prices shown in:</span>
            <Select value={userCurrency} onValueChange={setUserCurrency}>
              <SelectTrigger className="w-48 bg-slate-800 border-slate-700">
                <SelectValue>
                  {getCurrencyInfo(userCurrency)?.symbol} {getCurrencyInfo(userCurrency)?.name}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                {CURRENCIES.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.name} ({currency.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* One-Time Setup Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-green-primary">One-Time Setup Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicePackages.filter(pkg => pkg.category === "one-time").map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -12,
                  rotateX: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="glass-effect p-8 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto"
                     style={{ backgroundColor: `${pkg.color}20` }}>
                  <pkg.icon className="w-8 h-8" style={{ color: pkg.color }} />
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-4 text-slate-300">{pkg.title}</h3>
                <p className="text-slate-400 text-center mb-6">{pkg.description}</p>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold" style={{ color: pkg.color }}>
                    {formatPrice(pkg.price)}
                  </span>
                  <span className="text-slate-400 text-sm ml-1">one-time</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => handleBuyService(pkg.title)}
                  className="w-full py-3 text-lg"
                  style={{ backgroundColor: pkg.color }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact for Service
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Essential Monthly Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-green-primary">Essential Monthly Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePackages.filter(pkg => pkg.category === "monthly" && !pkg.popular).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -12,
                  rotateX: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="glass-effect p-6 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto"
                     style={{ backgroundColor: `${pkg.color}20` }}>
                  <pkg.icon className="w-6 h-6" style={{ color: pkg.color }} />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-2 text-slate-300">{pkg.title}</h3>
                <p className="text-slate-400 text-sm text-center mb-4">{pkg.description}</p>
                
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold" style={{ color: pkg.color }}>
                    {formatPrice(pkg.price)}
                  </span>
                  <span className="text-slate-400 text-sm ml-1">/month</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => handleBuyService(pkg.title)}
                  className="w-full"
                  style={{ backgroundColor: pkg.color }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact for Service
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Monthly Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-green-primary">Premium Monthly Packages</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {servicePackages.filter(pkg => pkg.category === "monthly" && pkg.popular).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -15,
                  rotateX: 3,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                transition={{ delay: 0.1 * index }}
                className={`glass-effect p-8 rounded-2xl relative transition-all duration-300 cursor-pointer hover:shadow-3xl ${
                  pkg.popular ? 'ring-2 ring-green-primary hover:ring-green-400' : 'hover:shadow-2xl'
                }`}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-primary text-black px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto"
                     style={{ backgroundColor: `${pkg.color}20` }}>
                  <pkg.icon className="w-8 h-8" style={{ color: pkg.color }} />
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-3 text-slate-300">{pkg.title}</h3>
                <p className="text-slate-400 text-center mb-6">{pkg.description}</p>
                
                <div className="text-center mb-6">
                  {pkg.originalPrice && (
                    <span className="text-slate-500 line-through text-lg mr-2">
                      {formatPrice(pkg.originalPrice)}
                    </span>
                  )}
                  <span className="text-4xl font-bold" style={{ color: pkg.color }}>
                    {formatPrice(pkg.price)}
                  </span>
                  <span className="text-slate-400 text-sm ml-1">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => handleBuyService(pkg.title)}
                  className="w-full py-3 text-lg"
                  style={{ backgroundColor: pkg.color }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Monthly Service
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-green-primary mb-4">Ready to Get Started?</h3>
          <p className="text-slate-400 mb-6">
            Contact me on Discord to discuss your project requirements and get a custom quote.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => window.open('https://discord.com/channels/@me/kiro.java', '_blank')}
              className="bg-[#5865F2] hover:bg-[#4752C4]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Message on Discord
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Discord: kiro.java | Response time: Usually within 2-4 hours
          </p>
        </motion.div>
      </div>
      </div>
      <Footer />
    </div>
  );
}