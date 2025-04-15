'use client';

import { useState } from 'react';

export default function DeleteAccount() {
    const [formData, setFormData] = useState({
        username: '',
        mobile: '',
        reason: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you'd typically call an API to delete the account
        console.log('Submitting account deletion:', formData);

        // Pretend submission went through
        setSubmitted(true);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-100 bg-black min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Delete Account</h1>
            <p className="mb-8 text-sm text-gray-500">
                We’re sorry to see you go. Please fill out the form below to delete your account.
            </p>

            {submitted ? (
                <div className="p-6 bg-green-700 rounded-xl text-white">
                    <h2 className="text-xl font-semibold">Account Deletion Requested</h2>
                    <p>We’ve received your request. We’ll process it shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-xl shadow-xl">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-300">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            id="mobile"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-300">
                            Reason for Deletion (Optional)
                        </label>
                        <textarea
                            name="reason"
                            id="reason"
                            rows={4}
                            value={formData.reason}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                            placeholder="Let us know how we can do better..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-2 px-6 rounded-md"
                    >
                        Delete Account
                    </button>
                </form>
            )}
        </div>
    );
}
