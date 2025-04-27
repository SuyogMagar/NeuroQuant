
interface StatsCardProps {
  title: string;
  value: string;
  description: string;
}

const StatsCard = ({ title, value, description }: StatsCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-gold/50 transition-all duration-300">
      <h3 className="text-lg font-medium text-white/70">{title}</h3>
      <p className="text-3xl font-bold text-gold mt-2">{value}</p>
      <p className="text-sm text-white/50 mt-2">{description}</p>
    </div>
  );
};

export default StatsCard;
