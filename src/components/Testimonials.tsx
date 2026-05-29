"use client";

import React from "react";
import { motion } from "motion/react";
import { testimonials } from "@/data/site";

type Testimonial = (typeof testimonials)[number];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  offset?: number;
}) => {
  const offset = props.offset ?? 0;

  return (
    <div className={`h-[620px] overflow-hidden ${props.className || ""}`}>
      <motion.div
        initial={{ translateY: `${offset}%` }}
        animate={{
          translateY: `${offset - 50}%`
        }}
        transition={{
          duration: props.duration || 16,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="w-full rounded-[24px] border border-line bg-white p-6 shadow-lg shadow-blue-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-service"
                  key={`${name}-${index}-${i}`}
                >
                  <div className="text-base leading-7 text-graphite">{text}</div>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-11 w-11 rounded-full border border-line bg-service-alt object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold leading-5 tracking-tight text-graphite">{name}</div>
                      <div className="leading-5 tracking-tight text-muted">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))
        ]}
      </motion.div>
    </div>
  );
};

export function TestimonialsSection() {
  const firstColumn = testimonials.filter((_, index) => index % 3 === 0);
  const secondColumn = testimonials.filter((_, index) => index % 3 === 1);
  const thirdColumn = testimonials.filter((_, index) => index % 3 === 2);

  return (
    <section className="bg-white py-14 md:py-20" id="reviews">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-service-blueText">
              Отзывы
            </p>
            <h2 className="text-3xl font-bold leading-tight text-graphite md:text-4xl">
              Клиенты вызывают мастера, когда важно быстро и спокойно
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Добавили живые ситуации из разных районов Липецка: без идеальных формулировок, зато понятно,
              почему люди доверяют службе.
            </p>
          </div>

          <div className="relative max-h-[620px] overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white to-transparent" />
            <div className="grid gap-6 md:hidden">
              <TestimonialsColumn testimonials={testimonials} duration={32} offset={0} />
            </div>
            <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
              <TestimonialsColumn testimonials={firstColumn} duration={24} offset={0} />
              <TestimonialsColumn testimonials={secondColumn} duration={31} offset={-16} />
              <TestimonialsColumn testimonials={thirdColumn} duration={27} offset={-29} className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
