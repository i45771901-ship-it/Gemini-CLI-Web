import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Trophy, Shirt, Target } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    title: "Global Reach",
    value: "160+",
    suffix: "Countries",
    description: "Operating across continents, shaping local and global sports culture."
  },
  {
    icon: Trophy,
    title: "Performance",
    value: "1st",
    suffix: "Class",
    description: "Continuing the legacy of equipping elite athletes in football, running, and basketball."
  },
  {
    icon: Shirt,
    title: "Originals",
    value: "Culture",
    suffix: "Defined",
    description: "Leading streetwear, lifestyle, and high-fashion collaborations worldwide."
  },
  {
    icon: Target,
    title: "Future",
    value: "2025",
    suffix: "Vision",
    description: "Driving momentum through innovation, sustainability, and unparalleled design."
  }
];

export const ModernAdidas = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-zinc-950 py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-24"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4">Present Day</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight max-w-4xl">
            More than<br/>just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">sports brand.</span>
          </h3>
          <p className="mt-8 text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            Today, adidas is a global powerhouse operating across footwear, apparel, and accessories. We don&apos;t just supply the game; we are part of the cultural fabric across sports, music, and lifestyle.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="bg-black border border-zinc-900 p-8 flex flex-col group hover:border-zinc-700 transition-colors duration-300"
              >
                <div className="mb-12 flex justify-between items-start">
                  <Icon className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    0{index + 1}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                      {stat.value}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                      {stat.suffix}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight text-white mb-2">
                    {stat.title}
                  </h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Hover line effect */}
                <div className="w-0 h-[2px] bg-white mt-8 group-hover:w-full transition-all duration-500 ease-out"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Abstract aesthetic bottom element */}
        <motion.div
          className="mt-32 w-full h-[300px] border border-zinc-900 bg-black relative overflow-hidden flex items-center justify-center group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-6">
             <div className="w-full flex justify-between text-[10px] font-mono text-zinc-600">
               <span>SYS.RDY</span>
               <span>v.2025</span>
             </div>
             <div className="w-full flex justify-between text-[10px] font-mono text-zinc-600">
               <span>LAT: 49.5833</span>
               <span>LON: 10.8833</span>
             </div>
          </div>

          <div className="relative flex gap-8 transform rotate-12 scale-150 group-hover:scale-[1.55] transition-transform duration-1000 ease-out opacity-20">
            <div className="w-24 h-[200vh] bg-zinc-800"></div>
            <div className="w-24 h-[200vh] bg-zinc-800"></div>
            <div className="w-24 h-[200vh] bg-zinc-800"></div>
          </div>

          <div className="absolute z-10 text-center mix-blend-difference">
            <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">Impossible</span><br/>
            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px white' }}>Is Nothing</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
