import { useEffect } from "react";
import supabase from "./services/supabase";

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
    <section className="flex h-screen items-center justify-center bg-amber-50 p-4">
      <h1 className="text-2xl">Hello Supabase</h1>
    </section>
  );
}
