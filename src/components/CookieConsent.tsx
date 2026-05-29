"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "golden-key-cookie-consent";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.localStorage.getItem(STORAGE_KEY) !== "accepted");
  }, []);

  function acceptCookies() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-20 z-50 px-4 md:bottom-5">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-[22px] border border-line bg-white p-4 shadow-service md:flex-row md:items-center md:justify-between md:p-5">
        <p className="text-sm leading-6 text-muted">
          Мы используем cookie, чтобы сайт работал корректно и было удобнее оставить заявку. Продолжая пользоваться
          сайтом, вы соглашаетесь с{" "}
          <Link className="font-bold text-service-blue hover:text-service-blueHover" href="/privacy">
            политикой конфиденциальности
          </Link>
          .
        </p>
        <button
          className="focus-ring min-h-11 shrink-0 rounded-xl bg-service-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-service-blueHover"
          onClick={acceptCookies}
          type="button"
        >
          Понятно
        </button>
      </div>
    </div>
  );
}
