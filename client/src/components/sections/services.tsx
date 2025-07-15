import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, Star, MessageCircle, Shield, Zap, Settings, Users, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { detectUserCurrency, formatCurrency, CURRENCIES, getCurrencyInfo } from "@/utils/currency";
import { Link } from "wouter";

export default function Services() {
  const [userCurrency, setUserCurrency] = useState<string>("USD");

  useEffect(() => {
    const detectedCurrency = detectUserCurrency();
    setUserCurrency(detectedCurrency);
  }, []);

  const services = [
    {
      id: 1,
      title: "Server Optimization",
      description: "Complete performance tuning and monitoring",
      price: 3,
      icon: Zap,
      color: "#f59e0b",
      features: ["Performance analysis", "Memory optimization", "Plugin audit"]
    },
    {
      id: 2,
      title: "Skript Development",
      description: "Custom Skript programming solutions",
      price: 2.5,
      icon: Code,
      color: "#3b82f6",
      features: ["Custom scripts", "Command systems", "GUI integration"]
    },
    {
      id: 3,
      title: "Security & Anti-cheat",
      description: "Advanced security implementations",
      price: 4,
      icon: Shield,
      color: "#ef4444",
      features: ["Anti-cheat config", "Security audit", "DDoS protection"]
    },
    {
      id: 4,
      title: "Management Services",
      description: "Complete server and team management",
      price: 20,
      icon: Users,
      color: "#22c55e",
      features: ["24/7 monitoring", "Team coordination", "Performance reports"],
      popular: true
    }
  ];

  const formatPrice = (price: number) => {
    return formatCurrency(price, userCurrency);
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Professional Services</h2>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`glass-effect p-6 rounded-2xl hover:scale-105 transition-transform duration-300 relative ${
                service.popular ? 'ring-2 ring-green-primary' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-primary text-black px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto"
                   style={{ backgroundColor: `${service.color}20` }}>
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              
              <h3 className="text-xl font-bold text-center mb-2 text-slate-300">{service.title}</h3>
              <p className="text-slate-400 text-sm text-center mb-4">{service.description}</p>
              
              <div className="text-center mb-4">
                <span className="text-2xl font-bold" style={{ color: service.color }}>
                  {formatPrice(service.price)}
                </span>
                <span className="text-slate-400 text-sm ml-1">/month</span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                asChild
                className="w-full"
                style={{ backgroundColor: service.color }}
              >
                <Link href="/services">View Details</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-green-primary to-green-400 hover:from-green-600 hover:to-green-500 text-slate-900 hover:text-slate-800 font-bold text-lg px-8 py-4 shadow-xl shadow-green-primary/20 border-2 border-green-primary/30 hover:shadow-green-primary/40 transition-all duration-300">
            <Link href="/services">
              <MessageCircle className="w-6 h-6 mr-3" />
              View All Services & Pricing
            </Link>
          </Button>
          <p className="text-slate-400 text-sm mt-3">
            Professional Minecraft solutions • Multi-currency pricing • Discord support
          </p>
        </motion.div>
      </div>
    </section>
  );
}