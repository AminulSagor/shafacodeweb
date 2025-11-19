import { Button } from '@/components/ui/button';
import { db } from '@/db/firebase-admin';
import React from 'react';

const Page = async () => {
  // Demo user data
  const demoUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://i.pravatar.cc/100', // placeholder avatar
  };

  const handleSendMessage = () => {
    alert(`Message sent to ${demoUser.name}!`);
  };

  const snapshot = await db.collection('projects').get();
  const projects = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(projects, 'firebase');
  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow rounded-lg space-y-6">
      {/* Demo User Card */}
      <div className="flex items-center space-x-4 p-4 border rounded-lg bg-gray-50">
        <img
          src={demoUser.avatar}
          alt={demoUser.name}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex-1 space-y-4">
          <h3 className="text-lg font-semibold">{demoUser.name}</h3>
          <p className="text-sm text-gray-500">{demoUser.email}</p>
          <Button>Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
