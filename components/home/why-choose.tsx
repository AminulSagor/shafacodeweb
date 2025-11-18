import { principles } from '@/data/why-choose';
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-20 bg-slate-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-slate-900 text-center mb-8">
          Why Choose <span className="text-sky-600">Shafacode</span>?
        </h1>
        <div className="flex items-center justify-center px-8">
          <ul>
            {principles.map((principle) => (
              <li
                key={principle.text}
                className="mb-4 md:mb-1 text-slate-800 text-sm md:text-base"
              >
                <span className="mr-2">{principle.icon}</span> {principle.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
