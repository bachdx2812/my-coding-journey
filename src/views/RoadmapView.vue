<template>
  <div class="mt-2 mb-20" id="content">
    <PageHeader title="Roadmap"></PageHeader>

    <h2>What you can expect in the future</h2>

    <table class="text-emerald-400 tracking-[-0.5px]">
      <tbody>
        <tr v-for="(item, index) in roadmaps">
          <td>
            <span class="mr-2 font-mono"> {{ index }}: </span>
          </td>
          <td>
            <span class="text-yellow-300" v-if="item.done">
              ︎<v-icon icon="mdi-check"></v-icon>
            </span>

            {{ item.title }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Components
import PageHeader from '@/components/layouts/PageHeader.vue'

import RoadMapModel from '@/models/roadmap'

const roadmaps = ref([])

async function fetchList() {
  roadmaps.value = await RoadMapModel.fetchList()
}

fetchList()
</script>

<style scoped>
.max-height-10 {
  max-height: 10px;
}
</style>
