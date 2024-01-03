<template>
  <div class="pt-3 text-lg title white leading-[1.1em] mb-0" :id="item.title">
    <span class="pb-16 borderbottom leading-[24px]">
      <router-link :to="item.path">
        <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> {{ item.title }} </span>
      </router-link>
    </span>
  </div>

  <div class="mt-2 mb-6 tweak-1 text-base max-w-xl lg:max-w-full text-[#e1e1e1]">
    <p class="mb-1">Demo Usage:</p>

    <pre>
      <code>
        {{ item.demoCode }}
      </code>
    </pre>

    <p>Check <a :href="item.github" target="_blank">Github</a> for more details</p>
  </div>
</template>

<script setup>
const { item } = defineProps({
  item: Object
})
</script>

<style scoped>
pre {
  background-color: rgba(200, 200, 255, 0.0509803922);
}

a {
  color: var(--c-blue);
}
</style>
