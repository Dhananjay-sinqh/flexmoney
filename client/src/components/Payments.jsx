import { useState } from "react";
import { toast } from "react-hot-toast";
import { AxiosInstance } from "../lib/axios";

const Payments = () => {
  // states
  const [form, setForm] = useState({
    email: "",
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    batch: "6:00 AM - 7:00 AM",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "monthYear") {
      const [year, month] = value.split("-").map((x) => Number(x));
      setForm((prev) => ({ ...prev, month, year }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      setError("");
      setLoading(true);
      const promise = AxiosInstance.post("/users/createpayment", form);
      await toast.promise(promise, {
        loading: "Making payment...",
        success: "Payment successful",
        error: "Failed to make payment",
      });
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
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
        <label htmlFor="monthYear" className="text-gray-900 text-xl">
          Month and Year
        </label>
        <div className="flex items-center gap-4">
          <input
            disabled={loading}
            type="month"
            name="monthYear"
            id="monthYear"
            required
            className="p-2 border-2 border-gray-300 rounded-lg"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <label htmlFor="batch" className="text-gray-900 text-xl">
          Batch
        </label>
        <select
          disabled={loading}
          name="batch"
          id="batch"
          required
          className="p-2 border-2 border-gray-300 rounded-lg"
          onChange={handleChange}
        >
          <option value="">Select a batch</option>
          <option value="6:00 AM - 7:00 AM">6:00 AM - 7:00 AM</option>
          <option value="7:00 AM - 8:00 AM">7:00 AM - 8:00 AM</option>
          <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
          <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
        </select>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          disabled={loading}
          type="submit"
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

export default Payments;
