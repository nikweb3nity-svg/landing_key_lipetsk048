import { company, heroFacts } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="hero-samolet border-b border-line py-10 md:py-16" id="top">
      <div className="section-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="rounded-[28px] bg-white p-6 shadow-service md:p-9">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-service-blueSoft px-4 py-2 text-sm font-bold text-service-blueText">
            <Icon name="shield" className="h-4 w-4" />
            Липецк · выезд 24/7 · документы проверяем
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] text-graphite md:text-6xl">
            Вскрытие замков в Липецке без повреждений
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Мастер приедет от 15 минут. Открываем квартиры, дома, автомобили, гаражи и сейфы.
            Цена согласуется до начала работы.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={company.primaryPhone.href} icon="phone" className="rounded-xl sm:min-w-56">
              Позвонить мастеру
            </ButtonLink>
            <ButtonLink href="#cost" icon="calculator" variant="secondary" className="rounded-xl sm:min-w-56">
              Рассчитать стоимость
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroFacts.map((fact) => (
              <div className="rounded-2xl border border-line bg-slate-50 p-4" key={fact.label}>
                <p className="text-sm font-semibold text-muted">{fact.label}</p>
                <p className="mt-1 text-xl font-extrabold text-graphite">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[28px] bg-graphite p-6 text-white shadow-service md:p-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-200">Заказ вызова</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight">Мастер свободен для срочного выезда</h2>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-bold text-emerald-200">
              онлайн
            </span>
          </div>

          <div className="mt-7 grid gap-3">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">1. Назовите район</p>
              <p className="mt-1 font-bold">Скажем точное время приезда</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">2. Опишите проблему</p>
              <p className="mt-1 font-bold">Подскажем ориентир по цене</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">3. Согласуйте работу</p>
              <p className="mt-1 font-bold">Открываем аккуратно и законно</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-5 text-graphite">
            <p className="text-sm font-semibold text-muted">Позвонить напрямую</p>
            <a className="mt-1 block text-3xl font-extrabold hover:text-service-blue" href={company.primaryPhone.href}>
              {company.primaryPhone.label}
            </a>
            <a className="mt-2 block text-base font-bold text-muted hover:text-service-blue" href={company.cityPhone.href}>
              {company.cityPhone.label}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
