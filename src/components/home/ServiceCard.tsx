interface CardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: CardProps) => {
  return (
    <div className="bg-[#e9f0ef] dark:bg-slate-800 rounded-3xl p-8 transition hover:shadow-lg">
      <h4 className="text-xl font-bold mb-3 tracking-tight">
        {title}
      </h4>

      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
export default ServiceCard;