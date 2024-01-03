<template>
  <h2>{{ props.changeLogPeriod.period }}</h2>
  <ul>
    <li v-for="item in props.changeLogPeriod.items">
      {{ item.content }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  changeLogPeriod: Object
})
</script>
