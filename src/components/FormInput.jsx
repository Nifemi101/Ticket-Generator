import { useState } from "react";
const FormInput = ({ generateTicket }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gitHub, setGitHub] = useState("");

  const submitEvent = (e) => {
    e.preventDefault();
    generateTicket({ fullName, email, gitHub });
  };

  return (
    <form
      onSubmit={submitEvent}
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
          className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-orange-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white font-medium">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@email.com"
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-orange-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white font-medium">GitHub Username</label>
        <input
          type="text"
          value={gitHub}
          onChange={(e) => setGitHub(e.target.value)}
          placeholder="@yourusername"
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-orange-300"
        />
      </div>

      <button
        type="submit"
        className="mt-4 p-4 bg-purple-400 hover:bg-purple-600  font-bold rounded-lg transition-colors text-white text-3xl"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default FormInput;
