import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getProjectById } from '@/actions/projects/get-project-by-id';

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const data = await getProjectById(slug);

  const project = data;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl">Project Details</h2>
        <Button asChild>
          <Link href="/admin/projects">Go Back</Link>
        </Button>
      </div>

      {/* Project Card */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center justify-between">
            {project?.title}

            <Badge
              variant={
                project?.status === 'Delivered'
                  ? 'default'
                  : project?.status === 'Ongoing'
                  ? 'secondary'
                  : 'outline'
              }
            >
              {project?.status}
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* DESCRIPTION */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-slate-700 text-base leading-relaxed">
              {project?.description}
            </p>
          </div>

          <Separator />

          {/* CLIENT */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Client</h3>
            <p className="text-slate-700">{project?.client}</p>
          </div>

          <Separator />

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-slate-700">
              {project?.contactEmail.startsWith('http') ? (
                <a
                  href={project.contactEmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {project.contactEmail}
                </a>
              ) : (
                project?.contactEmail
              )}
            </p>
          </div>

          <Separator />

          {/* METADATA */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-slate-500">Project ID</h4>
              <p className="font-medium">{project?.id}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetailsPage;
