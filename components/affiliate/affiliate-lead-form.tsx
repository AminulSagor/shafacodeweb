'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Upload } from 'lucide-react';

const affiliateFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
  file: z.instanceof(File).optional().nullable(),
});

type AffiliateFormType = z.infer<typeof affiliateFormSchema>;

const AffiliateLeadForm = () => {
  const form = useForm<AffiliateFormType>({
    resolver: zodResolver(affiliateFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
      file: null,
    },
  });

  const onSubmit = (data: AffiliateFormType) => {
    console.log(data);
  };

  return (
    <div className="border p-4 rounded-lg border-slate-700">
      <div>
        <h2 className="text-xl font-semibold mb-2">Join as an affiliate</h2>
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
          Share your details and we’ll get back to you with how to track your
          referrals and receive your 4–6% commission.
        </p>
      </div>
      <div className="mt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="bg-slate-800 border-sky-700 focus-visible:border-sky-700 focus-visible:ring-sky-600 focus-visible:ring-2 text-slate-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="bg-slate-800 border-sky-700 focus-visible:border-sky-700 focus-visible:ring-sky-600 focus-visible:ring-2 text-slate-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      {...field}
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      {...field}
                      className="bg-slate-800 border-sky-700 focus-visible:border-sky-700 focus-visible:ring-sky-600 focus-visible:ring-2 text-slate-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload File (optional)</FormLabel>

                  <FormControl>
                    <div>
                      <label
                        htmlFor="file-upload"
                        className="
              flex items-center gap-3
              bg-slate-800 border border-sky-700
              hover:bg-slate-700/60 hover:border-sky-600
              text-slate-200 cursor-pointer
              rounded-lg p-3 transition
            "
                      >
                        <Upload className="w-5 h-5 text-sky-500" />
                        <span className="text-sm">
                          {field.value
                            ? field.value.name
                            : 'Choose a file (PDF or Image)'}
                        </span>
                      </label>

                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*, .pdf"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          field.onChange(file ?? null);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 hover:cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AffiliateLeadForm;
