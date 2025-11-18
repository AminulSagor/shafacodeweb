import React from 'react';
import PortfolioCard from './portfolio-card';
import { projects } from '@/data/projects';

const PortfolioSection = () => {
  return (
    <section id="#portfolio" className="py-10 md:py-20 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-slate-900 text-center mb-8">
          Our Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {projects.map((project) => (
            <PortfolioCard
              key={project.title}
              client={project.client}
              title={project.title}
              description={project.description}
              status={project.status}
              contact={project.contact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
