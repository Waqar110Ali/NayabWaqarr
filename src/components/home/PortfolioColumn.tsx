interface LinkItem {
  label: string;
  href: string; // ✅ MUST be href
}

interface PortfolioColumnProps {
  icon: string;
  title: string;
  items: LinkItem[];
}

const PortfolioColumn = ({ icon, title, items }: PortfolioColumnProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <img src={icon} alt={title} className="w-8 h-8" />
        <h4 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h4>
      </div>

      <ul className="space-y-2 text-sm">
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.href}
              onClick={(e) => e.preventDefault()}
              className="flex items-start gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <span>›</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioColumn;
