<script setup lang="ts">

</script>

<template>
  <section class="bg-white py-16 lg:py-20">
    <div class="mx-auto max-w-[1280px] space-y-20 px-5 lg:space-y-32 lg:px-8">
      <article id="park" class="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="order-2 lg:order-1">
          <div class="mb-5 flex items-center gap-3">
            <div class="svc-chip chip-park">P</div>
            <div>
              <div class="text-lg font-extrabold">Park<span class="font-medium text-ink-500">.super.photo</span></div>
            </div>
          </div>
          <h3 class="font-display text-3xl font-bold leading-tight md:text-4xl">
            Найди свои фото из&nbsp;парка <span class="grad-text">по одному селфи</span>
          </h3>
          <p class="mt-4 text-lg leading-relaxed text-ink-700">
            Наши фотоловушки снимают вас на аттракционах, у героев и в самых ярких моментах. Загрузите селфи — система
            за секунды найдёт все ваши кадры за день.
          </p>
          <ul class="mt-6 space-y-2.5 text-ink-700">
            <li class="flex gap-2.5"><span class="font-bold text-cyan">✓</span> Сотни кадров за день — без поиска по
              очереди
            </li>
            <li class="flex gap-2.5"><span class="font-bold text-cyan">✓</span> Замена фона на любой пейзаж</li>
            <li class="flex gap-2.5"><span class="font-bold text-cyan">✓</span> Скачивание в HD, печать, отправка
              близким
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap gap-3">
            <ui-button href="https://park.super.photo" variant="primary" tag="a">Найти свои фото</ui-button>
            <ui-button href="https://park.super.photo" variant="secondary" tag="a">Подробнее →</ui-button>
          </div>
        </div>
        <div class="order-1 rounded-2xl grad-card-park p-5 lg:order-2 lg:p-8">
          <div class="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-100 shadow-card">
            <img src="@/assets/hero-family.png" alt="Семья в парке развлечений" class="h-full w-full object-cover"
                 width="800" height="600"/>
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
      </article>

      <article id="ai" class="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="rounded-2xl grad-card-ai p-5 lg:p-8">
          <WidgetBeforeAfterSlider/>
        </div>
        <div>
          <div class="mb-5 flex items-center gap-3">
            <div class="svc-chip chip-ai">A</div>
            <div>
              <div class="text-lg font-extrabold">AI<span class="font-medium text-ink-500">.super.photo</span></div>
            </div>
          </div>
          <h3 class="font-display text-3xl font-bold leading-tight md:text-4xl">
            Освежи лицо и фигуру <span class="grad-text">за 10 секунд</span>
          </h3>
          <p class="mt-4 text-lg leading-relaxed text-ink-700">
            Простой редактор без сложных настроек. Нажми одну кнопку — нейросеть уберёт усталость, освежит кожу,
            поправит причёску.
          </p>
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
            <UiButton href="https://ai.super.photo" class="btn-primary" tag="a">Попробовать бесплатно</UiButton>
            <UiButton href="https://ai.super.photo" class="btn-secondary" tag="a">Все функции →</UiButton>
          </div>
        </div>
      </article>

      <article id="print" class="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="order-2 lg:order-1">
          <div class="mb-5 flex items-center gap-3">
            <div class="svc-chip chip-print">R</div>
            <div>
              <div class="text-lg font-extrabold">Print<span class="font-medium text-ink-500">.super.photo</span></div>
            </div>
          </div>
          <h3 class="font-display text-3xl font-bold leading-tight md:text-4xl">
            Распечатаем фото и фотокниги, <span class="grad-text">привезём СДЭК</span>
          </h3>
          <p class="mt-4 text-lg leading-relaxed text-ink-700">
            AI сам соберёт макет фотокниги из ваших снимков. Печатаем на профессиональной бумаге Fuji, доставка до
            пункта выдачи за 1–2 дня.
          </p>
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
            <UiButton href="https://print.super.photo" class="btn-primary">Создать фотокнигу</UiButton>
            <UiButton href="https://print.super.photo" class="btn-secondary" tag="a">Каталог →</UiButton>
          </div>
        </div>
        <div class="order-1 rounded-2xl grad-card-print p-5 lg:order-2 lg:p-8">
          <div class="aspect-[4/3] overflow-hidden rounded-xl bg-ink-100 shadow-card">
            <img src="@/assets/print-album.png" alt="Фотокнига с семейными фото" class="h-full w-full object-cover"
                 width="800" height="600"/>
          </div>
        </div>
      </article>

      <article id="star" class="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="rounded-2xl grad-card-star p-5 lg:p-8">
          <div class="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-100 shadow-card">
            <img src="@/assets/star-fan.png" alt="Фото со звездой" class="h-full w-full object-cover" width="800"
                 height="600"/>
            <div
                class="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
              ✨ AI-generated
            </div>
          </div>
        </div>
        <div>
          <div class="mb-5 flex items-center gap-3">
            <div class="svc-chip chip-star">S</div>
            <div>
              <div class="text-lg font-extrabold">Star<span class="font-medium text-ink-500">.super.photo</span></div>
            </div>
          </div>
          <h3 class="font-display text-3xl font-bold leading-tight md:text-4xl">
            Сделай кадр <span class="grad-text">со своим кумиром</span>
          </h3>
          <p class="mt-4 text-lg leading-relaxed text-ink-700">
            Концерты, кулисы, бытовые сценки — нейросеть собирает фотореалистичные кадры с любимой звездой. Каждый
            сценарий согласован лично с артистом.
          </p>
          <div class="mt-6 rounded-xl bg-navy p-5 text-white">
            <div class="mb-2 flex items-center gap-3">
              <span class="h-2 w-2 animate-pulse rounded-full bg-cyan"/>
              <span class="text-xs font-semibold uppercase tracking-wider text-cyan-300">сейчас в демо</span>
            </div>
            <div class="font-display text-xl font-bold">Демо-событие 2026</div>
            <div class="mt-1 text-sm text-white/70">Попробуйте, как это работает — на реальном прототипе.</div>
          </div>
          <div class="mt-8 flex flex-wrap gap-3">
            <ui-button
                tag="a"
                variant="primary"
                href="https://star-photo.ru/?event=demo-2026-05-10&qr=903ef08d19ba2324f2eba44a993cea34">
              Открыть демо
            </ui-button>
            <UiButton href="https://star.super.photo" variant="secondary">Как это работает →</UiButton>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>

</style>