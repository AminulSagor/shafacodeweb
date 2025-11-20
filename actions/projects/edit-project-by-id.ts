'use server';

import { ProjectFormValues } from '@/components/admin/projects/create-project-form';
import { db } from '@/db/firebase-admin';

export async function updateProject(id: string, data: ProjectFormValues) {
  const payload = {
    client: data.client,
    title: data.title,
    description: data.description,
    status: data.status,
    contactEmail: data.contact,
  };
  try {
    await db
      .collection('projects')
      .doc(id)
      .update({
        ...payload,
        updatedAt: new Date(),
      });
    return { success: true, message: 'Project updated successfully' };
  } catch (error) {
    console.error('Error updating project:', error);
    return { success: false, error: 'Failed to update project' };
  }
}
