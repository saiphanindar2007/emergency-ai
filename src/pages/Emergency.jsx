import { useNavigate } from "react-router-dom";

export default function Emergency() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Emergency Details
      </h1>

      <p className="text-gray-700 mb-8 text-center max-w-md">
        Select what best describes the situation.
        The AI will decide what to do next.
      </p>

      {/* Emergency Type */}
      <div className="w-full max-w-sm mb-4">
        <label className="block mb-2 font-medium">
          Emergency Type
        </label>
        <select className="w-full p-3 border rounded-lg">
          <option>Accident</option>
          <option>Medical</option>
          <option>Fire</option>
          <option>Other</option>
        </select>
      </div>

      {/* Symptoms */}
      <div className="w-full max-w-sm mb-6">
        <label className="block mb-2 font-medium">
          Symptoms (select one)
        </label>
        <select className="w-full p-3 border rounded-lg">
          <option>Bleeding</option>
          <option>Unconscious</option>
          <option>Breathing Difficulty</option>
          <option>Severe Pain</option>
        </select>
      </div>

      {/* Continue Button */}
      <button
        onClick={() => navigate("/decision")}
        className="px-8 py-4 bg-red-600 text-white text-lg rounded-lg hover:bg-red-700"
      >
        GET AI DECISION
      </button>
    </div>
  );
}
