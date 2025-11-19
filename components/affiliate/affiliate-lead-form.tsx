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
import { supabase } from '@/lib/supabase-client';
import toast from 'react-hot-toast';
import { firebaseClient } from '@/db/firebase-client';

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
  const [loading, setLoading] = React.useState(false);
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

  const onSubmit = async (data: AffiliateFormType) => {
    try {
      setLoading(true);
      let fileUrl = null;
      if (data.file) {
        const file = data.file;
        const fileName = `${Date.now()}-${file.name}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('shafacode')
          .upload(fileName, file);

        if (uploadError) {
          console.error('Upload error:', uploadError);
          return;
        }

        const { data: publicUrlData } = supabase.storage
          .from('shafacode')
          .getPublicUrl(fileName);
        fileUrl = publicUrlData?.publicUrl;
      }
      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        fileUrl,
      };

      // send mail
      const res = await fetch('/api/affiliate-lead-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      // send data to firestore

      if (!res.ok) {
        toast.error('Failed to send email');
        throw new Error('Failed to send email');
      }
      toast.success('Email sent successfully');
      const result = await res.json();
      console.log('Email sent result:', result);
      form.reset({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        file: null,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
                      disabled={loading}
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
                      disabled={loading}
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
                      disabled={loading}
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
                      disabled={loading}
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
                        disabled={loading}
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
              disabled={loading}
              className="bg-sky-600 hover:bg-sky-700 hover:cursor-pointer"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AffiliateLeadForm;
