import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { saveEmergency } from "../firebase";
import { auth } from "../firebase";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

export default function Emergency() {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [symptom, setSymptom] = useState("");
  const [listening, setListening] = useState(false);
  const [voiceError, setVoiceError] = useState("");
  const [voiceSupported, setVoiceSupported] = useState(false);

  const startVoiceInput = () => {
    useEffect(() => {
      if ("webkitSpeechRecognition" in window) {
        setVoiceSupported(true);
      }
    }, []);

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    setListening(true);
    setVoiceError("");

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      setListening(false);

      if (transcript.includes("unconscious")) {
        setType("Accident");
        setSymptom("Unconscious");
      } else if (transcript.includes("bleeding")) {
        setType("Accident");
        setSymptom("Heavy Bleeding");
      } else if (transcript.includes("fall")) {
        setType("Accident");
        setSymptom("Fall");
      } else if (transcript.includes("fracture")) {
        setType("Accident");
        setSymptom("Fracture");
      } else if (transcript.includes("injury")) {
        setType("Accident");
        setSymptom("Minor Injury");
      } else if (transcript.includes("breathing")) {
        setType("Medical");
        setSymptom("Breathing Difficulty");
      } else if (transcript.includes("severe")) {
        setType("Medical");
        setSymptom("Severe Pain");
      } else if (transcript.includes("chest")) {
        setType("Medical");
        setSymptom("Chest Pain");
      } else if (transcript.includes("panic")) {
        setType("Medical");
        setSymptom("Panic Attack");
      } else if (transcript.includes("seizure")) {
        setType("Medical");
        setSymptom("Seizure");
      } else if (transcript.includes("burns")) {
        setType("Fire");
        setSymptom("Burns");
      } else if (transcript.includes("smoke")) {
        setType("Fire");
        setSymptom("Smoke Inhalation");
      } else if (transcript.includes("collapsed")) {
        setType("Other");
        setSymptom("Person Collapsed");
      } else if (transcript.includes("distress")) {
        setType("Other");
        setSymptom("Severe Distress");
      } else if (transcript.includes("unknown")) {
        setType("Other");
        setSymptom("Unknown Emergency");
      } else {
        setVoiceError("Could not understand. Please select manually.");
      }
    };
    recognition.onerror = () => {
      setListening(false);
      setVoiceError("Voice recognition failed. Try again.");
    };
    recognition.start();
  };

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
            <option value="Fall">Fall</option>
            <option value="Fracture">Fracture</option>
            <option value="Minor Injury">Minor Injury</option>
          </>
        )}

        {type === "Medical" && (
          <>
            <option value="Breathing Difficulty">Breathing Difficulty</option>
            <option value="Severe Pain">Severe Pain</option>
            <option value="Chest Pain">Chest Pain</option>
            <option value="Panic Attack">Panic Attack</option>
            <option value="Seizure">Seizure</option>
          </>
        )}

        {type === "Fire" && (
          <>
            <option value="Burns">Burns</option>
            <option value="Smoke Inhalation">Smoke Inhalation</option>
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

      {voiceSupported && (
        <div className="mt-4 text-center">
          <button
            onClick={startVoiceInput}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {listening ? "🎤 Listening..." : "🎤 Use Voice Input"}
          </button>
          {voiceError && (
            <p className="text-xs text-red-500 mt-2">{voiceError}</p>
          )}
          <p className="text-[10px] text-gray-500 mt-1">
            Optional voice input for faster emergency reporting
          </p>
        </div>
      )}

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
        logEvent(analytics, "emergency_started", {
          type,
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
