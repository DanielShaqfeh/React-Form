import React from "react";

function TextArea({ label, value, setValue, required = false }) {
  return (
    <div className="text-left">
      <label className="block font-bold text-gray-700 mb-1">{label}{required && " *"}</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        rows={5}
        className="w-full p-2 border border-gray-700  rounded-md resize-none text-sm"
      ></textarea>
    </div>
  );
}

export default TextArea;