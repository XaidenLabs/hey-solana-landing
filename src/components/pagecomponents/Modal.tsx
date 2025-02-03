import React, { useState } from "react";
import Select from "react-select";
import { FaTelegramPlane, FaTimes } from "react-icons/fa";
import countryList from "react-select-country-list";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");
  const [country, setCountry] = useState<{ label: string; value: string } | null>(null);
  const [isTelegramJoined, setIsTelegramJoined] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email_address: email,
      first_name: firstName,
      last_name: lastName,
      country: country?.label,
      wallet_address: wallet,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/add_to_waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("content-type");
      if (response.ok && contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        setAlertMessage('Form submitted successfully!');
        setAlertColor('bg-green-500');
        setShowAlert(true);
        // Clear the form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setWallet('');
        setCountry(null);
        setIsTelegramJoined(false);
        localStorage.setItem('wallet', wallet);
        // Hide the alert after 5 seconds
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      } else {
        console.error("Failed to submit form. Please check the API endpoint.");
        setAlertMessage("Failed to submit form. Please try again.");
        setAlertColor('bg-red-500');
        setShowAlert(true);
        // Hide the alert after 5 seconds
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("An error occurred. Please try again.");
      setAlertColor('bg-red-500');
      setShowAlert(true);
      // Hide the alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  const handleTelegramClick = () => {
    setIsTelegramJoined(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const options = countryList().getData();

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClose}
        >
          <div
            className="bg-darkpink p-6 rounded shadow-lg w-96 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-7 right-6 text-white bg-black bg-opacity-50 rounded-full p-1"
              onClick={onClose}
            >
              <FaTimes size={20} />
            </button>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div>
                  <h1 className="text-white text-[30px] mb-2">
                    Join the Waitlist
                  </h1>
                </div>

                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
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
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <Select
                  id="country"
                  options={options}
                  value={country}
                  onChange={(newValue) => setCountry(newValue as { label: string; value: string } | null)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="wallet"
                >
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

              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTelegramClick}
                className="text-black text-sm font-bold hover:underline flex items-center gap-2"
              >
                <FaTelegramPlane className="inline-block" />
                Join our Telegram group
              </a>

              <button
                type="submit"
                disabled={!isTelegramJoined}
                className={`mt-4 w-full py-3 px-4 rounded-full text-xl ${
                  isTelegramJoined
                    ? "bg-black text-white"
                    : "bg-gray-400 text-white"
                }`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {showAlert && (
        <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 py-2 px-4 rounded shadow-lg text-white ${alertColor}`}>
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default Modal;
