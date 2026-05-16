<script setup lang="ts">

</script>

<template>
  <section id="top" class="grad-soft relative overflow-hidden pb-20 pt-32 text-white lg:pb-28 lg:pt-40">
    <div class="pointer-events-none absolute -right-40 -top-32 hidden h-[680px] w-[680px] opacity-25 spin-slow md:block">
      <img src="@/assets/logo-mark.png" alt="" class="h-full w-full"/>
    </div>
    <div class="pointer-events-none absolute inset-0 dots opacity-30" />

    <div class="relative container">
      <div class="max-w-3xl">
        <p class="mb-6 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-300">
          <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
          Экосистема SUPER.PHOTO
        </p>
        <h1 class="font-display text-[36px] font-bold leading-[1.08] tracking-tight md:text-[54px] lg:text-[64px]">
          Сохраняем <br />
          <span class="grad-text">лучшие моменты</span><br />
          вашей семьи
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          Найди свои фото из парка по селфи, освежи их нейросетью, распечатай в фотокнигу или сделай кадр с кумиром. Всё в одном сервисе.
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <UiButton href="#park" tag="a" variant="primary" class="text-base md:text-lg">
            Найти свои фото
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </UiButton>
          <UiButton href="#app" variant="ghost-dark" tag="a" class="text-base md:text-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Скачать приложение
          </UiButton>
        </div>

        <WidgetParkSearch />
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>