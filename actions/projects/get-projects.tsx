import { db } from '@/db/firebase-admin';

export interface Project {
  id: string;
  title?: string;
  summary?: string;
  description?: string;
  client?: string;
  contactEmail?: string;
  status?: 'delivered' | 'in-progress' | 'draft';
  createdAt?: string;
  updatedAt?: string;
}
export const getProjects = async () => {
  try {
    const snapshot = await db.collection('projects').get();

    const projectsFromFirestore: Project[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || '',
        summary: data.summary || '',
        description: data.description || '',
        client: data.client || '',
        contactEmail: data.contactEmail || '',
        status: data.status || 'in-progress',
        createdAt:
          data.createdAt?.toDate().toISOString() || new Date().toISOString(),
        updatedAt:
          data.updatedAt?.toDate().toISOString() || new Date().toISOString(),
      };
    });
    return projectsFromFirestore;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};
