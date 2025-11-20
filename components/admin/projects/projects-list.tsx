'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { EditIcon, EyeIcon, TrashIcon, View, ViewIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'A full-stack online store built with Next.js & Firebase.',
    status: 'In Progress',
    tech: ['Next.js', 'Tailwind', 'Firebase'],
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects & blogs.',
    status: 'Completed',
    tech: ['React', 'Tailwind'],
  },
  {
    id: 3,
    name: 'Admin Dashboard',
    description: 'Internal dashboard for managing blogs & projects.',
    status: 'Draft',
    tech: ['Next.js', 'Shadcn UI'],
  },
  {
    id: 4,
    name: 'Restaurant Ordering App',
    description: 'Mobile-first ordering app for restaurants.',
    status: 'In Progress',
    tech: ['Flutter', 'Firebase'],
  },
  {
    id: 5,
    name: 'Job Finder Website',
    description: 'Full-stack job listing and application portal.',
    status: 'Completed',
    tech: ['Next.js', 'MongoDB'],
  },
  {
    id: 6,
    name: 'Event Booking System',
    description: 'System to manage event registration and ticketing.',
    status: 'In Progress',
    tech: ['Node.js', 'React'],
  },
  {
    id: 7,
    name: 'Travel Planner',
    description: 'A trip planning platform with itinerary sharing.',
    status: 'Draft',
    tech: ['Next.js', 'Prisma'],
  },
  {
    id: 8,
    name: 'School Management System',
    description: 'Attendance, results & teacher management.',
    status: 'Completed',
    tech: ['Laravel', 'MySQL'],
  },
  {
    id: 9,
    name: 'Real Estate Marketplace',
    description: 'Buy, sell & rent properties online.',
    status: 'In Progress',
    tech: ['Next.js', 'Supabase'],
  },
  {
    id: 10,
    name: 'Chat Application',
    description: 'Realtime chat with groups & media upload.',
    status: 'Completed',
    tech: ['Node.js', 'Socket.io'],
  },
  {
    id: 11,
    name: 'Fitness Tracker',
    description: 'Workout tracking with progress analytics.',
    status: 'Draft',
    tech: ['React Native', 'Expo'],
  },
  {
    id: 12,
    name: 'Invoice Manager',
    description: 'Create, send & track customer invoices.',
    status: 'Completed',
    tech: ['Next.js', 'PostgreSQL'],
  },
  {
    id: 13,
    name: 'Stock Portfolio Tracker',
    description: 'Track investments & portfolio value.',
    status: 'In Progress',
    tech: ['React', 'Chart.js'],
  },
  {
    id: 14,
    name: 'Learning Management System',
    description: 'Course creation, quizzes, certificates.',
    status: 'Completed',
    tech: ['Next.js', 'Stripe'],
  },
  {
    id: 15,
    name: 'Blog CMS',
    description: 'Create & manage blog posts with an editor.',
    status: 'Draft',
    tech: ['Next.js', 'TipTap'],
  },
  {
    id: 16,
    name: 'Crypto Dashboard',
    description: 'Track crypto prices & market trends.',
    status: 'In Progress',
    tech: ['Next.js', 'REST APIs'],
  },
  {
    id: 17,
    name: 'IoT Home Automation',
    description: 'Control IoT devices remotely.',
    status: 'Completed',
    tech: ['ESP32', 'Firebase'],
  },
  {
    id: 18,
    name: 'Food Delivery App',
    description: 'Online food ordering & tracking.',
    status: 'In Progress',
    tech: ['Flutter', 'Node.js'],
  },
  {
    id: 19,
    name: 'Video Course Builder',
    description: 'Upload, organize & sell video courses.',
    status: 'Draft',
    tech: ['Next.js', 'Supabase'],
  },
  {
    id: 20,
    name: 'AI Resume Builder',
    description: 'Generate resumes using AI templates.',
    status: 'Completed',
    tech: ['Next.js', 'OpenAI'],
  },
];
const ProjectsList = () => {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Project Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>

              <TableCell>{project.description}</TableCell>

              <TableCell>
                <Badge
                  variant={
                    project.status === 'Completed'
                      ? 'default'
                      : project.status === 'In Progress'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button
                  variant={'outline'}
                  className="hover:cursor-pointer"
                  onClick={() => {}}
                >
                  <EyeIcon />
                </Button>
                <Button
                  variant={'outline'}
                  className="hover:cursor-pointer"
                  onClick={() => {}}
                >
                  <EditIcon />
                </Button>
                <Button
                  variant={'destructive'}
                  className="hover:cursor-pointer"
                  onClick={() => {}}
                >
                  <TrashIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsList;
