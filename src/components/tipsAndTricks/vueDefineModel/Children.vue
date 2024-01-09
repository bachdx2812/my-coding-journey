<template>
  <v-text-field label="Before" @update:modelValue="onInput"></v-text-field>
  <v-text-field label="After" v-model="model"></v-text-field>
</template>

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const model = defineModel()

function onInput(value) {
  emit('update:modelValue', value)
}
</script>
