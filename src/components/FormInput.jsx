import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormInput = ({ generateTicket }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gitHub, setGitHub] = useState("");

  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const submitEvent = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError(
        "Please enter a valid email address (e.g., johndoe@gmail.com)",
      );
      return;
    }

    setEmailError("");
    generateTicket({ fullName, email, gitHub });
    navigate("/ticket");
  };

  return (
    <form
      onSubmit={submitEvent}
      noValidate
      className="flex flex-col gap-6 w-full max-w-md mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label className="text-white font-medium">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-purple-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white font-medium">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError("");
          }}
          placeholder="youremail@email.com"
          required
          className={`p-3 rounded-lg bg-white/10 border text-white focus:outline-none focus:ring-1 ${
            emailError
              ? "border-red-500 focus:ring-red-500"
              : "border-white/20 focus:ring-purple-300"
          }`}
        />

        {emailError && (
          <span className="text-red-400 text-sm font-medium">{emailError}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white font-medium">GitHub Username</label>
        <input
          type="text"
          value={gitHub}
          onChange={(e) => setGitHub(e.target.value)}
          placeholder="@yourusername"
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-purple-300"
        />
      </div>

      <button
        type="submit"
        className="mt-4 p-4 bg-purple-400 hover:bg-purple-600 font-bold rounded-lg transition-colors text-white text-3xl text-center"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default FormInput;
