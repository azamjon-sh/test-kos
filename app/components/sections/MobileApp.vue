<script setup lang="ts">

</script>

<template>
  <section id="app" class="grad-soft relative overflow-hidden py-20 text-white lg:py-28">
    <div class="pointer-events-none absolute inset-0 dots opacity-20"/>
    <div class="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
      <div class="reveal">
        <p class="mb-5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-300">
          <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan"/>
          Мобильное приложение
        </p>
        <h2 class="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Всё, что вы любите, <br/><span class="grad-text">в одном приложении</span>
        </h2>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
          Установите SUPER.PHOTO — и получите фото из парка бесплатно, AI-улучшение в один тап и удобный доступ ко всему
          архиву семейных снимков.
        </p>
        <ul class="mt-7 space-y-3 text-lg text-white/90">
          <li class="flex gap-3"><span class="flex-shrink-0 text-cyan">●</span> Фото из парка —
            <strong>бесплатно</strong> в приложении
          </li>
          <li class="flex gap-3"><span class="flex-shrink-0 text-cyan">●</span> Базовые AI-функции <strong>без
            оплаты</strong></li>
          <li class="flex gap-3"><span class="flex-shrink-0 text-cyan">●</span> Печать и доставка — <strong>в два
            тапа</strong></li>
        </ul>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#"
             class="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-navy transition-colors hover:bg-cyan-50">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path
                  d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
              />
            </svg>
            <div class="text-left">
              <div class="text-[10px] font-medium uppercase tracking-wider opacity-70">Скачать в</div>
              <div class="text-lg font-extrabold leading-tight">App Store</div>
            </div>
          </a>
          <a href="#"
             class="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-navy transition-colors hover:bg-violet-50">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92z"
                    fill="#00D4FF"/>
              <path d="M16.81 15.022l-3.018-3.018-2.443 2.443 8.4 4.737a1 1 0 0 0 .85.06" fill="#FF7560"/>
              <path d="M21.6 11.137l-4.792-2.703-3.018 3.018L17.792 14.5l3.808-2.146a1 1 0 0 0 0-1.717z"
                    fill="#e8a93a"/>
              <path d="M13.792 12L3.609 1.814A.998.998 0 0 1 3.999 1.73l9.793 5.520L16.81 8.978" fill="#6C3CE1"/>
            </svg>
            <div class="text-left">
              <div class="text-[10px] font-medium uppercase tracking-wider opacity-70">Скачать в</div>
              <div class="text-lg font-extrabold leading-tight">Google Play</div>
            </div>
          </a>
        </div>
        <p class="mt-5 text-xs text-white/50">
          Релиз в Q3 2026. Сейчас собираем waitlist — первые 1000 человек получат премиум-функции бесплатно на год.
        </p>
      </div>

      <div class="reveal relative flex justify-center lg:justify-end">
        <div class="relative">
          <div class="absolute inset-0 rounded-full grad-brand opacity-40 blur-3xl"/>
          <div
              class="relative aspect-[9/19] w-[280px] overflow-hidden rounded-[42px] border-[10px] border-navy-700 bg-navy-700 shadow-2xl md:w-[340px]">
            <div class="absolute left-1/2 top-2 z-10 h-6 w-28 -translate-x-1/2 rounded-2xl bg-navy"/>
            <div class="absolute inset-0 grad-soft p-5 pt-12">
              <div class="mb-4 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <img src="@/assets/logo-mark.png" alt="" class="h-7 w-7" width="28" height="28"/>
                  <span class="text-sm font-extrabold text-white">SUPER.PHOTO</span>
                </div>
                <div class="h-7 w-7 rounded-full bg-white/15"/>
              </div>
              <div class="mb-3 text-xs text-white/80">Привет, Анна 👋</div>
              <div class="font-display mb-4 text-xl font-bold leading-tight text-white">Найдено<br/>87 ваших фото</div>
              <div class="grid grid-cols-2 gap-1.5">
                <div class="aspect-square rounded-lg" style="background: linear-gradient(135deg, #6c3ce1, #4a5cff)"/>
                <div class="aspect-square rounded-lg" style="background: linear-gradient(135deg, #4a5cff, #00d4ff)"/>
                <div class="aspect-square rounded-lg" style="background: linear-gradient(135deg, #00d4ff, #6c3ce1)"/>
                <div class="aspect-square rounded-lg" style="background: linear-gradient(135deg, #6c3ce1, #00d4ff)"/>
                <div class="aspect-square rounded-lg" style="background: linear-gradient(135deg, #4a5cff, #6c3ce1)"/>
                <div class="aspect-square rounded-lg" style="background: linear-gradient(135deg, #00d4ff, #4a5cff)"/>
              </div>
              <div
                  class="absolute bottom-3 left-3 right-3 flex justify-around rounded-2xl border border-white/15 bg-white/10 p-2.5 backdrop-blur">
                <div class="h-7 w-7 rounded-lg bg-white/25"/>
                <div class="h-7 w-7 rounded-lg bg-white/10"/>
                <div class="h-7 w-7 rounded-lg bg-white/10"/>
                <div class="h-7 w-7 rounded-lg bg-white/10"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>