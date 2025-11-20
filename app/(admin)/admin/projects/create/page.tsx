import CreateProjectForm from '@/components/admin/projects/create-project-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CreateNewProjectPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl">Create Project</h2>
        <Button asChild>
          <Link href="/admin/projects">Go Back</Link>
        </Button>
      </div>
      <CreateProjectForm />
    </div>
  );
};

export default CreateNewProjectPage;
