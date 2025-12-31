import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmergencyGuidance } from "../services/aiEngine";
import CalmAnimation from "../components/CalmAnimation";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";
import { translations } from "../i18n/translations";

const severityStyles = {
  CRITICAL: "bg-red-100 text-red-700 border-red-400",
  HIGH: "bg-orange-100 text-orange-700 border-orange-400",
  LOW: "bg-green-100 text-green-700 border-green-400",
  UNKNOWN: "bg-gray-100 text-gray-700 border-gray-400",
};

const severityUI = {
  CRITICAL: {
    pageBg: "bg-red-50",
    border: "border-red-500",
    title: "text-red-700",
    pulse: "animate-pulse",
  },
  HIGH: {
    pageBg: "bg-orange-50",
    border: "border-orange-400",
    title: "text-orange-700",
    pulse: "",
  },
  LOW: {
    pageBg: "bg-green-50",
    border: "border-green-400",
    title: "text-green-700",
    pulse: "",
  },
  UNKNOWN: {
    pageBg: "bg-gray-100",
    border: "border-gray-300",
    title: "text-gray-700",
    pulse: "",
  },
};

export default function Decision({ language }) {
  const t = (key) => translations[language][key];
  const location = useLocation();
  const { type, symptom } = location.state || {};

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!type || !symptom) {
      setResponse(null);
      setLoading(false);
      return;
    }

    const decision = getEmergencyGuidance(type, symptom);
    setResponse(decision);
    logEvent(analytics, "ai_decision_generated", {
      severity: decision.severity,
    });
    setLoading(false);
  }, [type, symptom]);

  return (
    <div
      className={`min-h-screen ${
        response
          ? severityUI[response.severity]?.pageBg
          : "bg-gray-100"
      } flex items-center justify-center px-4`}
    >
      <div
        className={`bg-white shadow-xl rounded-xl p-6 max-w-xl w-full border-2 ${
          response
            ? severityUI[response.severity]?.border
            : "border-gray-300"
        }`}
      >
        <h1
          className={`text-3xl font-bold mb-4 text-center ${
            response
              ? severityUI[response.severity]?.title
              : "text-gray-700"
          } ${
              response?.severity === "CRITICAL"
                ? severityUI.CRITICAL.pulse
                : ""
            }`}
        >
          {t("decision_title")}
        </h1>

        {loading ? (
          <p className="text-center text-gray-600">
            {t("analyzing")}
          </p>
        ) : response ? (
          <>
            {/* Emergency Summary */}
            {/* Calm Animation (only for non-critical cases) */}
            {response.severity !== "CRITICAL" && (
              <CalmAnimation />
            )}
            <div className="mb-4 text-sm text-gray-600 text-center">
                {t("emergency_type_label")}{": "}
              <span className="font-semibold">{t(type)}</span>{" "} 
                | {t("symptom_label")}{": "}
              <span className="font-semibold">{t(symptom)}</span>
            </div>

            {/* Severity Badge */}
            <div
              className={`mb-4 px-4 py-2 border rounded-lg text-center font-semibold ${
                severityStyles[response.severity] || severityStyles.UNKNOWN
              }`}
            >
              {t("severity")}: {response.severity}
            </div>

            <p className="text-center text-sm font-semibold uppercase tracking-wide mt-2">
              {response.severity === "CRITICAL" && t("immediate_action")}
              {response.severity === "HIGH" && t("urgent_attention")}
              {response.severity === "LOW" && t("guided_assistance")}
            </p>

            {/* AI Confidence */}
            <div className="mb-4 text-center">
              <span className="font-semibold">{t("ai_confidence")}:</span>{" "}
              {(response.confidence * 100).toFixed(0)}%
            </div>

            <p className="text-xs text-gray-500 text-center mt-2">
              Guidance is optimized to reduce confusion during high-stress situations.
            </p>

            <p className="text-xs text-center mt-1 font-medium">
              {response.confidence >= 0.9 && t("high_confidence")}
              {response.confidence >= 0.75 && response.confidence < 0.9 && t("moderate_confidence")}
              {response.confidence < 0.75 && t("low_confidence")}
            </p>

            {response.confidence < 0.75 && (
              <p className="mt-2 text-xs text-orange-600 text-center">
                The system is operating with limited confidence. Please prioritize professional emergency services.
              </p>
            )}

            <div className="mt-3 text-xs text-center text-green-600 font-medium">
              ✅ {t("logged")}
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-1">
              Logged at {new Date().toLocaleTimeString()}
            </p>

            {/* Actions */}
            <h3 className="font-semibold mb-2">{t("what_to_do")}:</h3>
            <ul className="list-disc ml-6 mb-4">
              {response.actions.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>

            {/* Do NOT */}
            {response.doNot && response.doNot.length > 0 && (
              <>
                <h3 className="font-semibold mb-2 text-red-500">
                  {t("do_not")}:
                </h3>
                <ul className="list-disc ml-6 mb-4">
                  {response.doNot.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Emergency Call CTA */}
            {response.callNow && response.confidence >= 0.75 && (
              <div className="mt-6 space-y-3">
                <a
                  href="tel:108"
                  onClick={() =>
                    logEvent(analytics, "emergency_call_triggered")
                  }
                  className="block text-center px-6 py-4 bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700"
                >
                  📞 {t("call_108")}
                </a>
                <a
                  href="tel:112"
                  onClick={() =>
                    logEvent(analytics, "emergency_call_triggered")
                  }
                  className="block text-center px-6 py-3 bg-gray-800 text-white text-md rounded-lg hover:bg-black"
                >
                  🚨 {t("call_112")}
                </a>
              </div>
            )}

            {/* Reasoning */}
            <div className="mt-6 border-t pt-4">
              <p className="text-xs font-semibold text-gray-600 mb-1">
                {t("why_decision")}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {response.reasoning}
              </p>
            </div>

            <p className="text-[10px] text-gray-400 mt-3 text-center">
              {t("disclaimer_decision")}
            </p>
          </>
        ) : (
          <p className="text-red-500 text-center">
            Missing emergency information.
          </p>
        )}
      </div>
    </div>
  );
}