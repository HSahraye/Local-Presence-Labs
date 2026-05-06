type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1C768F]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#032539]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg text-[#334155] leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
