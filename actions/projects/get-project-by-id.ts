import { db } from '@/db/firebase-admin';

export const getProjectById = async (id: string) => {
  try {
    const docRef = db.collection('projects').doc(id); // reference to a single doc
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return null; // document not found
    }

    const data = docSnap.data();

    // Serialize timestamps to strings if needed
    return {
      id: docSnap.id,
      title: data?.title || '',
      summary: data?.summary || '',
      description: data?.description || '',
      client: data?.client || '',
      contactEmail: data?.contactEmail || '',
      status: data?.status || 'in-progress',
      createdAt:
        data?.createdAt?.toDate().toISOString() || new Date().toISOString(),
      updatedAt:
        data?.updatedAt?.toDate().toISOString() || new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
};
