'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// shadcn/ui components (adjust imports to match your project structure)
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
import { Button } from '@/components/ui/button';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const FooterContactForm: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    setStatusMessage(null);

    try {
      // Simulate an async request (replace with real API call)
      await new Promise((res) => setTimeout(res, 700));

      // For demo, log the values. Replace this with fetch/axios call.
      console.log('Contact form submitted:', values);

      setStatusMessage('Thanks — your message has been sent!');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatusMessage('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex-1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-slate-200 font-medium">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your name"
                    aria-invalid={!!form.formState.errors.name}
                    disabled={submitting}
                    className="bg-slate-800 border-sky-700 focus-visible:border-sky-700 focus-visible:ring-sky-600 focus-visible:ring-2 text-slate-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-slate-200 font-medium">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Write your message..."
                    rows={4}
                    aria-invalid={!!form.formState.errors.message}
                    disabled={submitting}
                    className="bg-slate-800 border-sky-700 focus-visible:border-sky-700 focus-visible:ring-sky-600 focus-visible:ring-2 text-slate-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-3">
            <Button
              type="submit"
              disabled={submitting}
              className="min-w-[120px] bg-sky-600 text-slate-200 hover:bg-sky-700 hover:cursor-pointer"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </Button>

            {statusMessage && (
              <div
                role="status"
                aria-live="polite"
                className="text-sm text-slate-700"
              >
                {statusMessage}
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FooterContactForm;
