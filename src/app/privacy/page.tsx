import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности сайта Золотой Ключик в Липецке."
};

export default function PrivacyPage() {
  return (
    <main className="bg-service-surface py-14 md:py-20">
      <article className="section-shell max-w-4xl rounded-[28px] border border-line bg-white p-6 shadow-service md:p-10">
        <Link className="text-sm font-bold text-service-blue hover:text-service-blueHover" href="/">
          ← На главную
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-graphite md:text-4xl">Политика конфиденциальности</h1>
        <div className="mt-7 grid gap-6 text-base leading-8 text-muted">
          <p>
            Настоящая политика описывает, как сайт {company.name} обрабатывает данные пользователей,
            оставляющих заявку на расчет стоимости или связывающихся по телефону.
          </p>
          <section>
            <h2 className="text-xl font-bold text-graphite">Какие данные обрабатываются</h2>
            <p className="mt-2">
              Имя, номер телефона, описание проблемы, адрес или район, а также технические сведения,
              необходимые для корректной работы сайта и защиты от злоупотреблений.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-graphite">Цель обработки</h2>
            <p className="mt-2">
              Данные используются для связи с клиентом, уточнения стоимости, времени приезда мастера и
              выполнения заявки на вскрытие, ремонт или замену замка.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-graphite">Передача третьим лицам</h2>
            <p className="mt-2">
              Данные не продаются и не передаются третьим лицам, кроме случаев, необходимых для обработки
              заявки, соблюдения закона или подключения сервисов уведомлений по email, VK или Telegram.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-graphite">Срок хранения</h2>
            <p className="mt-2">
              Данные хранятся только столько, сколько необходимо для обработки обращения и выполнения
              связанных с ним обязательств.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-graphite">Контакты</h2>
            <p className="mt-2">
              По вопросам обработки данных можно обратиться по телефону{" "}
              <a className="font-bold text-service-blue" href={company.primaryPhone.href}>
                {company.primaryPhone.label}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
