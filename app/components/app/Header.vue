<script setup lang="ts">
import { ref } from 'vue'

const mobOpen = ref(false)

function closeMob() {
  mobOpen.value = false
}

function toggleMob() {
  mobOpen.value = !mobOpen.value
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-ink-200/60 bg-white/80 backdrop-blur">
    <div class="container flex h-16 items-center gap-6">
      <a href="#top" class="flex items-center gap-2.5" aria-label="SUPER.PHOTO">
        <img src="@/assets/logo-sp-light.png" alt="" class="h-9 w-auto"/>
      </a>
      <nav class="ml-auto hidden items-center gap-1 text-[15px] font-medium text-ink-700 lg:flex">
        <a href="#park" class="rounded-lg px-3 py-2 transition-colors hover:bg-ink-100">Фото из парка</a>
        <a href="#ai" class="rounded-lg px-3 py-2 transition-colors hover:bg-ink-100">AI-редактор</a>
        <a href="#print" class="rounded-lg px-3 py-2 transition-colors hover:bg-ink-100">Печать</a>
        <a href="#star" class="rounded-lg px-3 py-2 transition-colors hover:bg-ink-100">Со звездой</a>
        <a href="#app" class="rounded-lg px-3 py-2 transition-colors hover:bg-ink-100">Приложение</a>
      </nav>
      <a
          href="#app"
          class="hidden items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet md:inline-flex"
      >
        <span>Скачать приложение</span>
      </a>
      <button
          type="button"
          class="ml-auto grid h-10 w-10 place-items-center rounded-lg hover:bg-ink-100 lg:hidden"
          aria-label="Меню"
          :aria-expanded="mobOpen"
          @click="toggleMob"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
    <div
        class="mob-menu border-t border-ink-200 bg-white lg:hidden"
        :hidden="!mobOpen"
    >
      <nav class="flex flex-col gap-1 px-5 py-3 text-base font-medium">
        <a href="#park" class="border-b border-ink-100 py-2.5" @click="closeMob">Фото из парка</a>
        <a href="#ai" class="border-b border-ink-100 py-2.5" @click="closeMob">AI-редактор</a>
        <a href="#print" class="border-b border-ink-100 py-2.5" @click="closeMob">Печать</a>
        <a href="#star" class="border-b border-ink-100 py-2.5" @click="closeMob">Со звездой</a>
        <UiButton href="#app" class="py-2.5" tag="a" variant="ghost-dark" @click="closeMob">Скачать приложение</UiButton>
      </nav>
    </div>
  </header>
</template>
