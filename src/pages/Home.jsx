import { useNavigate } from "react-router-dom";
import { translations } from "../i18n/translations";

export default function Home({ language, setLanguage }) {
  const navigate = useNavigate();

  // Translation helper
  const t = (key) => translations[language][key];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      
      {/* Language Selector */}
      <div className="mb-6">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="te">తెలుగు</option>
        </select>
      </div>

      {/* App Title */}
      <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
        {t("app_title")}
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-center max-w-md mt-4">
        {t("app_description")}
      </p>

      {/* Start Emergency Button */}
      <button
        onClick={() => navigate("/emergency")}
        className="px-8 py-4 bg-red-600 text-white text-xl rounded-lg hover:bg-red-700 mt-6"
      >
        {t("start_emergency")}
      </button>

      {/* Footer */}
      <p className="text-xs text-gray-400 text-center mt-6">
        {t("disclaimer")}
      </p>
    </div>
  );
}
