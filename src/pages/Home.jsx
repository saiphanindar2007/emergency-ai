import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        AI Emergency Assistant
      </h1>

      <p className="text-gray-600 text-center max-w-md mt-4">
        Get clear, AI-driven emergency decisions in the first critical moments —
        when panic makes thinking difficult.
      </p>

      <button
        onClick={() => navigate("/emergency")}
        className="px-8 py-4 bg-red-600 text-white text-xl rounded-lg hover:bg-red-700"
      >
        PANIC
      </button>

      <p className="text-xs text-gray-400 text-center mt-6">
        Designed for speed, clarity, and responsible AI decision-making.
      </p>
    </div>
  );
}
