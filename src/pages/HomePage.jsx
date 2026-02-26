import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 font-sans">
      <div className="absolute inset-0 -z-20 h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-110"></div>

      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[2px]"></div>

      <div className="flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-md md:p-12">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Empowering the <br className="hidden md:block" />
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Next Generation
            </span>{" "}
            of AI Developers
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
            Join us for a 3-day immersive experience where you’ll learn from
            industry experts, network with peers, and explore the latest trends
            in
            <span className="font-semibold text-white">
              {" "}
              AI and machine learning
            </span>
            .
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to=""
              className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-lg font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] active:scale-95"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-100 to-purple-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Link>

            <Link
              to="/about"
              className="rounded-full border border-white/30 px-8 py-3.5 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
