<script setup>
import ModelAttribute from '@/libs/generators/ruby/modelAttribute'
import Model from '@/libs/generators/ruby/model'

const newModel = new Model('UserBook', [
  new ModelAttribute('name', 'string'),
  new ModelAttribute('email', 'string'),
  new ModelAttribute('user_id', 'bigint')
])
newModel.generateSchemaFile()
</script>

<template>
  <main></main>
</template>
