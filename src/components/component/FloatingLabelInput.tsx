// components/FloatingLabelInput.tsx
import React from 'react';

interface FloatingLabelInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  type,
  name,
  placeholder,
}) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute top-2 left-4 text-white text-sm pointer-events-none">
        {label}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full bg-[#1a1a1a3b] text-white placeholder-gray-400 border border-gray-600 rounded-xl pt-[28px] pb-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
};

export default FloatingLabelInput;
