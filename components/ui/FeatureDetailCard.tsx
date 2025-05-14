import Image from "next/image";

interface FeatureDetailCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureDetailCard = ({ icon, title, description, className = "" }: FeatureDetailCardProps) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100">
            <Image src={icon} alt={title} width={24} height={24} className="text-indigo-600" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetailCard; 