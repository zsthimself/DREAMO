import StatItem from "../ui/StatItem";

const StatisticsSection = () => {
  const stats = [
    {
      value: "1.6B",
      label: "Parameters in the Nari Labs Dia Model",
    },
    {
      value: "40+",
      label: "Tokens Generated Per Second by Nari Labs",
    },
    {
      value: "100%",
      label: "Nari Labs Open-Source Under Apache 2.0",
    },
    {
      value: "0",
      label: "External Funding Required by Nari Labs",
    },
  ];

  return (
    <section className="bg-indigo-600 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Nari Labs by the Numbers
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