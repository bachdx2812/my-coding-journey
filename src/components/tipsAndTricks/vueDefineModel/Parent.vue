<template>
  <div class="py-5 grid md:grid-cols-2 gap-10">
    <div class="mb-10">
      <header>
        <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
          <span class="pb-16 borderbottom leading-[24px]">Children</span>
        </div>
      </header>

      <article>
        <Children v-model="testObj"></Children>

        <v-text-field label="Directly changed in parent" v-model="testObj"></v-text-field>
      </article>
    </div>

    <div class="mb-10">
      <header>
        <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
          <span class="pb-16 borderbottom leading-[24px]">Result</span>
        </div>
      </header>

      <Result :testObj="testObj"></Result>
    </div>
  </div>
</template>

<script setup>
import Children from '@/components/tipsAndTricks/vueDefineModel/Children.vue'
import Result from '@/components/tipsAndTricks/vueDefineModel/Result.vue'

import { ref } from 'vue'
const testObj = ref('')
</script>
