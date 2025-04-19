import React from "react";

function CheckboxGroup({ label, options, onChange }) {
  return (
    <div className="text-left">
      <label className="block font-bold text-gray-700 mb-1">{label}</label>
      <div className="flex flex-wrap gap-4">
        {Object.entries(options).map(([key, value]) => (
          <label key={key} className="inline-flex items-center space-x-1">
            <input
              type="checkbox"
              checked={value}
              onChange={() => onChange(key)}
              className="accent-sky-600"
            />
            <span className="text-sm capitalize">{key}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CheckboxGroup;
