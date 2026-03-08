import DragNDrop from "../components/DragNDrop";
import FormInput from "../components/formInput";

const Registerpage = () => {
  return (
    <div className="min-h-screen bg-[#050a14] text-white font-sans pt-12 flex flex-col items-center p-4">
      <h1 className="text-center text-2xl md:text-4xl font-bold">
        Your Journey to Genrative Con{" "}
        <span className="text-purple-400">2026</span> starts here!
      </h1>
      <DragNDrop />
      <FormInput />
    </div>
  );
};

export default Registerpage;
