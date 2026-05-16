<script setup lang="ts">
interface Feature {
  icon: string
  text: string
}

interface Service {
  id: string
  chipLetter: string
  chipClass: string
  cardClass: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  href: string
  orderImage?: boolean
  features?: Feature[]
  specialContent?: boolean
  buttons: Array<{ label: string; href: string; variant: 'primary' | 'secondary' }>
}

const services: Service[] = [
  {
    id: 'park',
    chipLetter: 'P',
    chipClass: 'chip-park',
    cardClass: 'grad-card-park',
    title: 'Найди свои фото из парка',
    subtitle: 'по одному селфи',
    description: 'Наши фотоловушки снимают вас на аттракционах, у героев и в самых ярких моментах. Загрузите селфи — система за секунды найдёт все ваши кадры за день.',
    image: '@/assets/hero-family.png',
    imageAlt: 'Семья в парке развлечений',
    href: 'https://park.super.photo',
    features: [
      {icon: '✓', text: 'Сотни кадров за день — без поиска по очереди'},
      {icon: '✓', text: 'Замена фона на любой пейзаж'},
      {icon: '✓', text: 'Скачивание в HD, печать, отправка близким'}
    ],
    buttons: [
      {label: 'Найти свои фото', href: 'https://park.super.photo', variant: 'primary'},
      {label: 'Подробнее →', href: 'https://park.super.photo', variant: 'secondary'}
    ]
  },
  {
    id: 'ai',
    chipLetter: 'A',
    chipClass: 'chip-ai',
    cardClass: 'grad-card-ai',
    title: 'Освежи лицо и фигуру',
    subtitle: 'за 10 секунд',
    description: 'Простой редактор без сложных настроек. Нажми одну кнопку — нейросеть уберёт усталость, освежит кожу, поправит причёску.',
    image: '',
    imageAlt: '',
    href: 'https://ai.super.photo',
    specialContent: true,
    buttons: [
      {label: 'Попробовать бесплатно', href: 'https://ai.super.photo', variant: 'primary'},
      {label: 'Все функции →', href: 'https://ai.super.photo', variant: 'secondary'}
    ]
  },
  {
    id: 'print',
    chipLetter: 'R',
    chipClass: 'chip-print',
    cardClass: 'grad-card-print',
    title: 'Распечатаем фото и фотокниги,',
    subtitle: 'привезём СДЭК',
    description: 'AI сам соберёт макет фотокниги из ваших снимков. Печатаем на профессиональной бумаге Fuji, доставка до пункта выдачи за 1–2 дня.',
    image: '@/assets/print-album.png',
    imageAlt: 'Фотокнига с семейными фото',
    href: 'https://print.super.photo',
    orderImage: true,
    buttons: [
      {label: 'Создать фотокнигу', href: 'https://print.super.photo', variant: 'primary'},
      {label: 'Каталог →', href: 'https://print.super.photo', variant: 'secondary'}
    ]
  },
  {
    id: 'star',
    chipLetter: 'S',
    chipClass: 'chip-star',
    cardClass: 'grad-card-star',
    title: 'Сделай кадр',
    subtitle: 'со своим кумиром',
    description: 'Концерты, кулисы, бытовые сценки — нейросеть собирает фотореалистичные кадры с любимой звездой. Каждый сценарий согласован лично с артистом.',
    image: '@/assets/star-fan.png',
    imageAlt: 'Фото со звездой',
    href: 'https://star.super.photo',
    specialContent: true,
    buttons: [
      {
        label: 'Открыть демо',
        href: 'https://star-photo.ru/?event=demo-2026-05-10&qr=903ef08d19ba2324f2eba44a993cea34',
        variant: 'primary'
      },
      {label: 'Как это работает →', href: 'https://star.super.photo', variant: 'secondary'}
    ]
  }
]
</script>

<template>
  <section class="bg-white py-16 lg:py-20">
    <div class="container space-y-20 lg:space-y-32">
      <article
          v-for="service in services"
          :id="service.id"
          :key="service.id"
          class="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <!-- Park Service -->
        <template v-if="service.id === 'park'">
          <div class="order-2 lg:order-1">
            <div class="mb-5 flex items-center gap-3">
              <div :class="['svc-chip', service.chipClass]">{{ service.chipLetter }}</div>
              <div>
                <div class="text-lg font-extrabold">Park<span class="font-medium text-ink-500">.super.photo</span></div>
              </div>
            </div>
            <h3 class="font-display text-3xl font-bold leading-tight md:text-4xl">
              {{ service.title }} <span class="grad-text">{{ service.subtitle }}</span>
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-ink-700">{{ service.description }}</p>
            <ul class="mt-6 space-y-2.5 text-ink-700">
              <li v-for="(feature, idx) in service.features" :key="idx" class="flex gap-2.5">
                <span class="font-bold text-cyan">{{ feature.icon }}</span> {{ feature.text }}
              </li>
            </ul>
            <div class="mt-8 flex flex-wrap gap-3">
              <UiButton v-for="btn in service.buttons" :key="btn.label" tag="a" :href="btn.href" :variant="btn.variant">
                {{ btn.label }}
              </UiButton>
            </div>
          </div>
          <div class="order-1 rounded-2xl p-5 lg:order-2 lg:p-8" :class="service.cardClass">
            <div class="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-100 shadow-card">
              <img :src="service.image" :alt="service.imageAlt" class="h-full w-full object-cover"/>
              <div class="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-card backdrop-blur">
                <div class="flex items-center gap-3">
                  <div class="grad-brand grid h-10 w-10 place-items-center rounded-full text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                         stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="text-xs text-ink-500">Найдено по селфи</div>
                    <div class="text-lg font-bold text-navy">87 фото · 12 видео</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- AI Service -->
        <template v-else-if="service.id === 'ai'">
          <div class="rounded-2xl p-5 lg:p-8" :class="service.cardClass">
            <WidgetBeforeAfterSlider/>
          </div>
          <div>
            <div class="mb-5 flex items-center gap-3">
              <div :class="['svc-chip', service.chipClass]">{{ service.chipLetter }}</div>
              <div>
                <div class="text-lg font-extrabold">AI<span class="font-medium text-ink-500">.super.photo</span></div>
              </div>
            </div>
            <h3 class="font-display text-3xl font-bold leading-tight md:text-4xl">
              {{ service.title }} <span class="grad-text">{{ service.subtitle }}</span>
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-ink-700">{{ service.description }}</p>
            <div class="mt-6 grid grid-cols-2 gap-3">
              <div class="rounded-xl bg-violet-50 p-4">
                <div class="mb-1 text-xl">✨</div>
                <div class="text-sm font-semibold">Освежить кожу</div>
                <div class="mt-0.5 text-xs text-ink-500">убрать морщинки и усталость</div>
              </div>
              <div class="rounded-xl bg-violet-50 p-4">
                <div class="mb-1 text-xl">💃</div>
                <div class="text-sm font-semibold">Убрать −5 кг</div>
                <div class="mt-0.5 text-xs text-ink-500">тонкая работа с фигурой</div>
              </div>
              <div class="rounded-xl bg-violet-50 p-4">
                <div class="mb-1 text-xl">💇‍♀️</div>
                <div class="text-sm font-semibold">Новая причёска</div>
                <div class="mt-0.5 text-xs text-ink-500">примерь любую укладку</div>
              </div>
              <div class="rounded-xl bg-violet-50 p-4">
                <div class="mb-1 text-xl">🎨</div>
                <div class="text-sm font-semibold">Своя идея</div>
                <div class="mt-0.5 text-xs text-ink-500">сгенерировать по описанию</div>
              </div>
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
              <UiButton v-for="btn in service.buttons" :key="btn.label" tag="a" :href="btn.href" :variant="btn.variant">
                {{ btn.label }}
              </UiButton>
            </div>
          </div>
        </template>

        <!-- Print Service -->
        <template v-else-if="service.id === 'print'">
          <div class="order-2 lg:order-1">
            <div class="mb-5 flex items-center gap-3">
              <div :class="['svc-chip', service.chipClass]">{{ service.chipLetter }}</div>
              <div>
                <div class="text-lg font-extrabold">Print<span class="font-medium text-ink-500">.super.photo</span>
                </div>
              </div>
            </div>
            <h3 class="font-display text-3xl font-bold leading-tight md:text-4xl">
              {{ service.title }} <span class="grad-text">{{ service.subtitle }}</span>
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-ink-700">{{ service.description }}</p>
            <div class="mt-6 grid grid-cols-3 gap-3 text-center">
              <div class="rounded-xl bg-ink-100 p-4">
                <div class="font-display text-2xl font-bold text-navy">6 ₽</div>
                <div class="mt-1 text-xs text-ink-500">фото 10×15</div>
              </div>
              <div class="rounded-xl bg-ink-100 p-4">
                <div class="font-display text-2xl font-bold text-navy">1490 ₽</div>
                <div class="mt-1 text-xs text-ink-500">фотокнига 20×20</div>
              </div>
              <div class="rounded-xl bg-ink-100 p-4">
                <div class="font-display text-2xl font-bold text-navy">1–2 дн</div>
                <div class="mt-1 text-xs text-ink-500">доставка СДЭК</div>
              </div>
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
              <UiButton v-for="btn in service.buttons" :key="btn.label" tag="a" :href="btn.href" :variant="btn.variant">
                {{ btn.label }}
              </UiButton>
            </div>
          </div>
          <div class="order-1 rounded-2xl p-5 lg:order-2 lg:p-8" :class="service.cardClass">
            <div class="aspect-[4/3] overflow-hidden rounded-xl bg-ink-100 shadow-card">
              <img :src="service.image" :alt="service.imageAlt" class="h-full w-full object-cover"/>
            </div>
          </div>
        </template>

        <!-- Star Service -->
        <template v-else-if="service.id === 'star'">
          <div class="rounded-2xl p-5 lg:p-8" :class="service.cardClass">
            <div class="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-100 shadow-card">
              <img :src="service.image" :alt="service.imageAlt" class="h-full w-full object-cover"/>
              <div
                  class="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                ✨ AI-generated
              </div>
            </div>
          </div>
          <div>
            <div class="mb-5 flex items-center gap-3">
              <div :class="['svc-chip', service.chipClass]">{{ service.chipLetter }}</div>
              <div>
                <div class="text-lg font-extrabold">Star<span class="font-medium text-ink-500">.super.photo</span></div>
              </div>
            </div>
            <h3 class="font-display text-3xl font-bold leading-tight md:text-4xl">
              {{ service.title }} <span class="grad-text">{{ service.subtitle }}</span>
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-ink-700">{{ service.description }}</p>
            <div class="mt-6 rounded-xl bg-navy p-5 text-white">
              <div class="mb-2 flex items-center gap-3">
                <span class="h-2 w-2 animate-pulse rounded-full bg-cyan"/>
                <span class="text-xs font-semibold uppercase tracking-wider text-cyan-300">сейчас в демо</span>
              </div>
              <div class="font-display text-xl font-bold">Демо-событие 2026</div>
              <div class="mt-1 text-sm text-white/70">Попробуйте, как это работает — на реальном прототипе.</div>
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
              <UiButton v-for="btn in service.buttons" :key="btn.label" tag="a" :href="btn.href" :variant="btn.variant">
                {{ btn.label }}
              </UiButton>
            </div>
          </div>
        </template>
      </article>
    </div>
  </section>
</template>

<style scoped>

</style>