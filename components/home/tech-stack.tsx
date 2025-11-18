import { Button } from '../ui/button';

const TechStack = () => {
  const techStack = [
    'Flutter',
    'Firebase',
    'Google Play',
    'Website',
    'ESP32',
    'Raspberry PI',
  ];

  return (
    <section className="bg-slate-900 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 md:gap-10 px-4">
          {techStack.map((item) => (
            <Button
              key={item}
              className="
                rounded-full
                border-slate-700
                bg-slate-800
                hover:bg-slate-800
                px-6 py-2
                w-[48%]
                sm:w-auto
              "
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
