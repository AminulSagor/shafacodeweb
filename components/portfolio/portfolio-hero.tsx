const PortfolioHero = () => {
  return (
    <section className="relative bg-linear-to-r from-slate-800 to-slate-700 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex items-center flex-col">
        {/* Tag */}
        <div className="inline-flex items-center rounded-full border border-sky-500/40 bg-slate-900/40 px-4 py-1 text-xs font-medium text-sky-300 backdrop-blur mb-6">
          <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
          Portfolio
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
          Our
          <span className="text-sky-400"> Best Work</span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-200/80 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-center">
          Explore the projects we’ve built for clients across different
          industries— from full-scale web applications to high-performance APIs,
          custom dashboards, automation systems, and more.
        </p>

        {/* Stats Row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl">
          {/* Stat */}
          <div className="bg-slate-900/30 rounded-xl p-4 text-center border border-slate-700/40 shadow-sm">
            <h3 className="text-3xl font-semibold text-sky-400">50+</h3>
            <p className="text-xs text-slate-300 mt-1">Completed Projects</p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-4 text-center border border-slate-700/40 shadow-sm">
            <h3 className="text-3xl font-semibold text-sky-400">15+</h3>
            <p className="text-xs text-slate-300 mt-1">Industries Served</p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-4 text-center border border-slate-700/40 shadow-sm">
            <h3 className="text-3xl font-semibold text-sky-400">5+</h3>
            <p className="text-xs text-slate-300 mt-1">Years Experience</p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-4 text-center border border-slate-700/40 shadow-sm sm:col-span-1 col-span-2">
            <h3 className="text-3xl font-semibold text-sky-400">100%</h3>
            <p className="text-xs text-slate-300 mt-1">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
