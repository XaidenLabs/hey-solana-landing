"use client";

import React, { useEffect, useState } from 'react';

interface WaitlistEntry {
  id: string; 
  email_address: string;
  first_name: string;
  last_name: string;
  country: string;
  wallet_address: string;
}

const AdminPage: React.FC = () => {
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWaitlist = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get_waitlist`);
        const contentType = response.headers.get('content-type');

        if (response.ok && contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setWaitlist(data);
        } else {
          setError('Failed to fetch waitlist. Please check the API endpoint.');
        }
      } catch (error) {
        setError('An error occurred while fetching the waitlist');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWaitlist();
  }, []);

  const handleEdit = (id: string) => {
    console.log(`Edit entry with ID: ${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/delete_waitlist/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setWaitlist(waitlist.filter(entry => entry.id !== id));
        console.log(`Deleted entry with ID: ${id}`);
      } else {
        console.error('Failed to delete entry. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while deleting the entry:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Waitlist</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300">#</th>
            <th className="py-2 px-4 border border-gray-300">First Name</th>
            <th className="py-2 px-4 border border-gray-300">Last Name</th>
            <th className="py-2 px-4 border border-gray-300">Email Address</th>
            <th className="py-2 px-4 border border-gray-300">Country</th>
            <th className="py-2 px-4 border border-gray-300">Wallet Address</th>
            <th className="py-2 px-4 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {waitlist.map((entry, index) => (
            <tr key={entry.id}>
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">{entry.first_name}</td>
              <td className="py-2 px-4 border border-gray-300">{entry.last_name}</td>
              <td className="py-2 px-4 border border-gray-300">{entry.email_address}</td>
              <td className="py-2 px-4 border border-gray-300">{entry.country}</td>
              <td className="py-2 px-4 border border-gray-300">{entry.wallet_address}</td>
              <td className="py-2 px-4 border border-gray-300">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(entry.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(entry.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;