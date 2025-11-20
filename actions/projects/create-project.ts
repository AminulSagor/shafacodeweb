'use server';
import { ProjectFormValues } from '@/components/admin/projects/create-project-form';
import { db } from '@/db/firebase-admin';

const createProject = async (project: ProjectFormValues) => {
  const payload = {
    client: project.client,
    title: project.title,
    description: project.description,
    status: project.status,
    contactEmail: project.contact,
  };

  try {
    const docRef = await db.collection('projects').add(payload);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error creating project:', error);
    return { success: false, errorMsg: 'Failed to create project' };
  }
};

export default createProject;
