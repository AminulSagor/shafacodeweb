import { offers } from '@/data/offer';
import React from 'react';

const Offer = () => {
  return (
    <section className="py-10 md:py-20 bg-slate-100" id="#service">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-slate-900 text-center mb-8">
          What We Offer
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:-translate-y-1  transition-all duration-200 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {offer.title}
              </h2>
              <p className="text-slate-700 text-sm md:text-base">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
