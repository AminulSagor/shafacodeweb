import React from 'react';
import { Button } from '../ui/button';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-linear-to-r from-slate-800  to-slate-700">
      <div className="max-w-6xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-slate-100 text-center space-y-8">
          {/* Small label */}
          <div className="inline-flex items-center rounded-full border border-sky-500/40 bg-slate-900/40 px-4 py-1 text-xs font-medium tracking-wide text-sky-300 backdrop-blur">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
            Transparent Software Partner for Growing Teams
          </div>

          {/* Heading + description */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Empowering Innovation with{' '}
              <span className="text-sky-400">Transparent Code</span>
            </h1>
            <p className="text-slate-200/80 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
              At <span className="font-semibold">ShafaCode</span>, we believe in
              the <i>Win-Win Paradigm</i> — your success fuels our success. We
              build with{' '}
              <span className="font-semibold">full transparency</span>, so every
              milestone and decision is clear and accountable. Backed by a{' '}
              <span className="font-semibold">proactive work culture</span>, we
              anticipate challenges, innovate ahead of time, and deliver
              solutions that grow with you.
            </p>
          </div>

          {/* CTA */}
          <div>
            <Button
              className="inline-flex items-center justify-center gap-2
                         w-full sm:w-auto
                         bg-sky-600 border border-sky-700
                         text-slate-900
                         hover:text-slate-100 hover:bg-sky-700 hover:border-sky-800
                         shadow-sm hover:shadow-lg
                         hover:cursor-pointer
                         text-sm sm:text-base md:text-lg
                         font-semibold
                         py-3 sm:py-3.5 md:py-6
                         px-4 sm:px-6 md:px-8
                         rounded-md
                         transition-all duration-200"
            >
              Let&apos;s Build Together
            </Button>
          </div>

          {/* Metrics */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-slate-300">
            <span>
              <span className="font-semibold">3</span> projects ongoing
            </span>
            <span>
              <span className="font-semibold">1</span> project delivered
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold">5</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>client satisfaction</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
