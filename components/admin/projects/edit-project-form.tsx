'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { updateProject } from '@/actions/projects/edit-project-by-id';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const projectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  client: z.string().min(2, 'Client name is required'),
  status: z.enum(['in-progress', 'delivered'], 'Select a valid status'),
  contact: z
    .string()
    .min(5, 'Contact info is required')
    .refine(
      (val) => {
        try {
          // valid email
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailRegex.test(val)) return true;
          // valid URL
          new URL(val);
          return true;
        } catch {
          return false;
        }
      },
      { message: 'Contact must be a valid email or URL' }
    ),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface Props {
  title: string;
  description: string;
  client: string;
  status: 'in-progress' | 'delivered';
  contactEmail: string;
  id: string;
}

const EditProjectForm = ({
  client,
  contactEmail,
  description,
  status,
  title,
  id,
}: Props) => {
  const router = useRouter();
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title,
      description,
      client,
      status,
      contact: contactEmail,
    },
  });

  const onSubmit = async (data: ProjectFormValues) => {
    const projectData = await updateProject(id, data);
    if (projectData.success) {
      toast.success('Project updated Successfully.');
      form.reset();
      router.push('/admin/projects');
    } else {
      toast.error('Try again later.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Make Changes</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Client */}
            <FormField
              control={form.control}
              name="client"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client</FormLabel>
                  <FormControl>
                    <Input placeholder="Client name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Status */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-progress">Ongoing</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact */}
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact (email or link)</FormLabel>
                  <FormControl>
                    <Input placeholder="Contact info" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4">
              Save Changes
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EditProjectForm;
