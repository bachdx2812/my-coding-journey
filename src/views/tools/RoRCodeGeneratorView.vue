<template>
  <PageHeader title="Ruby On Rails Code Generator"></PageHeader>

  <div class="mt-2 text-[0.9rem] text-gray-300 leading-relaxed tracking-tight">
    I built this tool to quickly create rails migration schema file with ease. Hopefully it can help
    you too
  </div>

  <div class="py-5 grid md:grid-cols-1 gap-10">
    <RoRCodeGeneratorInput v-model="model"></RoRCodeGeneratorInput>

    <RoRCodeGeneratorOutput v-model="model"></RoRCodeGeneratorOutput>
  </div>
</template>

<script setup>
import PageHeader from '@/components/layouts/PageHeader.vue'
import RoRCodeGeneratorInput from '@/components/tools/rorCodeGenerator/Input.vue'
import RoRCodeGeneratorOutput from '@/components/tools/rorCodeGenerator/Output.vue'

import { reactive } from 'vue'

import Model from '@/libs/generators/ruby/model'

const model = reactive(new Model('', []))
</script>
