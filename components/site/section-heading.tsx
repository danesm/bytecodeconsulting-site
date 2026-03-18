type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-medium uppercase tracking-[0.34em] text-cyan-300">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy mt-5">{copy}</p>
    </div>
  );
}
