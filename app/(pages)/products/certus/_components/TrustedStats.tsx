const stats = [
  { value: "16+", label: "Years", caption: "Industry Experience" },
  { value: "50+", label: "Enterprises", caption: "Global Clients" },
  { value: "50,000+", label: "Users", caption: "Active Daily" },
];

export default function TrustedStats() {
  return (
    <section className="lg:border-b bg-white">
      <div className="flex flex-col sm:flex-col items-center justify-between gap-8 py-8 lg:flex-row md:gap-12 max-w-7xl mx-auto px-4 lg:px-0">
        <h4 className="text-3xl sm:text-4xl text-center text-foreground md:text-left">
          Trusted by Finance <span className="font-bold text-primary">Teams Globally</span>
        </h4>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:justify-end">
          {stats.map(({ value, label, caption }, i) => (
            <div key={label} className="flex items-center gap-8 sm:gap-10">
              {i > 0 && <span className="hidden h-10 w-px bg-border sm:block" aria-hidden="true" />}
              <div className="flex flex-col items-start">
                <p className="flex items-baseline gap-1.5 whitespace-nowrap">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">{value}</span>
                  <span className="text-lg font-medium text-foreground">{label}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
