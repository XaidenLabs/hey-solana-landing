import React from 'react';

interface FloatingLabelTextareaProps {
  label: string;
  name: string;
  placeholder: string;
  rows?: number;
}

const FloatingLabelTextarea: React.FC<FloatingLabelTextareaProps> = ({
  label,
  name,
  placeholder,
  rows = 4,
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-2 left-4 text-white text-sm pointer-events-none">
        {label}
      </div>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-[#1a1a1ab9] text-white placeholder-gray-400 border border-gray-600 rounded-xl pt-[28px] pb-2 px-4 h-44 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
      />
    </div>
  );
};

export default FloatingLabelTextarea;
