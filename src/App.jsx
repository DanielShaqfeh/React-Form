import React, { useState,useRef } from "react";
import TextInput from './components/inputs/TextInput';
import RadioGroup from './components/inputs/RadioGroup';
import CheckboxGroup from './components/inputs/CheckboxGroup';
import FileInput from './components/inputs/FileInput '; 
import TextArea from './components/inputs/TextArea';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [languages, setLanguages] = useState({
    HTML: true,
    CSS: false,
    JavaScript: false,
    Python: false,
  });
  const [resume, setResume] = useState(null);
  const fileInputRef = useRef(null);

  const [about, setAbout] = useState("");
  
  const [submitSuccess, setSubmitSuccess] = useState(false); // State for submit success message

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, contact, gender, languages, resume, about);

    // Show success message
    setSubmitSuccess(true);
    handleReset();
    setTimeout(() => {
      setSubmitSuccess(false); // Hide the success message after 3 seconds
    }, 2000);
  };

  const handleLanguageChange = (lang) => {
    setLanguages((prev) => ({
      ...prev,
      [lang]: !prev[lang],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setLanguages({
      HTML: true,
      CSS: false,
      JavaScript: false,
      Python: false,
    });
    setResume(null);
    setAbout("");
    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-[800px] border-5 m-auto mt-10">
      <h1 className="text-xl font-bold text-sky-600 text-center mb-4">Form in React</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <TextInput label="First Name" value={firstName} setValue={setFirstName} required />
        <TextInput label="Last Name" value={lastName} setValue={setLastName} required />
        <TextInput label="Email" type="email" value={email} setValue={setEmail} required />
        <TextInput label="Contact" type="tel" value={contact} setValue={setContact} required />
        <RadioGroup label="Gender" options={["male", "female"]} selected={gender} onChange={setGender} />
        <CheckboxGroup label="Programming Languages Known" options={languages} onChange={handleLanguageChange} />
        <FileInput label="Upload Resume" onChange={setResume} ref={fileInputRef} />
        <TextArea label="About" value={about} setValue={setAbout} required />

        <div className="flex justify-around">
          <button
            type="reset"
            onClick={handleReset}
            className="bg-sky-600 hover:bg-sky-800 text-white py-2 px-4 rounded-lg w-1/3"
          >
            Reset
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-sky-600 hover:bg-sky-800 text-white py-2 px-4 rounded-lg w-1/3"
          >
            Submit
          </button>
        </div>
        {submitSuccess && (
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg w-[90%] sm:w-[400px] text-center">
          Form submitted successfully!
          </div>
        )}
      </form>

       
    </div>
  );
}

export default App;
