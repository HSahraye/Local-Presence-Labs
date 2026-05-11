const steps = ["Audit", "Plan", "Build", "Launch", "Optimize"];

export function ProcessSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li
          key={step}
          className="rounded-2xl border border-[#3B82F6]/20 bg-white p-5 text-center shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
            Step {index + 1}
          </p>
          <p className="mt-2 text-lg font-semibold text-[#0F172A]">{step}</p>
        </li>
      ))}
    </ol>
  );
}
