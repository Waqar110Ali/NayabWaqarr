const LoopBorder = () => {
  return (
    <div className="relative w-full overflow-hidden dark:bg-slate-800 py-6 sm:py-8 md:py-10">
      <div className="flex w-max animate-marquee gap-8 sm:gap-12 md:gap-16">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-slate-800 dark:text-slate-200 whitespace-nowrap"
          >
            AI • AUTOMATION • BLOCKCHAIN • SOFTWARE • DATA • CLOUD
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoopBorder;
