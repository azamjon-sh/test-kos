<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'ghost-dark'
type Tag = 'button' | 'a'

interface Props {
  variant?: Variant
  tag?: Tag
  href?: string
  type?: 'button' | 'submit' | 'reset'
  class?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  tag: 'button',
  type: 'button'
})
</script>

<template>
  <component
    :is="tag"
    :href="tag === 'a' ? href : undefined"
    :type="tag === 'button' ? type : undefined"
    :class="[
      'btn',
      `btn-${variant}`,
      $props.class
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  padding: 16px 28px;
  border: none;
  font-weight: 700;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, #6c3ce1, #00d4ff);
  color: #fff;
  box-shadow: 0 8px 24px rgba(108, 60, 225, 0.35);
  transition:
    transform 200ms var(--ease),
    box-shadow 200ms var(--ease);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(108, 60, 225, 0.45);
}

.btn-secondary {
  background: #fff;
  color: var(--navy);
  border: 1.5px solid rgba(13, 13, 26, 0.12);
  transition:
    transform 200ms var(--ease),
    border-color 200ms var(--ease);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  border-color: var(--violet);
}

.btn-ghost-dark {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  transition: background 200ms var(--ease);
}

.btn-ghost-dark:hover {
  background: rgba(255, 255, 255, 0.18);
}
</style>

