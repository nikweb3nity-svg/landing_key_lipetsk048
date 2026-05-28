import { company } from "@/data/site";
import { Icon } from "./Icon";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/94 px-4 py-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-service-blue px-4 py-3 text-sm font-bold text-white"
          href={company.primaryPhone.href}
        >
          <Icon name="phone" className="h-5 w-5" />
          Позвонить
        </a>
        <a
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-service-blue bg-white px-4 py-3 text-sm font-bold text-service-blue"
          href="#cost"
        >
          <Icon name="calculator" className="h-5 w-5" />
          Расчет
        </a>
      </div>
    </div>
  );
}
