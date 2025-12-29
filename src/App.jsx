import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { useEffect } from "react"; 
import Home from "./pages/Home"; 
import Emergency from "./pages/Emergency"; 
import Decision from "./pages/Decision"; 
import { anonymousLogin } from "./firebase"; 
function App() { 
  // ✅ useEffect MUST be BEFORE return 
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
        <Route path="/" element={<Home />} /> 
        <Route path="/emergency" element={<Emergency />} /> 
        <Route path="/decision" element={<Decision />} /> 
        </Routes> 
        </BrowserRouter> 
    ); 
  } 
  
  export default App;