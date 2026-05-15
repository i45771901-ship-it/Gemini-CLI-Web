import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineEvents = [
  {
    year: "1954",
    title: "Бернское чудо",
    description: "Национальная сборная Германии по футболу выигрывает Чемпионат мира в бутсах adidas с революционными завинчивающимися шипами. Три полоски получают мировое признание.",
    category: "Экипировка",
    image: "https://images.unsplash.com/photo-1518605368461-1e1e38ce8058?q=80&w=800&auto=format&fit=crop" // Soccer ball/pitch
  },
  {
    year: "1967",
    title: "Больше, чем обувь",
    description: "Выпущен спортивный костюм Франца Беккенбауэра. Впервые adidas производит одежду, расширяя бренд за пределы только обуви.",
    category: "Одежда",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" // Jacket/apparel texture
  },
  {
    year: "1970",
    title: "Telstar",
    description: "adidas представляет официальный мяч для Чемпионата мира по футболу FIFA™. Культовый черно-белый дизайн Telstar навсегда меняет видимость футбола на телевидении.",
    category: "Инвентарь",
    image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=800&auto=format&fit=crop" // Classic soccer ball
  },
  {
    year: "1986",
    title: "My adidas",
    description: "Хип-хоп группа Run-D.M.C. выпускает трек 'My adidas', поднимая свои Superstar на концерте. Бренд официально переходит из спорта в уличную культуру.",
    category: "Культура",
    image: "https://images.unsplash.com/photo-1493225457124-a1a2a5f0f49c?q=80&w=800&auto=format&fit=crop" // Music / street culture
  },
  {
    year: "2015",
    title: "Революция Boost",
    description: "Появление Ultraboost меняет технологии бега и сникер-культуру, сочетая непревзойденную производительность с повседневной привлекательностью.",
    category: "Инновации",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop" // Modern running shoe sole
  }
];

const TimelineCard = ({ event, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="relative flex items-center justify-between md:justify-normal w-full mb-24 last:mb-0 group"
    >
      {/* Timeline Line & Dot (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center h-full z-10">
        <div className="w-4 h-4 bg-white rounded-full group-hover:scale-150 group-hover:bg-gray-300 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </div>

      {/* Content Container */}
      <div className={`w-full md:w-5/12 flex flex-col ${index % 2 === 0 ? 'md:pr-16 md:ml-auto md:items-end md:text-right' : 'md:pl-16 md:mr-auto md:items-start md:text-left'} items-start text-left`} >

        {/* Category Badge */}
        <div className="mb-4 inline-block px-3 py-1 border border-zinc-700 rounded-full text-xs uppercase tracking-widest text-zinc-400">
          {event.category}
        </div>

        {/* Year */}
        <h3 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-2">
          {event.year}
        </h3>

        {/* Title */}
        <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-gray-300 transition-colors">
          {event.title}
        </h4>

        {/* Description */}
        <p className="text-zinc-400 font-light leading-relaxed max-w-md">
          {event.description}
        </p>

        {/* Decorative elements */}
        <div className={`mt-6 flex gap-1 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
            <div className="w-8 h-[2px] bg-white/20 group-hover:bg-white/60 transition-colors duration-500"></div>
            <div className="w-4 h-[2px] bg-white/20 group-hover:bg-white/60 transition-colors duration-500 delay-75"></div>
            <div className="w-2 h-[2px] bg-white/20 group-hover:bg-white/60 transition-colors duration-500 delay-150"></div>
        </div>
      </div>

      {/* Visual Presentation (Opposite Side) */}
      <div className={`hidden md:flex w-5/12 ${index % 2 === 0 ? 'mr-auto justify-start pr-16' : 'ml-auto justify-end pl-16'} items-center`}>
         <div className="relative w-full max-w-sm aspect-video bg-zinc-900 overflow-hidden group-hover:border-zinc-500 border border-zinc-800 transition-colors duration-500">
            {/* Thematic Image */}
            <div
               className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:opacity-60 mix-blend-luminosity group-hover:scale-105 transition-all duration-700 ease-out"
               style={{ backgroundImage: `url('${event.image}')` }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent mix-blend-overlay"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full group-hover:scale-110 group-hover:border-white/30 transition-all duration-700 ease-out"></div>
            <div className="absolute font-mono text-[10rem] font-black text-white/10 -bottom-10 -right-4 select-none group-hover:text-white/20 transition-colors duration-500">
              {event.year.slice(-2)}
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black py-32 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-32">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4">Эволюция</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
            Формируя культуру
          </h3>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto font-light">
            Путь от чистых спортивных достижений к моде, музыке, уличной одежде и стилю жизни.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-800">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-white via-white to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile Line */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800">
             <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-white via-white to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Events */}
          <div className="relative z-10 flex flex-col pt-10">
            {timelineEvents.map((event, index) => (
              <TimelineCard key={event.year} event={event} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
