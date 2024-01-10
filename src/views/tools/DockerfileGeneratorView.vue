<template>
  <PageHeader title="Dockerfile Generator (WIP)"></PageHeader>

  <div class="mt-2 text-[0.9rem] text-gray-300 leading-relaxed tracking-tight">
    <a href="https://github.com/minhphuc429" target="_blank">Phucnm</a>

    has a briliant idea to use OpenAI to generate Dockerfile based on several projects we've built.
  </div>

  <div class="py-5 grid md:grid-cols-1 gap-10">
    <header>
      <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
        <span class="pb-16 borderbottom leading-[24px]">
          <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Input </span>
        </span>
      </div>
    </header>

    <article class="mb-0">
      <div class="pb-0 white col">
        <v-card>
          <v-card-title>
            <span class="text-gray-300 text-sm">
              Select the `targets` you want in the Dockerfile
            </span>
          </v-card-title>

          <v-card-text>
            <v-combobox
              v-model="inputs"
              clearable
              chips
              multiple
              label="type"
              :items="dockerfileTargets"
            ></v-combobox>
          </v-card-text>
        </v-card>
      </div>

      <v-btn type="submit" block class="mt-2" @click="generate">Generate</v-btn>
    </article>
  </div>

  <div class="py-5 grid md:grid-cols-1 gap-10">
    <header>
      <div class="pt-3 text-lg title white leading-[1.1em] mb-0">
        <span class="pb-16 borderbottom leading-[24px]">
          <span class="text-[#e1e1e1] mr-2 font-serif font-bold"> Output </span>
        </span>
      </div>
    </header>

    <article class="mb-0">
      <div class="pb-0 white col">
        <v-textarea auto-grow v-model="output" :label="output"></v-textarea>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import PageHeader from '@/components/layouts/PageHeader.vue'

const dockerfileTargets = ['ruby', 'google chrome', 'selenium webdriver']

const inputs = ref([])
const output = ref('')

function generate() {
  // TODO:
}
</script>
