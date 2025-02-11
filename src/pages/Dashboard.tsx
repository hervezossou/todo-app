import { useAuth } from "../hooks/useAuth"

export default function Dashboard() {
    const { logout } = useAuth()

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold">Welcome to your dashboard</h1>
            <button className="text-red-600" onClick={logout}>
                Log out
            </button>
        </main>
    )
}