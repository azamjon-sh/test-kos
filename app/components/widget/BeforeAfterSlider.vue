<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const wrap = ref<HTMLElement | null>(null)
const pct = ref(50)
let dragging = false

function setPos(clientX: number) {
  const el = wrap.value
  if (!el) return
  const r = el.getBoundingClientRect()
  let p = ((clientX - r.left) / r.width) * 100
  p = Math.max(2, Math.min(98, p))
  pct.value = p
}

function onDown(e: MouseEvent | TouchEvent) {
  dragging = true
  e.preventDefault()
}

function onMoveWin(e: Event) {
  if (!dragging) return
  if (e instanceof TouchEvent && e.touches.length > 0) {
    setPos(e.touches[0]!.clientX)
  } else if (e instanceof MouseEvent) {
    setPos(e.clientX)
  }
}

function onUp() {
  dragging = false
}

const touchMoveOpts: AddEventListenerOptions = { passive: false }

onMounted(() => {
  window.addEventListener('mousemove', onMoveWin)
  window.addEventListener('mouseup', onUp)
  window.addEventListener('touchmove', onMoveWin, touchMoveOpts)
  window.addEventListener('touchend', onUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMoveWin)
  window.removeEventListener('mouseup', onUp)
  window.removeEventListener('touchmove', onMoveWin, touchMoveOpts)
  window.removeEventListener('touchend', onUp)
})
</script>

<template>
  <div ref="wrap" class="ba-wrap mx-auto aspect-square max-w-full shadow-card">
    <img src="../../assets/ai-before.png" alt="Фото до обработки" class="w-full" />
    <div class="ba-after" :style="{ clipPath: `inset(0 0 0 ${pct}%)` }">
      <img src="../../assets/ai-after.png" alt="Фото после AI-обработки" class="w-full" />
    </div>
    <div
      class="ba-handle"
      :style="{ left: `${pct}%` }"
      @mousedown="onDown"
      @touchstart="onDown"
    />
    <div class="ba-label" style="left: 16px">До</div>
    <div class="ba-label" style="right: 16px">После AI</div>
  </div>
</template>
