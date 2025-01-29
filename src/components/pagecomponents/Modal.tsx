import React, { useState } from 'react';
import { FaTelegramPlane, FaGlobe } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Wallet:', wallet);
    alert('Form submitted successfully!');
    setEmail('');
    setWallet('');
    onClose();
    
    localStorage.setItem('wallet', wallet);
    // alert('Data saved successfully!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center" onClick={onClose}>
      <div className="bg-[#971BB2] p-6 rounded-lg w-11/12 md:w-1/3" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-white">Join the Waitlist</h2>
          <button onClick={onClose} className="text-white bg-[#1b0c1f79] h-8 w-8 rounded-xl text-xl">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="wallet">
              Wallet Address
            </label>
            <input
              type="text"
              id="wallet"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <a href="https://t.me/+mT-FJs0poLc5OTBl" target="_blank" rel="noopener noreferrer" className="text-blue-300 flex items-center">
              <FaTelegramPlane className="mr-2" /> Join our Telegram
            </a>
          </div>
          {/* <div className="mb-4">
            <a href="https://pagelink.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 flex items-center">
              <FaGlobe className="mr-2" /> Visit our Page
            </a>
          </div> */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white font-bold py-3 px-20 rounded-xl focus:outline-none focus:shadow-outline cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;