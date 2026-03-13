import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const TicketPage = ({ ticketData }) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    // Check if the ticketData comes with an uploaded avatar file
    // We create a temporary local ObjectURL so the img tag can render it
    if (ticketData?.avatar) {
      const url = URL.createObjectURL(ticketData.avatar);
      setAvatarUrl(url);

      // Clean up the object URL on unmount or when avatar changes
      // This prevents memory leaks caused by lingering URL references
      return () => URL.revokeObjectURL(url);
    }
  }, [ticketData?.avatar]);

  // Fallback UI in case the user navigates directly to "/ticket" without completing the form
  if (!ticketData) {
    return (
      <div className="min-h-screen bg-[#050a14] text-white flex flex-col items-center justify-center p-4 gap-4 font-sans">
        <h2 className="text-3xl font-bold text-center">
          No ticket data found!
        </h2>
        <p className="text-white/60 text-center">
          Please fill out the form to generate your ticket.
        </p>
        <Link
          to="/register"
          className="mt-4 px-6 py-3 bg-purple-500 hover:bg-purple-600 font-bold rounded-lg transition-colors text-white"
        >
          Go back to Register
        </Link>
      </div>
    );
  }

  const { fullName, email, gitHub } = ticketData;

  const ticketNumber = Math.floor(10000 + Math.random() * 90000);

  return (
    <div className="min-h-screen bg-[#050a14] text-white font-sans flex flex-col items-center p-6 pt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 translate-y-1/2" />

      <div className="flex items-center gap-3 z-10 mb-10 mt-6 md:mt-12">
        <img src={logo} alt="Generative Con" className="h-10 w-auto" />
        <span className="text-2xl font-bold tracking-wider">
          Generative Con
        </span>
      </div>

      {/* Hero text confirming the generated ticket */}
      <div className="text-center max-w-2xl z-10 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Congrats,{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
            {fullName || "Attendee"}
          </span>
          !
          <br />
          Your ticket is ready.
        </h1>
        <p className="text-white/70 text-lg md:text-xl font-light">
          We've emailed your ticket to <br className="hidden md:block" />
          <span className="text-purple-400 font-medium">
            {email || "your-email@example.com"}
          </span>{" "}
          and will send updates in
          <br className="hidden md:block" /> the run up to the event.
        </p>
      </div>

      <div className="relative w-full max-w-[700px] z-10 mx-auto filter drop-shadow-[0_25px_50px_rgba(167,139,250,0.15)] transition-transform hover:scale-[1.02] duration-500 cursor-default">
        <div className="relative flex w-full">
          <div className="flex-1 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 border-r-0 rounded-l-3xl p-6 md:p-8 pt-8 flex flex-col justify-between relative overflow-hidden min-h-[240px]">
            {/* Inner subtle glow for more glass realism */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/10 to-transparent pointer-events-none opacity-50" />

            {/* Event Name & Date */}
            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <img src={logo} alt="Generative Con" className="h-10 w-auto" />
                <h2 className="text-3xl font-bold text-white tracking-wide">
                  Generative Con
                </h2>
              </div>
              <p className="text-white/60 text-sm mt-3 ml-[56px]">
                {currentDate} / Austin, TX
              </p>
            </div>

            {/* User Details Box at Bottom Left */}
            <div className="flex items-center gap-5 mt-10 relative z-10">
              {/* Avatar render: Show custom image if uploaded, else fallback */}
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`${fullName}'s avatar`}
                  className="w-16 h-16 rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-purple-300 font-bold text-2xl">
                    {fullName ? fullName.charAt(0).toUpperCase() : "?"}
                  </span>
                </div>
              )}

              <div className="flex flex-col">
                <p className="text-2xl font-semibold text-white tracking-wide">
                  {fullName || "Unknown"}
                </p>
                <div className="flex items-center gap-2 text-white/70 mt-1">
                  {/* GitHub Logo SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/80"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-[15px] font-medium">
                    {gitHub
                      ? gitHub.startsWith("@")
                        ? gitHub
                        : `@${gitHub}`
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Separator (Perforated Dashed Line & Cutouts for realistic ticket look) */}
          <div className="relative w-[50px] flex flex-col items-center bg-linear-to-r from-white/5 to-white/5 backdrop-blur-xl border-y border-white/20">
            {/* Top Semi-circle Cutout */}
            <div className="absolute top-px transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#050a14] border-b border-white/20 z-20"></div>
            {/* Dashed Perforation Line */}
            <div className="h-full border-l-[3px] border-dashed border-white/10 my-5 z-10 w-0"></div>
            {/* Bottom Semi-circle Cutout */}
            <div className="absolute bottom-px transform translate-y-1/2 w-8 h-8 rounded-full bg-[#050a14] border-t border-white/20 z-20"></div>
          </div>

          {/* Ticket Right Stub (Number area) */}
          <div className="w-[100px] md:w-[130px] bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 border-l-0 rounded-r-3xl flex items-center justify-center relative overflow-hidden">
            {/* Stub inner glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-white/10 to-transparent pointer-events-none opacity-30" />

            {/* Rotated vertical Ticket Number */}
            <div className="transform rotate-90 whitespace-nowrap text-white/30 text-3xl font-mono tracking-widest relative z-10 font-bold">
              #{ticketNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
