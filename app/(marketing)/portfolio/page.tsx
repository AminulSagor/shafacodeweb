import { getProjects } from '@/actions/projects/get-projects';
import PortfolioCard from '@/components/home/portfolio-card';
import PortfolioHero from '@/components/portfolio/portfolio-hero';
import { notFound } from 'next/navigation';

const PortfolioPage = async () => {
  const projects = await getProjects();
  if (!projects) return notFound();
  return (
    <div>
      <PortfolioHero />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-12">
          Our <span className="text-sky-600">Portfolio</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title!}
              client={project.client!}
              contact={project.contactEmail!}
              description={project.description!}
              status={project.status!}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
