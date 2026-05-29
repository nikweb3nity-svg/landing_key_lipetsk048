import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Icon, type IconName } from "@/components/Icon";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";
import { company, districts, helpCases, prices, steps, trustPoints } from "@/data/site";

const caseIcons: IconName[] = ["home", "key", "wrench", "lock", "car", "shield"];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="py-14 md:py-20" id="cases">
        <div className="section-shell">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Услуги"
              title="Какие замки открываем"
              text="Коротко опишите проблему — мастер сразу скажет ориентир по цене и времени приезда."
            />
            <ButtonLink href="#cost" icon="calculator" variant="secondary" className="rounded-xl">
              Рассчитать стоимость
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {helpCases.map((item, index) => (
              <article
                className="group overflow-hidden rounded-[24px] border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-service"
                key={item.title}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-service-alt">
                  <img
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-graphite/0 transition duration-300 group-hover:bg-graphite/25" />
                  <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/92 text-service-blueText shadow-sm backdrop-blur">
                    <Icon className="h-5 w-5" name={caseIcons[index]} />
                  </div>
                  <span className="absolute bottom-4 right-4 rounded-full bg-white/92 px-3 py-1 text-sm font-extrabold text-graphite shadow-sm backdrop-blur">
                    {item.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-graphite">{item.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{item.text}</p>
                  <a
                    className="mt-4 inline-flex items-center gap-2 font-bold text-service-blue transition group-hover:translate-x-1 group-hover:text-service-blueHover"
                    href="#cost"
                  >
                    Узнать точнее
                    <Icon className="h-4 w-4" name="arrow" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20" id="prices">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[28px] bg-service-alt p-6 md:p-8">
            <SectionHeader
              eyebrow="Цена до начала работ"
              title="Честные ориентиры без лишних обещаний"
              text="Конкуренты часто ставят слишком низкую цену «от». Мы показываем понятный старт и подтверждаем итоговую стоимость до работы."
            />
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-bold text-amber-900">Важно</p>
              <p className="mt-2 leading-7 text-amber-900/85">
                Итоговая стоимость зависит от типа замка, сложности работы и необходимости замены деталей.
                Мастер озвучит цену до начала работ.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-line bg-white shadow-service">
            {prices.map((item) => (
              <div className="grid gap-1 border-b border-line p-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center" key={item.service}>
                <div>
                  <p className="text-lg font-bold text-graphite">{item.service}</p>
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                </div>
                <p className="text-2xl font-extrabold text-service-blueText">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20" id="trust">
        <div className="section-shell">
          <SectionHeader
            align="center"
            eyebrow="Почему вызывают нас"
            title="Главное для доверия — безопасность и понятная цена"
            text="Ниша чувствительная: мы не начинаем вскрытие без подтверждения доступа и согласования стоимости."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => (
              <article className="rounded-[24px] border border-line bg-white p-6 shadow-sm" key={point.title}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-trust">
                  <Icon name="check" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-graphite">{point.title}</h3>
                <p className="mt-3 leading-7 text-muted">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-service-alt py-14 md:py-20" id="process">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Как проходит вызов"
              title="Три шага без лишних разговоров"
              text="Пользователь в аварийной ситуации не хочет читать длинные тексты. Ему нужно понять цену, время и безопасность."
            />
            <ButtonLink href={company.primaryPhone.href} icon="phone" className="rounded-xl">
              Позвонить сейчас
            </ButtonLink>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article className="rounded-[24px] bg-white p-5 shadow-sm" key={step.title}>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-service-blue text-lg font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-graphite">{step.title}</h3>
                <p className="mt-2 leading-7 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20" id="districts">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow="Липецк"
            title="Выезжаем по городу и ближайшим районам"
            text="Назовите адрес — скажем реальное время приезда без обещаний «через 5 минут»."
          />
          <div className="flex flex-wrap gap-2">
            {districts.map((district) => (
              <span className="rounded-full border border-line bg-slate-50 px-4 py-2 text-sm font-bold text-graphite" key={district}>
                {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20" id="cost-section">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[28px] bg-graphite p-6 text-white md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-200">Заявка</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Не можете открыть дверь? Мастер выедет сейчас
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Позвоните или оставьте номер. Уточним стоимость и время приезда за 1 минуту.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-5 text-graphite">
              <p className="text-sm font-semibold text-muted">Телефон для срочного вызова</p>
              <a className="mt-1 block text-3xl font-extrabold text-service-blue" href={company.primaryPhone.href}>
                {company.primaryPhone.label}
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="bg-white py-14 md:py-20" id="faq">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Коротко о важном"
            text="Оставили только вопросы, которые реально влияют на решение вызвать мастера."
          />
          <FAQ />
        </div>
      </section>
    </main>
  );
}
