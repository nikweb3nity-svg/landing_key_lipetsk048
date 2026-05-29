import { company, navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { Icon } from "./Icon";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/92 backdrop-blur-xl">
      <div className="section-shell flex h-[72px] items-center justify-between gap-4">
        <a className="focus-ring flex items-center gap-3 rounded-2xl" href="#top" aria-label="На главную">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-service-blue text-white">
            <Icon name="key" className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-graphite">{company.name}</span>
            <span className="block text-xs font-semibold text-muted">Служба вскрытия замков</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-xl px-3 py-2 text-sm font-semibold text-muted transition hover:bg-service-alt hover:text-service-blue"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="text-right">
            <a className="block text-base font-bold text-graphite hover:text-service-blue" href={company.primaryPhone.href}>
              {company.primaryPhone.label}
            </a>
            <a className="block text-sm font-semibold text-muted hover:text-service-blue" href={company.cityPhone.href}>
              {company.cityPhone.label}
            </a>
          </div>
          <ButtonLink href={company.primaryPhone.href} icon="phone" className="min-h-11 rounded-xl px-4">
            Позвонить
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            aria-label="Позвонить мастеру"
            className="focus-ring grid h-11 w-11 place-items-center rounded-xl bg-service-blue text-white md:hidden"
            href={company.primaryPhone.href}
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
