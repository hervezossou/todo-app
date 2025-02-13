import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import supabase from "../services/supabase";

export default function Dashboard() {
    const { logout } = useAuth()

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
        <main className="bg-neutral-800 min-h-screen p-6">
            <h1 className="text-3xl text-white font-bold">Welcome to your dashboard</h1>
            <button className="text-red-600 hover:underline hover:cursor-pointer" onClick={logout}>
                Log out
            </button>
        </main>
    )
}