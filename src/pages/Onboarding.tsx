import { Link } from "react-router"
import FeatureCard from "../components/FeatureCard"
import { FiFilter, FiLayers, FiFlag } from "react-icons/fi"

export default function Onboarding() {
    return (
        <div className="mx-auto flex flex-col items-center justify-center min-h-screen gap-4 bg-neutral-800 p-6 text-center">
            <h1 className="text-2xl font-bold text-neutral-50 md:text-4xl lg:text-4xl">Manage your tasks efficiently</h1>
            <p className="text-neutral-400 text-sm mt-4 md:text-lg lg:text-xl">Filter, organize, and prioritize with ease.</p>
            <div className="mx-14 flex flex-wrap justify-between gap-6 space-x-6 mt-6">
                <FeatureCard 
                    icon={FiFilter} 
                    title="Filter" 
                    description="Easily find tasks by filtering them." 
                />
                <FeatureCard 
                    icon={FiLayers} 
                    title="Organize" 
                    description="Keep your tasks well-structured." 
                />
                <FeatureCard icon={FiFlag} title="Prioritize" description="Focus on what matters most." />
            </div>
            <Link 
                to="/register" 
                className="mt-6 w-36 p-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
            >
                Get Started
            </Link>
        </div>
    )
};