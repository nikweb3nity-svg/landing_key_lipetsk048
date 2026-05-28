import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  description: "Согласие на обработку персональных данных для заявки на сайте Золотой Ключик."
};

export default function AgreementPage() {
  return (
    <main className="bg-service-surface py-14 md:py-20">
      <article className="section-shell max-w-4xl rounded-[28px] border border-line bg-white p-6 shadow-service md:p-10">
        <Link className="text-sm font-bold text-service-blue hover:text-service-blueHover" href="/">
          ← На главную
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-graphite md:text-4xl">
          Согласие на обработку персональных данных
        </h1>
        <div className="mt-7 grid gap-6 text-base leading-8 text-muted">
          <p>
            Отправляя форму на сайте {company.name}, пользователь подтверждает согласие на обработку
            персональных данных для получения консультации, расчета стоимости и организации выезда мастера.
          </p>
          <section>
            <h2 className="text-xl font-bold text-graphite">Состав данных</h2>
            <p className="mt-2">
              Обрабатываются имя, телефон, описание задачи, адрес или район, а также иная информация,
              которую пользователь добровольно указывает в форме.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-graphite">Действия с данными</h2>
            <p className="mt-2">
              Допускаются сбор, запись, систематизация, хранение, уточнение, использование, передача
              мастеру для выполнения заявки и удаление данных после достижения цели обработки.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-graphite">Отзыв согласия</h2>
            <p className="mt-2">
              Пользователь может отозвать согласие, обратившись по телефону{" "}
              <a className="font-bold text-service-blue" href={company.primaryPhone.href}>
                {company.primaryPhone.label}
              </a>
              . После отзыва данные перестают использоваться, кроме случаев, когда хранение требуется законом.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
