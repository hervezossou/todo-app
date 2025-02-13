import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import supabase from "../services/supabase";
import IconButton from "../components/atoms/IconButton";
import { LuTrash2, LuCheck } from "react-icons/lu";
import { MdEdit } from "react-icons/md";

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
            <div className="flex gap-4">
            <IconButton
                icon={<MdEdit />}
                ariaLabel="Edit Task"
                variant="edit"
                size="large"
                onClick={() => console.log("Edit clicked")}
            />
            <IconButton
                icon={<LuTrash2 />}
                ariaLabel="Delete Task"
                variant="delete"
                size="large"
                onClick={() => console.log("Delete clicked")}
                isDisabled={false}
            />
            <IconButton
                icon={<LuCheck />}
                ariaLabel="Mark as Done"
                variant="complete"
                size="large"
                onClick={() => console.log("Task completed")}
            />
        </div>
        </main>
    )
}