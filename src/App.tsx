import { useEffect } from "react";
import supabase from "./services/supabase";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase.from("tasks").select("*");
      if (error) {
        console.error("Supabase error:", error);
      } else {
        console.log("Tasks", data);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
