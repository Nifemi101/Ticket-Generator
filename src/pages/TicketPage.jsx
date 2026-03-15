import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const TicketPage = ({ ticketData }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (ticketData?.avatar) {
      const url = URL.createObjectURL(ticketData.avatar);
      setAvatarUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [ticketData?.avatar]);

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
    <div className="min-h-screen bg-[#050a14] text-white font-sans flex flex-col items-center p-4 sm:p-6 pt-8 sm:pt-12 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/30 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none transform -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none transform translate-x-1/3 translate-y-1/3" />

      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 z-10 mb-6 sm:mb-10 mt-4 sm:mt-12">
        <img src={logo} alt="Generative Con" className="h-8 sm:h-10 w-auto" />
        <span className="text-xl sm:text-2xl font-bold tracking-wider">
          Generative Con
        </span>
      </div>

      {/* Hero text */}
      <div className="text-center max-w-2xl z-10 mb-8 sm:mb-16 px-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Congrats,{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 drop-shadow-sm">
            {fullName || "Attendee"}
          </span>
          !
          <br />
          Your ticket is ready.
        </h1>
        <p className="text-white/70 text-sm sm:text-xl font-light">
          We've emailed your ticket to{" "}
          <span className="text-purple-400 font-medium">
            {email || "your-email@example.com"}
          </span>
          <br className="hidden sm:block" /> and will send updates in the run up
          to the event.
        </p>
      </div>

      {/* --- TICKET CONTAINER --- */}
      <div className="relative w-full max-w-[750px] z-10 mx-auto transition-transform hover:scale-[1.02] duration-500 cursor-default">
        {/* Shadow layer to detach ticket from background */}
        <div className="absolute inset-0 bg-black/40 blur-2xl rounded-3xl" />

        <div className="relative flex w-full drop-shadow-2xl">
          {/* LEFT TICKET BODY */}
          <div className="flex-1 bg-white3 backdrop-blur-2xl border-t border-l border-b border-white/20 border-r-0 rounded-l-2xl sm:rounded-l-3xl p-4 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[160px] sm:min-h-[260px] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.2)]">
            {/* Shimmer/Glare effect */}
            <div className="absolute top-0 left-0 w-[200%] h-full bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none opacity-50 transform -skew-x-12 -translate-x-1/4" />

            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <img
                    src={logo}
                    alt="Generative Con"
                    className="h-6 sm:h-10 w-auto drop-shadow-md"
                  />
                  <h2 className="text-lg sm:text-3xl font-black text-white tracking-wide">
                    Generative Con
                  </h2>
                </div>
                <p className="text-white/60 text-[10px] sm:text-sm mt-1 sm:mt-2 ml-[32px] sm:ml-[56px] font-mono uppercase tracking-widest">
                  March 25th, 2026 • Austin, TX
                </p>
              </div>

              <div className="hidden sm:flex flex-col items-end">
                <span className="px-3 py-1 border border-purple-500/40 bg-purple-500/10 rounded-full text-purple-300 text-xs font-bold tracking-widest uppercase">
                  VIP Access
                </span>
              </div>
            </div>

            <div className="flex items-end sm:items-center gap-3 sm:gap-5 mt-6 sm:mt-10 relative z-10">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`${fullName}'s avatar`}
                  className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl object-cover border border-white/20 shadow-lg"
                />
              ) : (
                <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center bg-linear-to-br from-white/10 to-transparent rounded-lg sm:rounded-2xl border border-white/10 shadow-lg">
                  <span className="text-purple-300 font-bold text-lg sm:text-2xl">
                    {fullName ? fullName.charAt(0).toUpperCase() : "?"}
                  </span>
                </div>
              )}

              <div className="flex flex-col overflow-hidden w-full">
                <p className="text-base sm:text-2xl font-bold text-white tracking-wide truncate">
                  {fullName || "Unknown Attendee"}
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2 text-white/60 mt-0.5 sm:mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3 h-3 sm:w-5 sm:h-5 text-white/80"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-[10px] sm:text-[15px] font-medium truncate">
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

          {/* PERFORATED SEPARATOR */}
          <div className="relative w-8 sm:w-[50px] flex flex-col items-center justify-center bg-white/3 backdrop-blur-2xl border-y border-white/20">
            {/* Top Cutout */}
            <div className="absolute top-0 -translate-y-1/2 w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#050a14] border-b border-white/20 z-20 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)]"></div>
            {/* Dashed Line */}
            <div className="h-full border-l-2 sm:border-l-[3px] border-dashed border-white/20 my-2 sm:my-5 z-10 w-0"></div>
            {/* Bottom Cutout */}
            <div className="absolute bottom-0 translate-y-1/2 w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#050a14] border-t border-white/20 z-20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"></div>
          </div>

          {/* RIGHT TICKET STUB */}
          <div className="w-[70px] sm:w-[130px] bg-white3 backdrop-blur-2xl border-t border-r border-b border-white/20 border-l-0 rounded-r-2xl sm:rounded-r-3xl flex flex-col items-center justify-center relative overflow-hidden shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.1)]">
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-white/5 to-transparent pointer-events-none" />

            {/* Fake CSS Barcode */}
            <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 h-[60%] w-2 sm:w-4 flex flex-col justify-between opacity-30">
              <div className="w-full h-[2%] bg-white"></div>
              <div className="w-full h-[5%] bg-white"></div>
              <div className="w-full h-[1%] bg-white"></div>
              <div className="w-full h-[8%] bg-white"></div>
              <div className="w-full h-[3%] bg-white"></div>
              <div className="w-full h-[12%] bg-white"></div>
              <div className="w-full h-[2%] bg-white"></div>
              <div className="w-full h-[4%] bg-white"></div>
              <div className="w-full h-[7%] bg-white"></div>
              <div className="w-full h-[1%] bg-white"></div>
              <div className="w-full h-[9%] bg-white"></div>
              <div className="w-full h-[3%] bg-white"></div>
            </div>

            {/* Ticket Number */}
            <div className="transform rotate-90 whitespace-nowrap text-white/40 text-sm sm:text-2xl font-mono tracking-widest relative z-10 font-bold mb-4 sm:mb-0 mr-2 sm:mr-4">
              #{ticketNumber}
            </div>

            {/* Admit One text (Mobile Only to save space, hidden on desktop where it's obvious) */}
            <div className="transform rotate-90 whitespace-nowrap text-white/20 text-[8px] font-bold tracking-widest absolute left-2 sm:hidden uppercase">
              Admit One
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
