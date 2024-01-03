<template>
  <div class="mt-2 mb-20" id="content">
    <PageHeader title="Roadmap"></PageHeader>

    <h2>What you can expect in the future</h2>
    <ul>
      <li v-for="item in roadmaps">
        {{ item }}
      </li>
    </ul>
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
