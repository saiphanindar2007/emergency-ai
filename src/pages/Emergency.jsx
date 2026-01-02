import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { saveEmergency } from "../firebase";
import { auth, analytics } from "../firebase";
import { logEvent } from "firebase/analytics";
import { translations } from "../i18n/translations";

export default function Emergency({ language }) {
  const navigate = useNavigate();
  const t = (key) => translations[language][key];

  const [type, setType] = useState("");
  const [symptom, setSymptom] = useState("");
  const [listening, setListening] = useState(false);
  const [voiceError, setVoiceError] = useState("");
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [fromVoice, setFromVoice] = useState(false);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      setVoiceSupported(true);
    }
  }, []);

  // Auto navigate ONLY for voice input
  useEffect(() => {
    if (fromVoice && type && symptom && !listening) {
      navigate("/decision", { state: { type, symptom } });
      setFromVoice(false);
    }
  }, [fromVoice, type, symptom, listening, navigate]);

  const startVoiceInput = () => {
    setFromVoice(true);

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    setListening(true);
    setVoiceError("");

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      setListening(false);

      const map = [
        ["unconscious", "Accident", "Unconscious"],
        ["bleeding", "Accident", "Heavy Bleeding"],
        ["fall", "Accident", "Fall"],
        ["fracture", "Accident", "Fracture"],
        ["injury", "Accident", "Minor Injury"],
        ["breathing", "Medical", "Breathing Difficulty"],
        ["severe", "Medical", "Severe Pain"],
        ["chest", "Medical", "Chest Pain"],
        ["panic", "Medical", "Panic Attack"],
        ["seizure", "Medical", "Seizure"],
        ["burns", "Fire", "Burns"],
        ["smoke", "Fire", "Smoke Inhalation"],
        ["collapsed", "Other", "Person Collapsed"],
        ["distress", "Other", "Severe Distress"],
        ["unknown", "Other", "Unknown Emergency"],
      ];

      const match = map.find(([k]) => transcript.includes(k));
      if (match) {
        setType(match[1]);
        setSymptom(match[2]);
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

  const symptomOptions = {
    Accident: [
      "Unconscious",
      "Heavy Bleeding",
      "Fall",
      "Fracture",
      "Minor Injury",
    ],
    Medical: [
      "Breathing Difficulty",
      "Severe Pain",
      "Chest Pain",
      "Panic Attack",
      "Seizure",
    ],
    Fire: [
      "Burns",
      "Smoke Inhalation",
    ],
    Other: [
      "Person Collapsed",
      "Severe Distress",
      "Unknown Emergency",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        {t("emergency_details")}
      </h1>

      <p className="text-gray-700 mb-8 text-center max-w-md">
        {t("emergency_hint")}
      </p>

      <div className="w-full max-w-sm mb-4">
        <label className="block mb-2 font-medium">
          {t("emergency_type")}
        </label>
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setSymptom("");
          }}
          className="w-full p-3 border rounded-lg"
        >
          <option value="">{t("select_type")}</option>
          {["Accident", "Medical", "Fire", "Other"].map((v) => (
            <option key={v} value={v}>
              {t(v)}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-sm mb-6">
        <label className="block mb-2 font-medium">
          {t("symptoms")}
        </label>

        <select
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          className="w-full p-3 border rounded-lg"
          disabled={!type}
        >
          <option value="">{t("select_symptom")}</option>

          {type && symptomOptions[type] && (
            symptomOptions[type].map((sym) => (
              <option key={sym} value={sym}>
                {t(sym)}
              </option>
            ))
          )}
        </select>
      </div>

      {voiceSupported && (
        <div className="text-center mb-6">
          <button
            onClick={startVoiceInput}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            {listening ? `🎤 ${t("listening")}` : `🎤 ${t("voice_input")}`}
          </button>
          <p className="text-xs text-gray-500 mt-2">{t("voice_help")}</p>
          {voiceError && (
            <p className="text-xs text-red-500 mt-1">{voiceError}</p>
          )}
        </div>
      )}

      <button
        onClick={async () => {
          if (!type || !symptom) return alert("Please select details");
          await saveEmergency({
            uid: auth.currentUser.uid,
            type,
            symptom,
          });
          logEvent(analytics, "emergency_started", { type });
          navigate("/decision", { state: { type, symptom } });
        }}
        className="px-8 py-4 bg-red-600 text-white text-lg rounded-lg"
      >
        {t("get_decision")}
      </button>
    </div>
  );
}
