import { useState } from "react";
import { motion } from "motion/react";
//import { useAuth } from "../hooks/useAuth";
//import supabase from "../services/supabase";
import TaskActions from "../components/molecules/TaskActions";
import DropdownMenu from "../components/molecules/DropdownMenu";

export default function Dashboard() {
    //const { logout } = useAuth()
    const [showActions, setShowActions] = useState(false)

    /*useEffect(() => {
        const fetchTasks = async () => {
          const { data, error } = await supabase.from("tasks").select("*");
          if (error) {
            console.error("Supabase error:", error);
          } else {
            console.log("Tasks", data);
          }
        };
    
        fetchTasks();
}, []);*/

    return (
        <main className="bg-neutral-800 min-h-screen p-6">
            <h1 className="text-3xl text-white font-bold">Welcome to your dashboard</h1>
            <button className="text-red-600 hover:underline hover:cursor-pointer" onClick={() => console.log("You logged out!")}>
                Log out
            </button>
            <div
              className="relative w-full p-4 border border-neutral-300 rounded-md"
              onMouseEnter={() => setShowActions(true)}
              onMouseLeave={() => setShowActions(false)}
            >
              <p>Task Description</p>
              {showActions && (
                <motion.div
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 10}}
                  transition={{duration: 0.3}}
                  className="absolute top-0 right-0 mt-2"
                >
                  <TaskActions />
                </motion.div>
              )}
            </div>
            <DropdownMenu />
        </main>
    )
}