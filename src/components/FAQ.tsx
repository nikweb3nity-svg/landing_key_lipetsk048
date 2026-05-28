import { faqs } from "@/data/site";

export function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((item) => (
        <details
          className="group rounded-[22px] border border-line bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-service"
          key={item.question}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-graphite">
            <span>{item.question}</span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-service-blueSoft text-service-blueText transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-base leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
