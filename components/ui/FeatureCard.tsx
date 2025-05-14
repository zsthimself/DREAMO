import { ReactNode } from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className = "" }: FeatureCardProps) => {
  return (
    <div className={`flex flex-col bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all ${className}`}>
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
        <Image src={icon} alt={title} width={28} height={28} className="text-indigo-600" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard; 