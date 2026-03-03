import DragNDrop from "../components/DragNDrop";

const Registerpage = () => {
  return (
    <div className="min-h-screen bg-[#050a14] text-white font-sans pt-12 flex flex-col items-center">
      <h1 className="text-center text-2xl md:text-4xl font-bold">
        Your Journey to Genrative Con{" "}
        <span className="text-purple-400">2026</span> starts here!
      </h1>

      <DragNDrop />

      <p className="mt-8 text-gray-500 text-sm">
        Fill in the rest of your details below to complete registration.
      </p>
    </div>
  );
};

export default Registerpage;
