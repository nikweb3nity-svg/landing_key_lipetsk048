"use client";

import { useEffect, useState } from "react";
import { company, navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-graphite transition hover:bg-service-alt"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="grid w-5 gap-1.5">
          <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 top-[72px] z-50 bg-graphite/35 backdrop-blur-sm lg:hidden" role="presentation">
          <div className="section-shell pt-3">
            <nav
              aria-label="Мобильная навигация"
              className="rounded-[24px] border border-line bg-white p-4 shadow-service"
            >
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    className="focus-ring rounded-xl px-4 py-3 text-base font-bold text-graphite transition hover:bg-service-alt hover:text-service-blue"
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-3 border-t border-line pt-4">
                <a className="rounded-xl bg-slate-50 p-4" href={company.primaryPhone.href}>
                  <span className="block text-sm font-semibold text-muted">Срочный звонок</span>
                  <span className="mt-1 block text-xl font-extrabold text-graphite">{company.primaryPhone.label}</span>
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <ButtonLink href={company.primaryPhone.href} icon="phone" className="rounded-xl px-3 text-sm">
                    Позвонить
                  </ButtonLink>
                  <ButtonLink
                    href="#cost"
                    icon="calculator"
                    variant="secondary"
                    className="rounded-xl px-3 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Расчет
                  </ButtonLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
