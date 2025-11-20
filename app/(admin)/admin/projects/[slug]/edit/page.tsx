import { getProjectById } from '@/actions/projects/get-project-by-id';
import EditProjectForm from '@/components/admin/projects/edit-project-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function EditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getProjectById(slug);
  const title = data?.title;
  const description = data?.description;
  const client = data?.client;
  const status = data?.status;
  const contactEmail = data?.contactEmail;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl">Project Details</h2>
        <Button asChild>
          <Link href="/admin/projects">Go Back</Link>
        </Button>
      </div>

      <EditProjectForm
        title={title}
        description={description}
        client={client}
        status={status}
        contactEmail={contactEmail}
        id={slug}
      />
    </div>
  );
}
