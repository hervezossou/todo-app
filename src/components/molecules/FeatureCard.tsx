import { ElementType } from "react";

interface FeatureCardProps {
    icon: ElementType;
    title: string;
    description: string;
}

export default function FeatureCard ({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="flex flex-col items-center p-6 bg-neutral-900 shadow-lg rounded-lg w-64">
            <Icon className="text-4xl text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold text-neutral-50">{title}</h3>
            <p className="text-neutral-400 mt-2 text-center">{description}</p>
        </div>
    );
};