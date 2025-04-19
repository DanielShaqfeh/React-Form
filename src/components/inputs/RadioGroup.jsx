import React from "react";

function RadioGroup({ label, options, selected, onChange }) {
  return (
    <div className="text-left">
      <label className="block font-bold text-gray-700 mb-1">{label}</label>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center space-x-1">
            <input
              type="radio"
              value={option}
              checked={selected === option}
              onChange={(e) => onChange(e.target.value)}
              className="accent-sky-600"
            />
            <span className="text-sm capitalize">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioGroup;