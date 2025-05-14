import { ReactNode } from "react";
import Image from "next/image";

interface StepCardProps {
  icon: string;
  title: string;
  description: string;
  stepNumber?: number;
  className?: string;
}

const StepCard = ({ icon, title, description, stepNumber, className = "" }: StepCardProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex justify-center mb-4">
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-indigo-100">
          <Image src={icon} alt={title} width={28} height={28} className="text-indigo-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default StepCard; 