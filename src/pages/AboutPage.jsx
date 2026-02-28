import React from "react";

const AboutPage = () => {
  const mission = [
    {
      title: "Our Mission",
      description:
        "To democratize access to high-level AI research and practical implementation tools.",
    },
    {
      title: "The Vision",
      description:
        "Building a world where human creativity is amplified, not replaced, by machine learning.",
    },
    {
      title: "Community",
      description:
        "A global network of developers collaborating on open-source LLMs and generative art.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#050a14] text-white font-sans">
      <section className="pt-20 pb-12 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Beyond the{" "}
          <span className="bg-linear-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Algorithm
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
          Generative Con isn't just a conference. It’s a collective of builders,
          thinkers, and pioneers shaping the frontier of synthetic intelligence.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {mission.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-400">
              {item.title}
            </h3>
            <p className="text-slate-400">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-slate-900/20 py-20 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-sm uppercase tracking-widest text-slate-500">
              Speakers
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">12</div>
            <div className="text-sm uppercase tracking-widest text-slate-500">
              Workshops
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">5k+</div>
            <div className="text-sm uppercase tracking-widest text-slate-500">
              Attendees
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">Free</div>
            <div className="text-sm uppercase tracking-widest text-slate-500">
              Open Source
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
