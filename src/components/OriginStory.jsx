import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const OriginStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-zinc-950 py-32 px-6 lg:px-12 flex items-center justify-center overflow-hidden"
    >
      {/* Archival Texture Background */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
             filter: 'contrast(150%) brightness(50%)'
           }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Column - Text Story */}
        <motion.div
          className="flex flex-col gap-8"
          style={{ y, opacity }}
        >
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">The Workshop</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-8">
              Herzogenaurach,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                1949.
              </span>
            </h3>
          </div>

          <div className="prose prose-invert prose-lg">
            <p className="text-gray-300 font-light leading-relaxed mb-6">
              On August 18, 1949, Adolf &quot;Adi&quot; Dassler started over. At 49 years old, he registered the <strong className="text-white font-medium">&quot;Adolf Dassler adidas Sportschuhfabrik&quot;</strong> and set to work in the small Bavarian town of Herzogenaurach.
            </p>
            <p className="text-gray-300 font-light leading-relaxed mb-6">
              He began with 47 employees and an unrelenting obsession: providing athletes with the best possible equipment.
            </p>
            <p className="text-gray-300 font-light leading-relaxed">
              That same year, he registered a shoe that included the registration of the soon-to-be-famous <strong className="text-white font-medium">adidas 3-Stripes</strong>. From a modest workshop, the foundation of a global icon was laid.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Visual/Archival Presentation */}
        <motion.div
          className="relative h-[600px] w-full bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between overflow-hidden group"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />

          <div className="text-right">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Archive Ref: 1949-AD</span>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            {/* Abstract representation of the first shoe/workshop */}
            <motion.div
              className="absolute w-64 h-64 border border-white/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-48 h-48 border border-white/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 flex flex-col items-center gap-6 transform group-hover:scale-105 transition-transform duration-700">
              <div className="flex gap-3 rotate-[-15deg]">
                <div className="w-4 h-32 bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
                <div className="w-4 h-32 bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)] translate-y-2"></div>
                <div className="w-4 h-32 bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)] translate-y-4"></div>
              </div>
              <div className="text-center mt-4">
                <span className="block text-xs uppercase tracking-[0.3em] text-gray-400 mb-1">Registered</span>
                <span className="block font-black text-2xl tracking-tighter">August 18, 1949</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-600 uppercase tracking-widest flex justify-between">
            <span>Gebrüder Dassler Schuhfabrik → adidas</span>
            <span>Est. 1949</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
