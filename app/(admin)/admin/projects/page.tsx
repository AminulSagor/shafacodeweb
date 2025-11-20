import ProjectsList from '@/components/admin/projects/projects-list';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl">Projects</h2>
        <Button className="hover:cursor-pointer">Create Project</Button>
      </div>
      <ProjectsList />
    </div>
  );
}
