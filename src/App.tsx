import { useEffect } from "react";
import supabase from "./services/supabase";

export default function App() {
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase.from('tasks').select('*');
      if(error) {
        console.error("Erreur Supabase", error);
      } else {
        console.log("Tasks", data);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <div className="mx-auto bg-blue-500 p-4">
        <h1 className="font-sans text-2xl text-gray-800 font-bold">Hello Supabase</h1>
        <p className="text-lg text-gray-50">Connexion to Supabase</p>
      </div>
      <div className="mx-auto bg-yellow-400 p-4">
        <h3 className="font-sans text-lg text-gray-600 font-bold">React TypeScript App</h3>
        <p className="text-lg text-gray-50">World</p>
      </div>
    </>
  );
}
