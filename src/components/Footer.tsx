import Link from "next/link";
import { company } from "@/data/site";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="border-t border-line bg-graphite pb-28 pt-10 text-white md:pb-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-service-blue text-white">
              <Icon name="key" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xl font-bold">{company.name}</p>
              <p className="text-sm text-slate-300">Служба вскрытия замков</p>
            </div>
          </div>
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
