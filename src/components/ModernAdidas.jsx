import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Trophy, Shirt, Target } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    title: "Охват",
    value: "160+",
    suffix: "Стран",
    description: "Работаем на всех континентах, формируя местную и глобальную спортивную культуру."
  },
  {
    icon: Trophy,
    title: "Спорт",
    value: "1-й",
    suffix: "Класс",
    description: "Продолжаем наследие экипировки элитных спортсменов в футболе, беге и баскетболе."
  },
  {
    icon: Shirt,
    title: "Originals",
    value: "Стиль",
    suffix: "Жизни",
    description: "Ведущие мировые коллаборации в области уличной моды и высокой моды."
  },
  {
    icon: Target,
    title: "Будущее",
    value: "2025",
    suffix: "Видение",
    description: "Движение вперед через инновации, устойчивое развитие и непревзойденный дизайн."
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
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4">Наши дни</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight max-w-4xl">
            Больше, чем<br/>просто <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">спортивный бренд.</span>
          </h3>
          <p className="mt-8 text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            Сегодня adidas — это глобальный лидер, работающий в сфере обуви, одежды и аксессуаров. Мы не просто обеспечиваем игру; мы являемся частью культурной ткани спорта, музыки и стиля жизни.
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
          className="mt-32 w-full h-[400px] border border-zinc-900 bg-black relative overflow-hidden flex items-center justify-center group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Background image indicating culture/modern sportswear */}
          <div
             className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-1000 mix-blend-luminosity"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10 pointer-events-none" />

          <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
             <div className="w-full flex justify-between text-[10px] font-mono text-zinc-400">
               <span>SYS.RDY</span>
               <span>v.2025</span>
             </div>
             <div className="w-full flex justify-between text-[10px] font-mono text-zinc-400">
               <span>LAT: 49.5833</span>
               <span>LON: 10.8833</span>
             </div>
          </div>

          <div className="relative z-10 flex gap-8 transform rotate-12 scale-150 group-hover:scale-[1.55] transition-transform duration-1000 ease-out opacity-20 mix-blend-overlay">
            <div className="w-24 h-[200vh] bg-white"></div>
            <div className="w-24 h-[200vh] bg-white"></div>
            <div className="w-24 h-[200vh] bg-white"></div>
          </div>

          <div className="absolute z-20 text-center mix-blend-difference pointer-events-none">
            <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">Невозможное</span><br/>
            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px white' }}>Возможно</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
