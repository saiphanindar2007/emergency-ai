import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import Home from "./pages/Home"; 
import Emergency from "./pages/Emergency"; 
import Decision from "./pages/Decision"; 
import { anonymousLogin } from "./firebase"; 

function App() { 
  // ✅ useEffect MUST be BEFORE return 
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  // Persist language
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => { 
    anonymousLogin() 
      .then((userCredential) => { 
        console.log( 
          "Anonymous user logged in:", 
          userCredential.user.uid 
        ); 
      }) 
      .catch((error) => { 
        console.error("Anonymous auth error:", error); 
      }); 
  }, []); 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/emergency"
          element={<Emergency language={language} />}
        />
        <Route
          path="/decision"
          element={<Decision language={language} />}
        />
      </Routes>
    </BrowserRouter>
  );
} 
  
export default App;