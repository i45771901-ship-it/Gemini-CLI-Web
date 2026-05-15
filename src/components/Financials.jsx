import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// 2025 Financial Data based on prompt
const NET_SALES_2025 = 24811000000; // €24.811 billion
const NET_INCOME_2025 = 1340000000; // €1.34 billion
const SECONDS_IN_YEAR = 365 * 24 * 60 * 60; // 31,536,000

const REVENUE_PER_SECOND = NET_SALES_2025 / SECONDS_IN_YEAR; // ~€786.75
const PROFIT_PER_SECOND = NET_INCOME_2025 / SECONDS_IN_YEAR; // ~€42.49

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

const formatLargeCurrency = (value) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR',
      notation: "compact",
      compactDisplay: "short"
    }).format(value);
  };

const CounterCard = ({ title, valuePerSecond, elapsedSeconds, isProfit = false }) => {
  const currentValue = valuePerSecond * elapsedSeconds;

  return (
    <div className={`p-8 border ${isProfit ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-700 bg-zinc-900'} relative overflow-hidden group`}>
      <div className="relative z-10">
        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">{title}</h4>

        {/* Main Live Counter */}
        <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-zinc-600 block mb-2">Since opening page</span>
            <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white font-mono tabular-nums">
            {formatCurrency(currentValue)}
            </div>
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-6">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Per Second</span>
            <span className="text-sm font-mono text-zinc-300">{formatCurrency(valuePerSecond)}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Per Minute</span>
            <span className="text-sm font-mono text-zinc-300">{formatCurrency(valuePerSecond * 60)}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Per Hour</span>
            <span className="text-sm font-mono text-zinc-300">{formatCurrency(valuePerSecond * 3600)}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Per Day</span>
            <span className="text-sm font-mono text-zinc-300">{formatCurrency(valuePerSecond * 86400)}</span>
          </div>
        </div>
      </div>

      {/* Subtle Background Animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-white"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{ opacity: isProfit ? 0.3 : 0.6 }}
      />
    </div>
  );
};

export const Financials = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Only start counting when the component mounts.
    // For a real app, this might use a start time stored in context or local storage.
    const startTime = Date.now();
    let animationFrameId;

    const updateTimer = () => {
      const now = Date.now();
      setElapsedSeconds((now - startTime) / 1000);
      animationFrameId = requestAnimationFrame(updateTimer);
    };

    animationFrameId = requestAnimationFrame(updateTimer);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black py-32 px-6 lg:px-12 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4">Financial Scale</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8">
            The Speed of Sport
          </h3>
          <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">
            Witness the real-time financial momentum of a global icon, calculated from the 2025 annual results.
          </p>
        </div>

        {/* Global 2025 Context */}
        <div className="grid grid-cols-2 md:flex justify-center gap-8 md:gap-24 mb-16 text-center border-y border-zinc-900 py-10">
             <div>
                <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">2025 Net Sales</span>
                <span className="text-2xl md:text-4xl font-black tracking-tight text-white">{formatLargeCurrency(NET_SALES_2025)}</span>
             </div>
             <div>
                <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">2025 Net Income</span>
                <span className="text-2xl md:text-4xl font-black tracking-tight text-white">{formatLargeCurrency(NET_INCOME_2025)}</span>
             </div>
        </div>

        {/* Live Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <CounterCard
            title="Revenue Velocity"
            valuePerSecond={REVENUE_PER_SECOND}
            elapsedSeconds={elapsedSeconds}
          />
          <CounterCard
            title="Profit Velocity"
            valuePerSecond={PROFIT_PER_SECOND}
            elapsedSeconds={elapsedSeconds}
            isProfit={true}
          />
        </div>

        {/* Visualizer Bar */}
        <div className="w-full h-8 bg-zinc-900 rounded-full overflow-hidden flex relative">
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                 <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono mix-blend-difference">Real-time Visualization</span>
            </div>
            {/* Simulate high-frequency data streams */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="flex-1 bg-white border-r border-black"
                    initial={{ opacity: 0.1 }}
                    animate={{
                        opacity: [0.1, Math.random() * 0.8 + 0.2, 0.1],
                        scaleY: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: Math.random() * 2 + 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }}
                />
            ))}
        </div>

        <div className="mt-12 text-center text-xs text-zinc-600 font-light max-w-2xl mx-auto">
          <p>
            * Based on adidas 2025 annual financial results. Revenue and profit per second are calculated from annual net sales and net income respectively, divided by the number of seconds in a year (31,536,000). The counters display estimated accumulation since this page was loaded.
          </p>
        </div>

      </div>
    </section>
  );
};
