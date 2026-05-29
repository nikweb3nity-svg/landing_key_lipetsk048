import Link from "next/link";
import { company } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-graphite pb-28 pt-10 text-white md:pb-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:items-start">
        <div>
          <Link
            className="focus-ring inline-flex max-w-[360px] rounded-[24px] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5"
            href="/#top"
            aria-label="На главную"
          >
            <img
              alt="Золотой Ключик — аварийное вскрытие замков"
              className="h-auto w-full"
              src="/images/brand/zolotoy-klyuchik-logo.png"
            />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Информация на сайте не является публичной офертой. Работы выполняются после подтверждения
            права доступа и согласования стоимости.
          </p>
        </div>

        <div className="grid gap-2 text-sm text-slate-300">
          <p className="font-bold text-white">Контакты</p>
          <a className="hover:text-white" href={company.primaryPhone.href}>
            {company.primaryPhone.label}
          </a>
          <a className="hover:text-white" href={company.cityPhone.href}>
            {company.cityPhone.label}
          </a>
          <p>Город: {company.city}</p>
          <p>Режим работы: {company.workingHours}</p>
        </div>

        <div className="grid gap-2 text-sm text-slate-300">
          <p className="font-bold text-white">Документы</p>
          <Link className="hover:text-white" href="/privacy">
            Политика конфиденциальности
          </Link>
          <Link className="hover:text-white" href="/agreement">
            Согласие на обработку персональных данных
          </Link>
        </div>
      </div>
    </footer>
  );
}
