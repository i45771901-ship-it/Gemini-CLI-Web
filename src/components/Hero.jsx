import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Abstract Motion Background with Thematic Image */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center opacity-40"
        style={{ y: yBg }}
      >
        {/* Background Image: Stadium lights / Sports abstract */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2000&auto=format&fit=crop')]
          bg-cover bg-center grayscale opacity-30 mix-blend-screen"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10" />
        <div className="flex gap-8 lg:gap-16 transform -rotate-12 scale-150 opacity-50">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-16 lg:w-32 h-[200vh] bg-white mix-blend-overlay"
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20"
        style={{ opacity: opacityText, y: yText }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          adidas: Создано спортом,<br/>
          <span className="text-gray-400">Сформировано культурой</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          От миссии Ади Дасслера по улучшению результатов спортсменов до глобальной иконы, определяющей спортивную одежду и уличную культуру.
        </motion.p>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Исследовать</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent origin-top"
          animate={{
            scaleY: [0, 1, 0],
            translateY: [0, 0, 20]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
};
