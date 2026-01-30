const LoopBorder = () => {
  return (
    <div className="relative w-full overflow-hidden dark:bg-slate-800 py-10 ">
      <div className="flex w-max animate-marquee gap-16">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="text-lg md:text-xl font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 whitespace-nowrap"
          >
            AI • AUTOMATION • BLOCKCHAIN • SOFTWARE • DATA • CLOUD
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoopBorder;
