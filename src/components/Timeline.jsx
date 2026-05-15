import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineEvents = [
  {
    year: "1954",
    title: "The Miracle of Bern",
    description: "The German national football team wins the World Cup wearing adidas boots with revolutionary screw-in studs. The 3-Stripes become globally recognized.",
    category: "Performance"
  },
  {
    year: "1967",
    title: "Beyond Footwear",
    description: "The Franz Beckenbauer tracksuit is released. For the first time, adidas produces apparel, expanding the brand beyond just footwear.",
    category: "Apparel"
  },
  {
    year: "1970",
    title: "The Telstar",
    description: "adidas delivers the official match ball for the FIFA World Cup™. The iconic black-and-white Telstar design changes football visibility on television forever.",
    category: "Equipment"
  },
  {
    year: "1986",
    title: "My adidas",
    description: "Hip-hop group Run-D.M.C. releases the track 'My adidas', holding up their Superstars at a concert. The brand officially crosses from sports performance into street culture.",
    category: "Culture"
  },
  {
    year: "2015",
    title: "The Boost Revolution",
    description: "The introduction of the Ultraboost redefines running technology and sneaker culture, blending ultimate performance with lifestyle appeal.",
    category: "Innovation"
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

      {/* Abstract Visual Placeholder (Opposite Side) */}
      <div className={`hidden md:flex w-5/12 ${index % 2 === 0 ? 'mr-auto justify-start pr-16' : 'ml-auto justify-end pl-16'} items-center`}>
         <div className="relative w-full max-w-sm aspect-video bg-zinc-900 overflow-hidden group-hover:border-zinc-700 border border-zinc-800 transition-colors duration-500">
            {/* Simple abstract shapes representing the era */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-transparent mix-blend-overlay"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/5 rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"></div>
            <div className="absolute font-mono text-[10rem] font-black text-white/5 -bottom-10 -right-4 select-none group-hover:text-white/10 transition-colors duration-500">
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
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4">Evolution</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
            Shaping Culture
          </h3>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto font-light">
            A journey from pure sports performance into fashion, music, streetwear, and lifestyle.
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
