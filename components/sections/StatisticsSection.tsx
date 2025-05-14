import StatItem from "../ui/StatItem";

const StatisticsSection = () => {
  const stats = [
    {
      value: "4-in-1",
      label: "Unified Tasks in the DreamO Framework",
    },
    {
      value: "16GB+",
      label: "VRAM Support with Optimization Options",
    },
    {
      value: "100%",
      label: "DreamO Open-Source Under Apache 2.0",
    },
    {
      value: "12",
      label: "Steps for Fast Image Generation with Turbo Mode",
    },
  ];

  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          DreamO by the Numbers
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;