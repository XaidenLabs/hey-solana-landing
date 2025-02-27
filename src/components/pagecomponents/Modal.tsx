import React, { useState } from "react";
import Select from "react-select";
import { FaTelegramPlane, FaTimes } from "react-icons/fa";
import countryList from "react-select-country-list";
import Link from "next/link";
import { CircularProgress } from "@mui/material";

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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isTelegramJoined) {
      setAlertMessage('Kindly Join Our Telegram Channel!');
      setAlertColor('bg-red-500');
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return;
    }


    const data = {
      email_address: email,
      first_name: firstName,
      last_name: lastName,
      country: country?.label,
      wallet_address: wallet,
    };

    try {
      setLoading(true);
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
        console.log('Form submitted successfully:', result.message);
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
        setShowAlert(false);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      } else {
        const result = await response.json();
        setAlertMessage(result.message);
        setAlertColor('bg-red-500');
        setShowAlert(true);
        // Hide the alert after 5 seconds
        setLoading(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("An error occurred. Please try again.");
      setAlertColor('bg-red-500');
      setLoading(false)
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

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'black',
      color: 'white',
      borderColor: 'black',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: 'black',
      color: 'white',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'gray' : 'black',
      color: 'white',
      '&:hover': {
        backgroundColor: 'gray',
      },
    }),
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm z-[100]"
          onClick={handleClose}
        >
          <div
            className="border p-6 bg-black rounded-2xl shadow-lg md:w-3/5 relative"
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
                <div className="md:flex items-center justify-center">
                  <h1 className="text-white text-[40px] mb-2">
                    Join the Waitlist
                  </h1>
                </div>

                <div className="md:flex gap-4">
                  <div className="md:w-1/2">
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
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>

                  <div className="md:w-1/2">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex gap-4 mb-4">
                <div className="md:w-1/2">
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="md:w-1/2">
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
                    styles={customStyles}
                    className="shadow appearance-none border rounded w-full text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTelegramClick}
                className="text-blue-500 text-xl font-bold hover:underline flex items-center gap-2"
              >
                <FaTelegramPlane className="inline-block" />
                Join our Telegram group
              </a>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-b  w-5/12 flex flex-row items-center justify-center from-lightpink to-darkpink  border-2 border-lightpink/20 border-t-darkpink rounded-full p-2 bg-darkpink"

                >
                  {loading ? <CircularProgress /> :
                    "Submit"}
                </button>
                {/* <button
                  type="submit"
                  disabled={!isTelegramJoined}
                  className={`w-96 py-3 px-4 rounded-full text-xl flex justify-center items-center ${
                    isTelegramJoined
                      ? "bg-darkpink text-white"
                      : "bg-gray-400 text-white"
                  }`}
                >
                  Submit
                </button> */}
              </div>
            </form>
          </div>
        </div>
      )}
      {showAlert && (
        <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 py-2 px-4 z-[100] rounded shadow-lg text-white ${alertColor}`}>
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default Modal;
