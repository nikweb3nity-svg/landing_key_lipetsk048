"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

type FormState = {
  name: string;
  phone: string;
  problem: string;
  address: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  problem: "",
  address: ""
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "landing-cost-form" })
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Не удалось отправить заявку");
      }

      setStatus("success");
      setMessage(data.message || "Заявка принята. Мастер скоро свяжется с вами.");
      setForm(initialState);
      setAccepted(false);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Не удалось отправить заявку");
    }
  }

  return (
    <form className="rounded-[28px] bg-white p-5 shadow-service md:p-7" id="cost" onSubmit={handleSubmit}>
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-service-blueText">Быстрый расчет</p>
        <h3 className="mt-2 text-2xl font-bold text-graphite">Оставьте номер — перезвоним за минуту</h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          Нужны только телефон, район и коротко что случилось. Точную цену согласуем до начала работы.
        </p>
      </div>

      <div className="grid gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-graphite">Имя</span>
            <input
              className="focus-ring min-h-12 rounded-xl border border-line bg-slate-50 px-4 text-base text-graphite transition focus:border-service-blue focus:bg-white"
              name="name"
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              placeholder="Алексей"
              required
              value={form.name}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-graphite">Телефон</span>
            <input
              className="focus-ring min-h-12 rounded-xl border border-line bg-slate-50 px-4 text-base text-graphite transition focus:border-service-blue focus:bg-white"
              inputMode="tel"
              name="phone"
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
              placeholder="+7 900 000-00-00"
              required
              type="tel"
              value={form.phone}
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-graphite">Что случилось</span>
          <input
            className="focus-ring min-h-12 rounded-xl border border-line bg-slate-50 px-4 text-base text-graphite transition focus:border-service-blue focus:bg-white"
            name="problem"
            onChange={(event) => setForm((current) => ({ ...current, problem: event.target.value }))}
            placeholder="Захлопнулась дверь, ключи внутри"
            required
            value={form.problem}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-graphite">Адрес или район</span>
          <input
            className="focus-ring min-h-12 rounded-xl border border-line bg-slate-50 px-4 text-base text-graphite transition focus:border-service-blue focus:bg-white"
            name="address"
            onChange={(event) => setForm((current) => ({ ...current, address: event.target.value }))}
            placeholder="Центр, НЛМК, ЛТЗ"
            required
            value={form.address}
          />
        </label>

        <label className="flex gap-3 rounded-xl bg-service-alt p-4 text-sm leading-6 text-muted">
          <input
            checked={accepted}
            className="mt-1 h-4 w-4 shrink-0 accent-service-blue"
            onChange={(event) => setAccepted(event.target.checked)}
            required
            type="checkbox"
          />
          <span>
            Согласен на обработку персональных данных и принимаю{" "}
            <Link className="font-semibold text-service-blue hover:text-service-blueHover" href="/agreement">
              согласие
            </Link>
            .
          </span>
        </label>

        <button
          className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-service-blue px-5 py-4 text-base font-bold text-white transition hover:bg-service-blueHover disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "loading" || !accepted}
          type="submit"
        >
          <Icon name="send" className="h-5 w-5" />
          {status === "loading" ? "Отправляем..." : "Рассчитать стоимость"}
        </button>
      </div>

      {message ? (
        <p
          className={`mt-4 rounded-xl px-4 py-3 text-sm font-semibold ${
            status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
