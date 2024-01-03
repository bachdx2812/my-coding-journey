<template>
  <header class="mt-6">
    <div class="pt-5">
      <div class="text-sm title white leading-[1.1em] mb-0">
        <div class="leading-[64px]">
          <span class="text-5xl font-bold font-serif">
            <span class="mr-2 text-[#e1e1e1] tracking-tight">{{ title }}</span>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>
