import { useState } from "react";
import Payments from "./Payments";
import Register from "./Register";

const Card = () => {
  const [isRegister, setIsRegister] = useState(true);
  return (
    <div className="min-h-[50vh] w-[30rem] p-4 bg-white rounded-2xl shadow-2xl">
      <div className="flex items-center gap-6 justify-center">
        <button
          className={`text-gray-900 text-xl tracking-wider transition-all ${
            isRegister ? "border-b-2 border-blue-500 font-bold" : ""
          }`}
          onClick={() => setIsRegister(true)}
        >
          Register
        </button>
        <button
          className={`text-gray-900 text-xl tracking-wider ${
            !isRegister ? "border-b-2 border-blue-500 font-bold" : ""
          }`}
          onClick={() => setIsRegister(false)}
        >
          Payments
        </button>
      </div>
      <div className="mt-8">{isRegister ? <Register /> : <Payments />}</div>
    </div>
  );
};

export default Card;
