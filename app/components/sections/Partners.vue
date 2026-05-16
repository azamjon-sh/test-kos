<script setup lang="ts">
import ostrovMechtyImg from '@/assets/partners/ostrov-mechty.png'
import solntseImg from '@/assets/partners/solntse.png'
import skazkaImg from '@/assets/partners/skazka.png'
import atomImg from '@/assets/partners/atom.png'
import smpImg from '@/assets/partners/smp.svg'
import limpopotImg from '@/assets/partners/limpopo.png'
import h2oImg from '@/assets/partners/h2o.svg'
import zavidovoImg from '@/assets/partners/zavidovo.svg'

interface Partner {
  id: string
  name: string
  image: string
  alt: string
}

const mainPartners: Partner[] = [
  { id: 'ostrov-mechty', name: 'Остров Мечты', image: ostrovMechtyImg, alt: 'Остров Мечты' },
  { id: 'solntse', name: 'Солнце Москвы', image: solntseImg, alt: 'Солнце Москвы' },
  { id: 'skazka', name: 'Парк «Сказка»', image: skazkaImg, alt: 'Парк Сказка' },
  { id: 'atom', name: 'Музей «АТОМ»', image: atomImg, alt: 'Музей АТОМ' },
  { id: 'smp', name: 'СоюзМультПарк', image: smpImg, alt: 'СоюзМультПарк' },
  { id: 'limpopo', name: 'Лимпопо', image: limpopotImg, alt: 'Аквапарк Лимпопо' },
  { id: 'h2o', name: 'Аквапарк H2O', image: h2oImg, alt: 'Аквапарк H2O' },
  { id: 'zavidovo', name: 'Завидово Аква &amp; СПА', image: zavidovoImg, alt: 'Завидово Аква СПА' }
]

const additionalPartners = [
  'MIKS Karting',
  'Орион',
  'Московские канатные дороги',
  'E-GO Karting',
  'ZelenoKart',
  'Лемар',
  'Энергия Высоты',
  'Тополя',
  'Zhooki',
  'Lovko Park',
  'ОренПарк',
  'Немо',
  'Планета',
  'Тропический Берег',
  '«Град»'
]
</script>

<template>
  <section class="border-b border-ink-200 bg-ink-50 py-16 lg:py-20" aria-labelledby="partners-title">
    <div class="container">
      <div class="mb-10 text-center lg:mb-12">
        <p class="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-violet">Нам доверяют</p>
        <h2 id="partners-title" class="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Работаем <span class="grad-text">эксклюзивно</span> в лучших парках России
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
          Мы — официальный фото-партнёр ведущих парков, аквапарков и развлекательных центров в Москве, Санкт-Петербурге, Екатеринбурге и ещё в 6 городах.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
        <div v-for="partner in mainPartners" :key="partner.id" class="partner-tile">
          <img :src="partner.image" :alt="partner.alt" loading="lazy" />
          <span class="partner-name">{{ partner.name }}</span>
        </div>
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-ink-500">
        <span class="font-semibold text-ink-700">И ещё {{ additionalPartners.length }} партнёров:</span>
        <template v-for="(partner, index) in additionalPartners" :key="`partner-${index}`">
          <span>{{ partner }}</span>
          <span v-if="index < additionalPartners.length - 1" class="text-ink-300">·</span>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>