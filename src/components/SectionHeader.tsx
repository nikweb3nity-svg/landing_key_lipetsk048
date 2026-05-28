import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, text, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-9 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-service-blueText">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-graphite md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-muted">{text}</p> : null}
    </div>
  );
}
