<script setup lang="ts">
interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Сервисы',
    links: [
      { label: 'Park · фото из парка', href: 'https://park.super.photo' },
      { label: 'AI · редактор', href: 'https://ai.super.photo' },
      { label: 'Print · печать и фотокниги', href: 'https://print.super.photo' },
      { label: 'Star · фото со звездой', href: 'https://star.super.photo' }
    ]
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#' },
      { label: 'Партнёрам и паркам', href: '#' },
      { label: 'Карьера в команде', href: '#' },
      { label: 'Контакты', href: '#' }
    ]
  },
  {
    title: 'Поддержка',
    links: [
      { label: 'Как найти фото', href: '#' },
      { label: 'Политика конфиденциальности', href: '#' },
      { label: 'Условия использования', href: '#' },
      { label: 'Оферта', href: '#' }
    ]
  }
]

const socialLinks: FooterLink[] = [
  { label: 'Telegram', href: '#' },
  { label: 'VK', href: '#' },
  { label: 'YouTube', href: '#' }
]
</script>

<template>
  <footer class="bg-navy pb-10 pt-16 text-white">
    <div class="container">
      <div class="mb-12 grid gap-10 md:grid-cols-4">
        <div class="md:col-span-1">
          <a href="#top" class="mb-4 flex items-center gap-2.5">
            <img src="@/assets/logo-sp.jpg" alt="" class="h-9 w-auto"/>
          </a>
          <p class="text-sm leading-relaxed text-white/60">Экосистема сервисов для семейных воспоминаний. Сохраняем то,
            что важно.</p>
        </div>
        <div v-for="section in footerSections" :key="section.title">
          <div class="mb-4 text-xs font-bold uppercase tracking-wider text-cyan-300">{{ section.title }}</div>
          <ul class="space-y-2.5 text-sm">
            <li v-for="link in section.links" :key="link.label">
              <a :href="link.href" class="text-white/80 hover:text-white">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
        <div>© 2026 SUPER.PHOTO · Все права защищены. Товарный знак на регистрации в Роспатенте.</div>
        <div class="flex gap-4">
          <a v-for="social in socialLinks" :key="social.label" :href="social.href" class="hover:text-white">{{ social.label }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>