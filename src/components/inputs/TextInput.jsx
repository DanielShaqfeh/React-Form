import React from "react";

function TextInput({ label, value, setValue, type = "text", required = false }) {
  return (
    <div className="text-left">
      <label className="block font-bold text-gray-700 mb-1">{label}{required && " *"}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        className="w-full p-2 border border-gray-300 rounded-md text-sm"
      />
    </div>
  );
}

export default TextInput;