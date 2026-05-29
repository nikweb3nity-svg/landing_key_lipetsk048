"use client";

import { useMemo, useState } from "react";
import { company } from "@/data/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "./ButtonLink";
import { Icon, type IconName } from "./Icon";

type ServiceOption = {
  id: string;
  title: string;
  priceFrom: number;
  icon: IconName;
  note: string;
};

type UrgencyOption = {
  id: string;
  title: string;
  arrival: string;
  note: string;
};

const services: ServiceOption[] = [
  {
    id: "door",
    title: "Входная дверь",
    priceFrom: 900,
    icon: "home",
    note: "Квартира, дом, офис. Сначала пробуем открыть без повреждений."
  },
  {
    id: "car",
    title: "Автомобиль",
    priceFrom: 1200,
    icon: "car",
    note: "Открываем без разбития стекла и грубой силы."
  },
  {
    id: "broken-key",
    title: "Сломался ключ",
    priceFrom: 800,
    icon: "key",
    note: "Извлекаем обломок и проверяем работу механизма."
  },
  {
    id: "cylinder",
    title: "Замена личинки",
    priceFrom: 800,
    icon: "wrench",
    note: "Подберем личинку после вскрытия или планово."
  },
  {
    id: "jammed",
    title: "Замок заклинил",
    priceFrom: 900,
    icon: "lock",
    note: "Оценим механизм и подскажем, нужен ли ремонт или замена."
  },
  {
    id: "safe-garage",
    title: "Сейф / гараж",
    priceFrom: 2000,
    icon: "safe",
    note: "Работаем после подтверждения права доступа."
  }
];

const urgencies: UrgencyOption[] = [
  {
    id: "now",
    title: "Сейчас",
    arrival: "от 15 минут",
    note: "Подходит для захлопнутой двери, авто или срочного вскрытия."
  },
  {
    id: "today",
    title: "Сегодня",
    arrival: "30-60 минут",
    note: "Удобно, если ситуация терпит, но нужно решить в этот же день."
  },
  {
    id: "night",
    title: "Ночью",
    arrival: "по адресу и району",
    note: "Работаем 24/7. Ночной выезд лучше уточнить по телефону."
  },
  {
    id: "planned",
    title: "Планово",
    arrival: "по договоренности",
    note: "Для замены личинки, замка или спокойного осмотра."
  }
];

const currency = new Intl.NumberFormat("ru-RU");

export function CostCalculator() {
  const [serviceId, setServiceId] = useState(services[0].id);
  const [urgencyId, setUrgencyId] = useState(urgencies[0].id);

  const selectedService = useMemo(
    () => services.find((service) => service.id === serviceId) ?? services[0],
    [serviceId]
  );
  const selectedUrgency = useMemo(
    () => urgencies.find((urgency) => urgency.id === urgencyId) ?? urgencies[0],
    [urgencyId]
  );

  return (
    <section className="rounded-[28px] border border-line bg-white p-5 shadow-service md:p-7" id="cost">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-service-blueText">
          Калькулятор вызова
        </p>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-graphite">
          Выберите услугу и срочность
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          Калькулятор покажет ориентир по цене и времени. Чтобы вызвать мастера, просто позвоните по кнопке ниже.
        </p>
      </div>

      <div className="grid gap-5">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-service-blue text-sm font-extrabold text-white">
              1
            </span>
            <p className="font-bold text-graphite">Что нужно открыть?</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {services.map((service) => {
              const active = service.id === serviceId;

              return (
                <button
                  className={cn(
                    "focus-ring group min-h-[76px] rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5",
                    active
                      ? "border-service-blue bg-blue-50 shadow-sm"
                      : "border-line bg-slate-50 hover:border-blue-200 hover:bg-white"
                  )}
                  key={service.id}
                  onClick={() => setServiceId(service.id)}
                  type="button"
                >
                  <span className="flex items-start gap-3">
                    <span
                      className={cn(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-xl transition",
                        active ? "bg-service-blue text-white" : "bg-white text-service-blueText group-hover:bg-blue-50"
                      )}
                    >
                      <Icon className="h-5 w-5" name={service.icon} />
                    </span>
                    <span>
                      <span className="block font-bold text-graphite">{service.title}</span>
                      <span className="mt-1 block text-sm font-semibold text-service-blueText">
                        от {currency.format(service.priceFrom)} ₽
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-service-blue text-sm font-extrabold text-white">
              2
            </span>
            <p className="font-bold text-graphite">Когда нужен мастер?</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-4">
            {urgencies.map((urgency) => {
              const active = urgency.id === urgencyId;

              return (
                <button
                  className={cn(
                    "focus-ring rounded-2xl border px-3 py-4 text-center transition duration-200 hover:-translate-y-0.5",
                    active
                      ? "border-service-blue bg-service-blue text-white shadow-sm"
                      : "border-line bg-white text-graphite hover:border-blue-200 hover:bg-service-alt"
                  )}
                  key={urgency.id}
                  onClick={() => setUrgencyId(urgency.id)}
                  type="button"
                >
                  <span className="block text-sm font-extrabold">{urgency.title}</span>
                  <span className={cn("mt-1 block text-xs font-semibold", active ? "text-blue-100" : "text-muted")}>
                    {urgency.arrival}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-service-blueText">
                Предварительный расчет
              </p>
              <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-4xl font-extrabold leading-none text-graphite">
                  от {currency.format(selectedService.priceFrom)} ₽
                </span>
                <span className="pb-1 text-sm font-bold text-trust">выезд {selectedUrgency.arrival}</span>
              </div>
              <p className="mt-4 leading-7 text-muted">{selectedService.note}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{selectedUrgency.note}</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm md:w-56">
              <p className="text-sm font-bold text-graphite">Вы выбрали</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {selectedService.title}, {selectedUrgency.title.toLowerCase()}
              </p>
            </div>
          </div>

          <div className="border-t border-blue-100 bg-white/70 p-5 pb-24 md:pb-5">
            <p className="text-sm leading-6 text-muted">
              Итоговая цена зависит от типа замка, сложности и деталей. Мастер уточнит стоимость по телефону и согласует
              ее до начала работы.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ButtonLink href={company.primaryPhone.href} icon="phone" className="rounded-xl">
                Позвонить мастеру
              </ButtonLink>
              <ButtonLink href={company.cityPhone.href} icon="phone" variant="secondary" className="rounded-xl">
                Городской номер
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
