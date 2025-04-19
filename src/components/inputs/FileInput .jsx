import React from "react";

// the component with React.forwardRef to support refs
const FileInput = React.forwardRef(({ label, onChange }, ref) => {
  return (
    <div className="text-left">
      <label className="block font-bold text-gray-700 mb-1">{label} *</label>
      <input
        type="file"
        ref={ref} //Forwarded ref here
        onChange={(e) => onChange(e.target.files[0])}
        required
        className="block w-full text-sm border border-gray-700 rounded-md cursor-pointer p-1"
      />
    </div>
  );
});

export default FileInput;
