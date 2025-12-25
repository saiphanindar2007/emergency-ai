import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveEmergency } from "../firebase";
import { auth } from "../firebase";


export default function Emergency() {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [symptom, setSymptom] = useState("");

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
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setSymptom("");
          }}
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select type</option>
          <option value="Accident">Accident</option>
          <option value="Medical">Medical</option>
          <option value="Fire">Fire</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Symptoms */}
      <div className="w-full max-w-sm mb-6">
        <label className="block mb-2 font-medium">
          Symptoms (select one)
        </label>

        <select
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          className="w-full p-3 border rounded-lg"
        >
        <option value="">Select symptom</option>

        {type === "Accident" && (
          <>
            <option value="Unconscious">Unconscious</option>
            <option value="Heavy Bleeding">Heavy Bleeding</option>
            <option value="Fracture">Fracture</option>
            <option value="Minor Injury">Minor Injury</option>
          </>
        )}

        {type === "Medical" && (
          <>
            <option value="Breathing Difficulty">
              Breathing Difficulty
            </option>
            <option value="Chest Pain">Chest Pain</option>
          </>
        )}

        {type === "Fire" && (
          <>
            <option value="Burns">Burns</option>
            <option value="Smoke Inhalation">
              Smoke Inhalation
            </option>
          </>
        )}

        {type === "Other" && (
          <>
            <option value="Person Collapsed">Person Collapsed</option>
            <option value="Severe Distress">Severe Distress</option>
            <option value="Unknown Emergency">Unknown Emergency</option>
          </>
        )}

        </select>
      </div>

    {/* Continue Button */}
    <button
      onClick={async () => {
        if (!type || !symptom) {
          alert("Please select emergency details");
          return;
        }
        await saveEmergency({
        uid: auth.currentUser.uid,
        type,
        symptom,
        });
        navigate("/decision", {
          state: {
            type,
            symptom,
          },
        });
      }}
      className="px-8 py-4 bg-red-600 text-white text-lg rounded-lg hover:bg-red-700"
    >
      GET AI DECISION
    </button>
    </div>
  );
}
