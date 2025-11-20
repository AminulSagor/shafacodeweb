import { getProjects } from '@/actions/projects/get-projects';
import ProjectsList from '@/components/admin/projects/projects-list';
import { TableDemo } from '@/components/admin/projects/table-demo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function ProjectsPage() {
  const data = await getProjects();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl">Projects</h2>
        <Button className="hover:cursor-pointer" asChild>
          <Link href={'/admin/projects/create'}>Create Project</Link>
        </Button>
      </div>
      <ProjectsList projects={data as any} />
      {/* <TableDemo /> */}
    </div>
  );
}
