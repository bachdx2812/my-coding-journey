<template>
  <div class="mt-2 mb-20" id="content">
    <PageHeader title="Changelog"></PageHeader>

    <p>Last updated: {{ latestUpdatedAt }}</p>

    <ChangeLogPeriodComponent
      v-for="changeLogPeriod in changeLogs"
      :key="changeLogPeriod.period"
      :change-log-period="changeLogPeriod"
    ></ChangeLogPeriodComponent>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Components
import PageHeader from '@/components/layouts/PageHeader.vue'
import ChangeLogPeriodComponent from '@/components/ChangeLogPeriodItem.vue'

import ChangeLogPeriodModel from '@/models/changeLogPeriod'

const changeLogs = ref([])
const latestUpdatedAt = ref(null)

async function fetchList() {
  const response = await ChangeLogPeriodModel.fetchList()
  changeLogs.value = response['list']
  latestUpdatedAt.value = response['latestUpdatedAt']
}

fetchList()
</script>
