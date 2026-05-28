import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  problem?: string;
  address?: string;
  source?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 1000) : "";
}

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ message: "Некорректный формат заявки" }, { status: 400 });
  }

  const lead = {
    name: clean(body.name),
    phone: clean(body.phone),
    problem: clean(body.problem),
    address: clean(body.address),
    source: clean(body.source) || "landing",
    createdAt: new Date().toISOString()
  };

  if (!lead.name || !lead.phone || !lead.problem || !lead.address) {
    return NextResponse.json({ message: "Заполните имя, телефон, проблему и адрес или район" }, { status: 400 });
  }

  // TODO: Email notifications.
  // Add SMTP delivery here. Environment variables are prepared in .env.example:
  // LEAD_EMAIL_TO, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM.

  // TODO: Telegram notifications.
  // Add Telegram Bot API delivery here using TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.

  // TODO: VK notifications.
  // Add VK API delivery here using VK_GROUP_ID and VK_ACCESS_TOKEN.

  // For now we keep the handler universal and Node-compatible: it can run on Vercel,
  // Beget VPS or any server that starts the Next.js app with npm run start.
  console.info("[lead]", lead);

  return NextResponse.json({
    ok: true,
    message: "Заявка принята. Мастер свяжется с вами для уточнения цены и времени приезда."
  });
}
