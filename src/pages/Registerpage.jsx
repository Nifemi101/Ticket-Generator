import { useState } from "react";
import DragNDrop from "../components/DragNDrop";
import FormInput from "../components/FormInput";

const Registerpage = ({ generateTicket }) => {
  const [avatar, setAvatar] = useState(null);

  const handleGenerateTicket = (data) => {
    generateTicket({ ...data, avatar });
  };

  return (
    <div className="min-h-screen bg-[#050a14] text-white font-sans pt-12 flex flex-col items-center p-4">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Your Journey to Generative Con{" "}
        <span className="text-purple-400">2026</span> starts here!
      </h1>
      <DragNDrop onUpload={(file) => setAvatar(file)} />
      <div className="w-full mt-4">
        <FormInput generateTicket={handleGenerateTicket} />
      </div>
    </div>
  );
};

export default Registerpage;
