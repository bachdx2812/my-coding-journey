<template>
  <article>
    <div class="mt-3">
      Before: {{ testObj }}
      <br />
      After: {{ testObj }}
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  testObj: String
})
</script>
