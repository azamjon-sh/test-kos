<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { parks } from '~/data/parks'

const root = ref<HTMLElement | null>(null)
const listOpen = ref(false)
const parkLabel = ref('Выбери парк')
const parkChosen = ref(false)

function toggleList(e: Event) {
  e.stopPropagation()
  listOpen.value = !listOpen.value
}

function selectPark(name: string) {
  parkLabel.value = name
  parkChosen.value = true
  listOpen.value = false
}

function onDocClick(e: MouseEvent) {
  const t = e.target as Node
  if (!root.value?.contains(t)) listOpen.value = false
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') listOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="root" class="mt-12 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
    <div class="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-300">Найди свои фото из парка →</div>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_auto]">
      <div class="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          :aria-expanded="listOpen"
          class="flex w-full items-center gap-3 rounded-xl bg-white/95 px-4 py-3.5 text-left text-navy transition-colors hover:bg-white"
          @click="toggleList"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6C3CE1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span
            class="flex-1 truncate text-sm font-medium"
            :class="parkChosen ? 'font-semibold text-navy' : 'text-ink-700'"
            >{{ parkLabel }}</span
          >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6C3CE1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <ul
          role="listbox"
          class="absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-y-auto rounded-xl border border-ink-200 bg-white py-1.5 text-ink-900 shadow-2xl"
          :hidden="!listOpen"
        >
          <li
            v-for="p in parks"
            :key="p.id"
            role="option"
            class="flex cursor-pointer flex-col gap-0.5 px-4 py-2.5 hover:bg-violet/10"
            @click="selectPark(p.name)"
          >
            <span class="text-sm font-semibold">{{ p.name }}</span>
            <span class="text-xs text-ink-500">{{ p.address }}</span>
          </li>
        </ul>
      </div>
      <label class="flex cursor-pointer items-center gap-3 rounded-xl bg-white/95 px-4 py-3.5 text-navy transition-colors hover:bg-white">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6C3CE1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <span class="flex-1 truncate text-sm font-medium text-ink-700">Загрузи селфи</span>
        <input type="file" accept="image/*" class="sr-only" />
      </label>
      <UiButton tag="button" variant="primary" type="button" class="justify-center whitespace-nowrap md:w-auto">Найти мои фото</UiButton>
    </div>
    <p class="mt-3 text-xs leading-relaxed text-white/60">
      Фото нужно только для поиска совпадений. Мы не публикуем его и не передаём третьим лицам.
    </p>
  </div>
</template>
