interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

const StatItem = ({ value, label, className = "" }: StatItemProps) => {
  return (
    <div className={`bg-indigo-700 rounded-lg p-8 flex flex-col items-center text-center ${className}`}>
      <div className="text-5xl font-bold text-white mb-3">{value}</div>
      <p className="text-sm text-indigo-200">{label}</p>
    </div>
  );
};

export default StatItem;
