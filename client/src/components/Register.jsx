import { useState } from "react";
import { toast } from "react-hot-toast";
import { AxiosInstance } from "../lib/axios";

const Register = () => {
  // states
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "age") {
      setForm((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const promise = AxiosInstance.post("/users", form);
      await toast.promise(promise, {
        loading: "Registering...",
        success: "Registered successfully",
        error: "Failed to register",
      });
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.includes("duplicate key")
            ? "Email already exists"
            : "Failed to register"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="h-full flex flex-col justify-evenly gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="name" className="text-gray-900 text-xl">
          Name
        </label>
        <input
          disabled={loading}
          type="text"
          name="name"
          id="name"
          required
          className="p-2 border-2 border-gray-300 rounded-lg"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <label htmlFor="email" className="text-gray-900 text-xl">
          Email
        </label>
        <input
          disabled={loading}
          type="email"
          name="email"
          id="email"
          required
          className="p-2 border-2 border-gray-300 rounded-lg"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <label htmlFor="age" className="text-gray-900 text-xl">
          Age
        </label>
        <input
          disabled={loading}
          type="number"
          name="age"
          id="age"
          min={18}
          max={65}
          required
          className="p-2 border-2 border-gray-300 rounded-lg"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
      {error?.length > 0 && (
        <div className="text-red-500 text-center">{error}</div>
      )}
    </form>
  );
};

export default Register;
