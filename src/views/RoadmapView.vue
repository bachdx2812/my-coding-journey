<template>
  <div class="mt-2 mb-20" id="content">
    <PageHeader title="Roadmap"></PageHeader>

    <p>Last updated: {{ latestUpdatedAt }}</p>

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
const latestUpdatedAt = ref(null)

async function fetchList() {
  const response = await RoadMapModel.fetchList()

  roadmaps.value = response['list']
  latestUpdatedAt.value = response['latestUpdatedAt']
}

fetchList()
</script>

<style scoped>
.max-height-10 {
  max-height: 10px;
}
</style>
